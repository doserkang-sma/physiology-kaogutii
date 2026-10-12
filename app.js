/**
 * 生理學期中考 測驗系統 app.js
 * 核心流程：前置自訂設定、單題作答（鎖定不可更改）、直接內嵌適當圖表、錯題循環重做機制
 */

(function () {
  'use strict';

  // -------------------- 1. 全域狀態 --------------------
  const state = {
    screen: 'home', // 'home' | 'quiz' | 'summary'
    
    // 前置首頁設定參數
    setup: {
      year: 'all',
      teacher: 'all',
      volume: 'all',
      count: '20',
      order: 'random'
    },

    // 當前測驗回合資料
    activeQuestions: [],
    currentIndex: 0,
    roundNumber: 1,
    isReviewMode: false,
    
    // 當次回合的作答紀錄：{ [qId]: { selectedKey: string, isCorrect: boolean } }
    currentRoundAnswers: {},
    
    // 待克服的錯題 ID 集合（錯題重做系統的核心）
    pendingWrongIds: new Set(),
    
    // 第一輪初始總題數 (統計用)
    initialRoundTotal: 0
  };

  // -------------------- 2. DOM 元素快取 --------------------
  const DOM = {
    // 頂部導航
    headerQuizStatus: document.getElementById('header-quiz-status'),
    headerReviewBadge: document.getElementById('header-review-badge'),
    headerProgressText: document.getElementById('header-progress-text'),
    btnNavHome: document.getElementById('btn-nav-home'),

    // 畫面容器
    screenHome: document.getElementById('screen-home'),
    screenQuiz: document.getElementById('screen-quiz'),
    screenSummary: document.getElementById('screen-summary'),

    // 首頁前置設定元件
    setupYear: document.getElementById('setup-year'),
    setupTeacher: document.getElementById('setup-teacher'),
    setupVolume: document.getElementById('setup-volume'),
    setupCount: document.getElementById('setup-count'),
    setupOrder: document.getElementById('setup-order'),
    setupPoolCount: document.getElementById('setup-pool-count'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),

    // 單題作答卡片
    qBadgeYear: document.getElementById('q-badge-year'),
    qBadgeTeacher: document.getElementById('q-badge-teacher'),
    qBadgeType: document.getElementById('q-badge-type'),
    qBadgeVol: document.getElementById('q-badge-vol'),
    qProgressBadge: document.getElementById('q-progress-badge'),
    qTopic: document.getElementById('q-topic'),
    qStem: document.getElementById('q-stem'),

    // 內嵌圖譜
    qDiagramContainer: document.getElementById('q-diagram-container'),
    qDiagramImg: document.getElementById('q-diagram-img'),
    qDiagramCaption: document.getElementById('q-diagram-caption'),

    // 選項與簡答
    optionsContainer: document.getElementById('options-container'),
    shortAnswerContainer: document.getElementById('short-answer-container'),
    shortAnswerInput: document.getElementById('short-answer-input'),
    btnSubmitShort: document.getElementById('btn-submit-short'),

    // 詳解面板
    explanationBox: document.getElementById('explanation-box'),
    explVolFile: document.getElementById('expl-vol-file'),
    explVolPage: document.getElementById('expl-vol-page'),
    explAnswer: document.getElementById('expl-answer'),
    explConceptContainer: document.getElementById('expl-concept-container'),
    explConcept: document.getElementById('expl-concept'),
    explText: document.getElementById('expl-text'),

    // 底部換題控制
    footerHint: document.getElementById('footer-hint'),
    btnNextQuestion: document.getElementById('btn-next-question'),

    // 結算畫面
    summaryTitle: document.getElementById('summary-title'),
    summaryDesc: document.getElementById('summary-desc'),
    sumTotalCount: document.getElementById('sum-total-count'),
    sumCorrectCount: document.getElementById('sum-correct-count'),
    sumWrongCount: document.getElementById('sum-wrong-count'),
    sumAccuracy: document.getElementById('sum-accuracy'),
    reviewPromptBox: document.getElementById('review-prompt-box'),
    rpTitle: document.getElementById('rp-title'),
    rpDesc: document.getElementById('rp-desc'),
    btnStartReview: document.getElementById('btn-start-review'),
    btnSummaryHome: document.getElementById('btn-summary-home')
  };

  // -------------------- 3. 畫面切換控制 --------------------
  function switchScreen(newScreen) {
    state.screen = newScreen;
    DOM.screenHome.classList.toggle('hidden', newScreen !== 'home');
    DOM.screenQuiz.classList.toggle('hidden', newScreen !== 'quiz');
    DOM.screenSummary.classList.toggle('hidden', newScreen !== 'summary');

    // 頂部導航狀態
    DOM.headerQuizStatus.classList.toggle('hidden', newScreen === 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // -------------------- 4. 首頁前置條件過濾題庫 --------------------
  function getCandidatePool() {
    return QUIZ_DATA.filter(q => {
      if (state.setup.year !== 'all' && q.exam !== state.setup.year) return false;
      if (state.setup.teacher !== 'all' && q.teacher !== state.setup.teacher) return false;
      if (state.setup.volume !== 'all' && q.volFile !== state.setup.volume) return false;
      return true;
    });
  }

  function updateSetupPoolCount() {
    const pool = getCandidatePool();
    DOM.setupPoolCount.textContent = `${pool.length} 題可用`;
    DOM.btnStartQuiz.disabled = pool.length === 0;
    if (pool.length === 0) {
      DOM.setupPoolCount.textContent = '0 題（請調整條件）';
    }
  }

  // -------------------- 5. 開始測驗流程 --------------------
  function startQuizSession() {
    let pool = getCandidatePool();
    if (pool.length === 0) {
      alert('目前篩選條件下沒有符合的題目，請放寬年份、教師或共筆範圍！');
      return;
    }

    // 依順序或隨機洗牌
    if (state.setup.order === 'random') {
      pool = shuffleArray([...pool]);
    } else {
      pool = [...pool];
    }

    // 截取指定題數
    const requestedCount = state.setup.count === 'all' ? pool.length : parseInt(state.setup.count, 10);
    state.activeQuestions = pool.slice(0, requestedCount);
    state.currentIndex = 0;
    state.roundNumber = 1;
    state.isReviewMode = false;
    state.currentRoundAnswers = {};
    state.pendingWrongIds.clear();
    state.initialRoundTotal = state.activeQuestions.length;

    switchScreen('quiz');
    renderCurrentQuestion();
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // -------------------- 6. 渲染單題作答卡片 --------------------
  function renderCurrentQuestion() {
    const q = state.activeQuestions[state.currentIndex];
    const totalInRound = state.activeQuestions.length;

    // 頂部導航指示
    DOM.headerProgressText.textContent = `第 ${state.currentIndex + 1} / ${totalInRound} 題`;
    DOM.qProgressBadge.textContent = `${state.currentIndex + 1} / ${totalInRound}`;

    if (state.isReviewMode) {
      DOM.headerReviewBadge.classList.remove('hidden');
      DOM.headerReviewBadge.textContent = `錯題重做・第 ${state.roundNumber} 輪（剩餘 ${state.pendingWrongIds.size} 題）`;
    } else {
      DOM.headerReviewBadge.classList.add('hidden');
    }

    // 標籤
    DOM.qBadgeYear.textContent = `${q.exam} 期中考`;
    DOM.qBadgeTeacher.textContent = q.teacher;
    DOM.qBadgeType.textContent = q.category;
    DOM.qBadgeVol.textContent = q.volFile;

    // 主題與題幹
    DOM.qTopic.textContent = `【${q.number}】${q.topic}`;
    DOM.qStem.textContent = q.stem;

    // 附屬圖譜：直接適當大小顯示，不需二次點擊放大
    if (q.diagram) {
      DOM.qDiagramContainer.classList.remove('hidden');
      DOM.qDiagramImg.src = q.diagram;
      DOM.qDiagramCaption.textContent = `本題附屬生理圖譜・${q.keyConcept || '重點圖形解析'}`;
    } else {
      DOM.qDiagramContainer.classList.add('hidden');
      DOM.qDiagramImg.src = '';
    }

    // 重置詳解面板與底部操作
    DOM.explanationBox.classList.add('hidden');
    DOM.btnNextQuestion.disabled = true;
    DOM.footerHint.textContent = '請點選上方任一選項作答（作答後鎖定無法更改）';

    // 如果是該輪最後一題，按鈕文字切換
    if (state.currentIndex === totalInRound - 1) {
      DOM.btnNextQuestion.textContent = '查看本輪測驗結果 →';
    } else {
      DOM.btnNextQuestion.textContent = '下一題 →';
    }

    // 選項渲染
    if (q.type === 'short') {
      DOM.optionsContainer.classList.add('hidden');
      DOM.shortAnswerContainer.classList.remove('hidden');
      DOM.shortAnswerInput.value = '';
      DOM.shortAnswerInput.disabled = false;
      DOM.btnSubmitShort.disabled = false;
      DOM.btnSubmitShort.textContent = '提交並查看官方參考解答';
    } else {
      DOM.shortAnswerContainer.classList.add('hidden');
      DOM.optionsContainer.classList.remove('hidden');
      DOM.optionsContainer.innerHTML = '';

      q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'option-btn';
        btn.dataset.key = opt.key;

        btn.innerHTML = `
          <span class="opt-pill">${opt.key}</span>
          <span class="opt-content">${escapeHTML(opt.text)}</span>
        `;

        btn.onclick = () => handleAnswerSelected(q, opt.key);
        DOM.optionsContainer.appendChild(btn);
      });
    }
  }

  // -------------------- 7. 選擇作答與答案鎖定 --------------------
  function handleAnswerSelected(q, selectedKey) {
    // 嚴格規則：作答後不可更改答案，每個題目只能作答一次！
    const optionBtns = DOM.optionsContainer.querySelectorAll('.option-btn');
    optionBtns.forEach(b => { b.disabled = true; });

    let isCorrect = false;
    if (Array.isArray(q.answer)) {
      isCorrect = q.answer.includes(selectedKey);
    } else {
      isCorrect = (selectedKey === q.answer);
    }

    // 標記選項視覺樣式
    optionBtns.forEach(btn => {
      const key = btn.dataset.key;
      if (key === selectedKey) {
        btn.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');
      }
      // 標註標準答案
      if (Array.isArray(q.answer) ? q.answer.includes(key) : key === q.answer) {
        btn.classList.add('is-answer-hint');
      }
    });

    // 錯題追蹤核心邏輯
    if (isCorrect) {
      // 答對了！如果這題原本在錯題庫中，自錯題庫移除！
      state.pendingWrongIds.delete(q.id);
      DOM.footerHint.textContent = '✅ 作答正確！請參閱下方詳解後點擊下一題。';
    } else {
      // 答錯了！加入錯題庫，待後續錯題重做循環餵題
      state.pendingWrongIds.add(q.id);
      DOM.footerHint.textContent = '❌ 作答錯誤！此題已自動納入錯題重做庫，後續將為您再次排考。';
    }

    // 紀錄作答
    state.currentRoundAnswers[q.id] = { selectedKey, isCorrect };

    // 立即揭示詳解與官方共筆出處
    revealExplanation(q);

    // 解鎖「下一題」按鈕
    DOM.btnNextQuestion.disabled = false;
  }

  // 簡答題提交
  function handleShortAnswerSubmit(q) {
    DOM.shortAnswerInput.disabled = true;
    DOM.btnSubmitShort.disabled = true;
    DOM.btnSubmitShort.textContent = '已提交・請對照官方評分解答';
    
    // 簡答題直接揭示詳解
    revealExplanation(q);
    DOM.btnNextQuestion.disabled = false;
    DOM.footerHint.textContent = '已展示官方評分標準，請核對後點擊下一題。';
  }

  // 揭示詳解面板
  function revealExplanation(q) {
    DOM.explanationBox.classList.remove('hidden');
    DOM.explVolFile.textContent = q.volFile;
    DOM.explVolPage.textContent = q.volPage;
    DOM.explAnswer.textContent = Array.isArray(q.answer) ? q.answer.join(', ') : q.answer;

    if (q.keyConcept) {
      DOM.explConceptContainer.classList.remove('hidden');
      DOM.explConcept.textContent = q.keyConcept;
    } else {
      DOM.explConceptContainer.classList.add('hidden');
    }

    DOM.explText.textContent = q.explanation;
  }

  // -------------------- 8. 前往下一題或結算 --------------------
  function goToNextQuestion() {
    if (state.currentIndex < state.activeQuestions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
      window.scrollTo({ top: 60, behavior: 'smooth' });
    } else {
      // 本輪作答結束，進入結算畫面！
      finishCurrentRound();
    }
  }

  // -------------------- 9. 回合完成與結算 --------------------
  function finishCurrentRound() {
    switchScreen('summary');

    const totalAnswered = state.activeQuestions.length;
    let correctCount = 0;
    let wrongCount = 0;

    state.activeQuestions.forEach(q => {
      const rec = state.currentRoundAnswers[q.id];
      if (rec && rec.isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

    DOM.sumTotalCount.textContent = `${totalAnswered} 題`;
    DOM.sumCorrectCount.textContent = `${correctCount} 題`;
    DOM.sumWrongCount.textContent = `${wrongCount} 題`;
    DOM.sumAccuracy.textContent = `${accuracy}%`;

    // 檢查剩餘錯題數量
    const remainingWrongCount = state.pendingWrongIds.size;

    if (remainingWrongCount > 0) {
      // 還有錯題！展示錯題重做引導
      DOM.summaryTitle.textContent = state.isReviewMode ? `錯題重做第 ${state.roundNumber} 輪完成` : '首輪測驗完成';
      DOM.summaryDesc.textContent = `本輪作答中共有 ${wrongCount} 題錯誤。錯題庫目前累積 ${remainingWrongCount} 道待克服題目。`;
      
      DOM.reviewPromptBox.classList.remove('all-clear');
      DOM.rpTitle.textContent = '🔁 錯題重做循環系統';
      DOM.rpDesc.textContent = `系統將針對目前尚未克服的 ${remainingWrongCount} 道錯題進行下一輪測驗。只要答對，該題便會立刻從錯題庫中移除，不再重複出現！`;

      DOM.btnStartReview.classList.remove('hidden');
      DOM.btnStartReview.textContent = `開始錯題重做（剩餘 ${remainingWrongCount} 題）`;
    } else {
      // 0 題錯題！全部克服！
      DOM.summaryTitle.textContent = '🎉 恭喜！所有題目已全數克服！';
      DOM.summaryDesc.textContent = '您在本次測驗中已完全答對所有目標題目，沒有任何遺留錯題！';
      
      DOM.reviewPromptBox.classList.add('all-clear');
      DOM.rpTitle.textContent = '🏆 錯題全數克服達成！';
      DOM.rpDesc.textContent = '恭喜您完成了精準刷題與錯題循環閉環！您可以點擊下方按鈕回到首頁，重新設定新的考卷年份或單元進行下一輪衝刺。';

      DOM.btnStartReview.classList.add('hidden');
    }
  }

  // -------------------- 10. 啟動錯題重做回合 --------------------
  function startReviewCycle() {
    if (state.pendingWrongIds.size === 0) return;

    // 從總題庫中找出所有在 pendingWrongIds 裡面的題目
    const reviewList = QUIZ_DATA.filter(q => state.pendingWrongIds.has(q.id));
    state.activeQuestions = shuffleArray([...reviewList]);
    state.currentIndex = 0;
    state.roundNumber++;
    state.isReviewMode = true;
    state.currentRoundAnswers = {};

    switchScreen('quiz');
    renderCurrentQuestion();
  }

  // -------------------- 11. 回到首頁功能 --------------------
  function returnToHome() {
    if (state.screen === 'quiz') {
      if (!confirm('確定要結束本次測驗並回到首頁重新設定嗎？未完成的進度將不會保留。')) {
        return;
      }
    }
    state.activeQuestions = [];
    state.currentIndex = 0;
    state.pendingWrongIds.clear();
    state.currentRoundAnswers = {};
    switchScreen('home');
    updateSetupPoolCount();
  }

  // -------------------- 12. 事件綁定 --------------------
  function bindEvents() {
    // 首頁下拉選單變更 -> 即時更新庫存題數
    DOM.setupYear.addEventListener('change', (e) => {
      state.setup.year = e.target.value;
      updateSetupPoolCount();
    });

    DOM.setupTeacher.addEventListener('change', (e) => {
      state.setup.teacher = e.target.value;
      updateSetupPoolCount();
    });

    DOM.setupVolume.addEventListener('change', (e) => {
      state.setup.volume = e.target.value;
      updateSetupPoolCount();
    });

    DOM.setupCount.addEventListener('change', (e) => {
      state.setup.count = e.target.value;
    });

    DOM.setupOrder.addEventListener('change', (e) => {
      state.setup.order = e.target.value;
    });

    // 開始測驗
    DOM.btnStartQuiz.addEventListener('click', startQuizSession);

    // 下一題
    DOM.btnNextQuestion.addEventListener('click', goToNextQuestion);

    // 簡答題提交
    DOM.btnSubmitShort.addEventListener('click', () => {
      const q = state.activeQuestions[state.currentIndex];
      handleShortAnswerSubmit(q);
    });

    // 結算畫面按鈕
    DOM.btnStartReview.addEventListener('click', startReviewCycle);
    DOM.btnSummaryHome.addEventListener('click', returnToHome);
    DOM.btnNavHome.addEventListener('click', returnToHome);

    // 鍵盤 Enter 或 右方向鍵換題
    window.addEventListener('keydown', (e) => {
      if (state.screen === 'quiz') {
        if (e.key === 'ArrowRight' && !DOM.btnNextQuestion.disabled) {
          DOM.btnNextQuestion.click();
        }
      }
    });
  }

  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // -------------------- 13. 初始化 --------------------
  document.addEventListener('DOMContentLoaded', () => {
    bindEvents();
    updateSetupPoolCount();
    switchScreen('home');
  });

})();
