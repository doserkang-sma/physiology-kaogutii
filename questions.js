/**
 * 生理學期中考 歷屆試題與詳解題庫數據
 * 包含 B12, B11, B10 完整題目、選項、官方解答、完整生理學詳解與共筆檔案出處
 * 自動產出於: 2026-10-12
 */

const QUIZ_DATA = [
  {
    "id": "b12-tf-1",
    "exam": "B12",
    "number": "是非 1",
    "type": "tf",
    "category": "是非題",
    "teacher": "余佳慧老師",
    "topic": "血液生理學：肺動脈血氧分壓與氧飽和度",
    "stem": "在肺動脈（pulmonary artery）中的血紅素氧飽和度為 40%。",
    "options": [
      {
        "key": "O",
        "text": "O（正確）"
      },
      {
        "key": "X",
        "text": "X（錯誤）"
      }
    ],
    "answer": "X",
    "explanation": "肺動脈中流動的是全身組織回流之缺氧靜脈混合血，其**氧分壓（PO₂）約為 40 mmHg**。然而，由於氧合血紅素解離曲線為 S 型曲線（Sigmoid curve），在 PO₂ = 40 mmHg 時，血紅素對氧氣仍具有高親和力，此時的**氧飽和度（SvO₂）實際上仍約有 75%～80%**！並非 40%。此題混淆了「氧分壓 40 mmHg」與「氧飽和度百分比」。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.28～29（余佳慧老師簡報）",
    "keyConcept": "SvO₂ 正常約 75%（PO₂=40mmHg，而非飽和度40%）",
    "diagram": "images/o2.jpg"
  },
  {
    "id": "b12-tf-2",
    "exam": "B12",
    "number": "是非 2",
    "type": "tf",
    "category": "是非題",
    "teacher": "余佳慧老師",
    "topic": "血液生理學：霍爾登效應（Haldane effect）",
    "stem": "二氧化碳和氧合血紅素（oxyhemoglobin）的親和力比去氧血紅素（deoxyhemoglobin）低。",
    "options": [
      {
        "key": "O",
        "text": "O（正確）"
      },
      {
        "key": "X",
        "text": "X（錯誤）"
      }
    ],
    "answer": "O",
    "explanation": "本題描述即為著名的**霍爾登效應（Haldane effect）**。當血紅素釋出氧氣轉變為去氧血紅素（deoxyhemoglobin）時，空間構型改變，對二氧化碳（結合為胺甲酸血紅素 Carbamino-Hb）以及氫離子（H⁺）的親和力顯著**高於**氧合血紅素（oxyhemoglobin）。因此，氧合血紅素對 CO₂ 之親和力較低，敘述正確。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.30（余佳慧老師簡報）",
    "keyConcept": "Haldane效應：Deoxy-Hb 對 CO₂ 與 H⁺ 親和力高於 Oxy-Hb",
    "diagram": "images/o2.jpg"
  },
  {
    "id": "b12-tf-3",
    "exam": "B12",
    "number": "是非 3",
    "type": "tf",
    "category": "是非題",
    "teacher": "余佳慧老師",
    "topic": "血液生理學：Rh 新生兒溶血症機制",
    "stem": "血型不相容（blood type incompatibility）造成的新生兒溶血常見於 Rh 陽性（Rh positive）的母親懷 Rh 陰性（Rh negative）的胚胎時。",
    "options": [
      {
        "key": "O",
        "text": "O（正確）"
      },
      {
        "key": "X",
        "text": "X（錯誤）"
      }
    ],
    "answer": "X",
    "explanation": "新生兒溶血症（Erythroblastosis fetalis）的典型條件為：**母親為 Rh 陰性（Rh-），而懷有 Rh 陽性（Rh+）的胎兒**。\n- 第一胎生產時，胎兒 Rh+ 紅血球進入母體，刺激母體免疫系統產生 Anti-D 抗體（IgG 型態）。\n- 第二胎若再度懷 Rh+ 胎兒，母體內的 Anti-D IgG 可穿過胎盤破壞胎兒紅血球，造成嚴重溶血與水腫。\n題目敘述恰好顛倒，故為錯誤。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.13（余佳慧老師簡報）",
    "keyConcept": "Rh 溶血條件：母親 Rh-、胎兒 Rh+，第二胎危險（IgG穿透胎盤）",
    "diagram": null
  },
  {
    "id": "b12-mc-1",
    "exam": "B12",
    "number": "選擇 1",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "細胞電生理：離子通道反轉電位與平衡電位",
    "stem": "在一般生理狀況下，鈉離子通道的 reverse potential（反轉電位/平衡電位）與下列何者最為接近？",
    "options": [
      {
        "key": "A",
        "text": "Ih channel"
      },
      {
        "key": "B",
        "text": "Cl channel"
      },
      {
        "key": "C",
        "text": "Acetylcholine 受體通道"
      },
      {
        "key": "D",
        "text": "T type Ca channel"
      }
    ],
    "answer": "D",
    "explanation": "依 Nernst 方程式計算：\n1. Na⁺ 通道平衡電位 E_Na ≈ +60 mV。\n2. T-type Ca²⁺ 通道：胞外 Ca²⁺ ≈ 2 mM，胞內自由 Ca²⁺ 僅約 100 nM，E_Ca ≈ +100 ~ +120 mV（正電位）。\n3. Ih channel：非選擇性陽離子通道（通透 Na⁺ 與 K⁺），反轉電位約為 0 mV。\n4. Acetylcholine receptor（AChR）：非選擇性陽離子通道，反轉電位亦約為 0 mV。\n5. Cl⁻ 通道：平衡電位 E_Cl ≈ -70 mV。\n各選項中唯有 (D) T-type Ca channel 同為較高正電位，與 +60 mV 最為接近。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.20～22【郭鐘金老師：細胞膜電位】",
    "keyConcept": "E_Na ≈ +60 mV；Ca²⁺ 通道反轉電位亦為正值（+100mV）；Ih 與 AChR 為 0 mV",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b12-mc-2",
    "exam": "B12",
    "number": "選擇 2",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "神經肌肉生理：NMJ 突觸間隙與突觸囊泡數量級",
    "stem": "一般人體之 neuromuscular junction（NMJ）之突觸間隙之寬度，以及神經末梢之包含 acetylcholine 之 vesicle 之直徑，大約各為多少 nm？（選擇最合理的組合）",
    "options": [
      {
        "key": "A",
        "text": "5，5"
      },
      {
        "key": "B",
        "text": "50，5"
      },
      {
        "key": "C",
        "text": "50，50"
      },
      {
        "key": "D",
        "text": "50，500"
      },
      {
        "key": "E",
        "text": "500，50"
      }
    ],
    "answer": "C",
    "explanation": "神經肌肉接頭（NMJ）數量級標準常識：\n- 突觸間隙（Synaptic cleft）寬度約為 **50 nm**（約 20~50 nm）。\n- 含有乙醯膽鹼（ACh）的突觸囊泡（Synaptic vesicle）直徑約為 **50 nm**（約 40~50 nm，內含約 5,000~10,000 個 ACh 分子，即 1 個量子 quantum）。\n故最合理組合為 (C) 50，50。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.48～50【郭鐘金老師：神經肌肉傳導】",
    "keyConcept": "NMJ 間隙 ≈ 50 nm；ACh 囊泡直徑 ≈ 50 nm（內含約 1 quantum ACh）",
    "diagram": null
  },
  {
    "id": "b12-mc-3",
    "exam": "B12",
    "number": "選擇 3",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "電生理：胞外鉀濃度對靜止電位、閾值與 AHP 影響",
    "stem": "將一 squid axon 置於胞外鉀離子濃度相對 artificial sea water 只有一半的溶液裡，其動作電位會發生什麼事？",
    "options": [
      {
        "key": "A",
        "text": "Threshold 上升，AHP 幅度減少"
      },
      {
        "key": "B",
        "text": "Threshold 上升，AHP 幅度增加"
      },
      {
        "key": "C",
        "text": "Threshold 下降，AHP 幅度減少"
      },
      {
        "key": "D",
        "text": "Threshold 下降，AHP 幅度增加"
      }
    ],
    "answer": "D",
    "explanation": "1. 胞外 [K⁺]_out 減半，根據 Nernst 方程式 E_K = 61·log([K⁺]_out / [K⁺]_in)，E_K 會變得**更負（超極化 Hyperpolarization）**，靜止膜電位 RMP 也跟著更負。\n2. 在更負的膜電位下，電壓型鈉通道的去活化閘門（h gate）移除 Inactivation，可用通道比例增加，因此觸發動作電位的**閾值（Threshold）下降**（更容易開啟）。\n3. 後過極化電位（AHP，After-hyperpolarization）趨近於 E_K，因 E_K 變得更負，峰值向下延伸，故 **AHP 幅度增加**。\n故正確答案為 (D)。",
    "volFile": "B12 生理 vol.2.pdf",
    "volPage": "Vol. 2 p.15～18【郭鐘金老師：動作電位調控】",
    "keyConcept": "低胞外鉀：E_K 更負 -> RMP 過極化 -> 鈉通道去不活化 -> 閾值下降、AHP幅度增加",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b12-mc-4",
    "exam": "B12",
    "number": "選擇 4",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "肌肉生理：平滑肌分類與電位特性（睫狀肌 vs 虹膜肌）",
    "stem": "眼中的 ciliary body（睫狀肌）和 iris（虹膜肌）的 muscle fiber 的膜電位去極化方式分別為何？",
    "options": [
      {
        "key": "A",
        "text": "兩者皆僅有 graded depolarization，沒有動作電位"
      },
      {
        "key": "B",
        "text": "兩者皆僅有動作電位，沒有 graded depolarization"
      },
      {
        "key": "C",
        "text": "前者有動作電位，後者有 graded depolarization"
      },
      {
        "key": "D",
        "text": "前者有 graded depolarization，後者有動作電位"
      }
    ],
    "answer": "A",
    "explanation": "眼睛內部的平滑肌（睫狀肌 Ciliary body 與虹膜肌肉 Iris）屬於典型的**多單元平滑肌（Multi-unit smooth muscle）**。\n此類平滑肌細胞間缺少間隙接合（Gap junction），受自主神經末梢細緻精密的個別突觸支配。其去極化通常僅產生**階梯性去極化（Graded depolarization）**，並不會引發傳導性動作電位（Action potential），以利精準控制眼球聚焦調節與瞳孔大小。故選 (A)。",
    "volFile": "B12 生理 vol.2.pdf",
    "volPage": "Vol. 2 p.36～38【郭鐘金老師：平滑肌分類與電位】",
    "keyConcept": "Multi-unit 平滑肌（睫狀肌、虹膜）：主要靠 Graded potential，無 AP",
    "diagram": null
  },
  {
    "id": "b12-mc-5",
    "exam": "B12",
    "number": "選擇 5",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "電生理：氯離子與鉀離子通道阻斷對動作電位之影響",
    "stem": "在某些哺乳動物的骨骼肌，亦有不少氯離子通道的存在。若測量其動作電位，則對其投給氯、鉀離子通道抑制劑（抑制劑使該等通道通透度皆減半，而開關作業不變），產生之變化下列何者最有可能？",
    "options": [
      {
        "key": "A",
        "text": "Threshold 升高，peak 升高"
      },
      {
        "key": "B",
        "text": "Threshold 降低，peak 升高"
      },
      {
        "key": "C",
        "text": "Threshold 升高，peak 降低"
      },
      {
        "key": "D",
        "text": "Threshold 降低，peak 降低"
      }
    ],
    "answer": "B",
    "explanation": "1. 靜止時 Cl⁻ 與 K⁺ 通道通透性提供對去極化的穩定負向電流阻力（Shunting effect）。當 Cl⁻ 與 K⁺ 通透度皆減半，外流/穩定超極化電流變小，細胞膜去極化阻力降低，因此**閾值（Threshold）降低**（更容易誘發動作電位）。\n2. 動作電位上升相與去極化峰值時，若復極化之 K⁺ 電流減半，則鈉離子內流的淨去極化電位受到更少的反向抑制，使得**動作電位峰值（Peak）升高**。\n故選 (B) Threshold 降低，peak 升高。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.32～35【郭鐘金老師：通道阻斷與動作電位】",
    "keyConcept": "Cl⁻/K⁺ 抑制 -> 去極化阻力降低 -> 閾值降低；復極化電流減小 -> 動作電位峰值上升",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b12-mc-6",
    "exam": "B12",
    "number": "選擇 6",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "藥理生理學：突觸前膜鈣流入延緩之解毒劑",
    "stem": "某毒素 C 會延緩突觸末梢鈣離子通道的開啟，假設某人中毒，就周邊神經到骨骼肌組織的狀況，服用何種藥物能減緩病情？",
    "options": [
      {
        "key": "A",
        "text": "鈉離子通道阻斷劑"
      },
      {
        "key": "B",
        "text": "氯離子通道阻斷劑"
      },
      {
        "key": "C",
        "text": "鉀離子通道阻斷劑"
      }
    ],
    "answer": "C",
    "explanation": "毒素 C 延緩神經末梢電壓敏感型 Ca²⁺ 通道開啟，導致動作電位到達末梢時 Ca²⁺ 來不及充分內流，ACh 釋放不足。\n使用**鉀離子通道阻斷劑（如 4-AP, 4-aminopyridine 或 3,4-DAP）**可以延緩末梢動作電位復極化，**延長動作電位時程（Duration）**，提供更充裕的時間讓 Ca²⁺ 通道打開並使 Ca²⁺ 充分內流，恢復 ACh 釋放量以改善肌無力（此即 3,4-DAP 治療 Lambert-Eaton 肌無力症候群之原理）。故選 (C)。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.52～55【郭鐘金老師：突觸傳導調控】",
    "keyConcept": "鉀通道阻斷劑（如4-AP）可延長神經末梢 AP 時程，使延緩之鈣通道有充裕時間內流",
    "diagram": null
  },
  {
    "id": "b12-mc-7",
    "exam": "B12",
    "number": "選擇 7",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "電生理：神經叢集放電（Bursting）波形與藥理變化",
    "stem": "某神經元在控制組呈現規律的 Burst 放電。投予藥物後，發現每個 Burst 內部的 Spike 數量明顯變多且密度增高，但 Burst 與 Burst 之間的間隔時間維持不變。請問最可能是投予了下列何種藥物？",
    "options": [
      {
        "key": "A",
        "text": "高濃度 TTX（Tetrodotoxin）"
      },
      {
        "key": "B",
        "text": "低濃度 TEA（Tetraethylammonium）"
      },
      {
        "key": "C",
        "text": "鈉離子通道促進劑（如 Veratridine 或 Batrachotoxin）"
      },
      {
        "key": "D",
        "text": "GABA 受體致效劑"
      }
    ],
    "answer": "C",
    "explanation": "Burst 內部由高頻發射的連續動作電位（Spikes）構成。\n當投予**鈉離子通道促進劑（如 Veratridine/Batrachotoxin）**時，鈉通道去活化被阻斷或活化電壓左移，使去極化放電更容易連續觸發，在平臺期內產生更高頻密集、數量更多的 Spikes。\n（TTX 會完全壓制 Spike；GABA 致效劑會產生過極化抑制；TEA 主要展寬個別 AP 時程）。郭鐘金老師期中必考萬年波形題！故選 (C)。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.38～41【郭鐘金老師：神經放電模式 Bursting】",
    "keyConcept": "Burst 放電 spike 密度增加 -> 鈉通道促進劑（Veratridine/Batrachotoxin）",
    "diagram": null
  },
  {
    "id": "b12-mc-8",
    "exam": "B12",
    "number": "選擇 8",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "肌肉生理：平滑肌收縮生化調控（MLCK vs 離子機制）",
    "stem": "平滑肌的收縮與放鬆主要受肌球蛋白輕鏈（Myosin light chain, MLC）磷酸化程度調控。下列敘述何者正確？",
    "options": [
      {
        "key": "A",
        "text": "胞內鈣離子直接與肌球蛋白結合使其磷酸化"
      },
      {
        "key": "B",
        "text": "鈣離子與鈣調蛋白（Calmodulin, CaM）結合後，活化 MLCK（肌球蛋白輕鏈激酶）"
      },
      {
        "key": "C",
        "text": "肌球蛋白輕鏈磷酸酶（MLCP）的作用是促進平滑肌收縮"
      },
      {
        "key": "D",
        "text": "鈉離子直接主導平滑肌橫橋之活化與磷酸化"
      }
    ],
    "answer": "B",
    "explanation": "平滑肌收縮之生化路徑：\n1. 胞內 Ca²⁺ 上升，與 **鈣調蛋白（Calmodulin, CaM）** 結合形成 Ca²⁺-CaM 複合體。\n2. 該複合體活化 **MLCK（Myosin light chain kinase）**。\n3. MLCK 將肌球蛋白的輕鏈磷酸化，使肌球蛋白頭部能與肌動蛋白（Actin）結合產生橫橋循環收縮。\n4. **MLCP（磷酸酶）** 負責去除磷酸基，促使平滑肌放鬆。\n故只有 (B) 完全正確。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.40～41【郭鐘金/李宗玄老師：平滑肌生化收縮】",
    "keyConcept": "平滑肌收縮：Ca²⁺ + CaM -> 活化 MLCK -> 磷酸化 MLC -> 橫橋收縮；放鬆靠 MLCP",
    "diagram": null
  },
  {
    "id": "b12-mc-9",
    "exam": "B12",
    "number": "選擇 9",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "神經肌肉接頭：安全因子（Safety factor）與受體突變",
    "stem": "人體 NMJ 具有極高的 Safety factor（安全因子）。若某基因突變使得突觸後 AChR 的關閉速度快一倍，或對鈉離子的單通道通透度增加一倍，該個體通常不會出現嚴重肌無力症狀，其主要生理原因為何？",
    "options": [
      {
        "key": "A",
        "text": "終板電位（EPP）之幅度遠高於引起肌纖維動作電位所需的閾值，安全係數充裕"
      },
      {
        "key": "B",
        "text": "突觸後受體完全飽和，不受通道開關動力學影響"
      },
      {
        "key": "C",
        "text": "神經末梢會等比例增加 10 倍的 ACh 釋放量作為代償"
      },
      {
        "key": "D",
        "text": "骨骼肌細胞膜上不依賴電壓敏感型鈉通道即可收縮"
      }
    ],
    "answer": "A",
    "explanation": "正常神經肌肉接頭（NMJ）的**安全因子（Safety Factor）約為 3 到 5 倍**：每次運動神經動作電位引起的終板電位（EPP）幅度約為 40~50 mV，而跨過動作電位閾值僅需約 10~15 mV。\n即使 AChR 受體開關動力學有適度改變，產生的 EPP 仍遠遠超過臨界閾值，確保每一次神經衝動都能 100% 誘發骨骼肌動作電位。故選 (A)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.30【郭鐘金老師：神經肌肉接頭安全係數】",
    "keyConcept": "NMJ Safety Factor 約 3~5 倍：EPP 遠高於觸發 AP 閾值，確保 1:1 傳導",
    "diagram": null
  },
  {
    "id": "b12-mc-10",
    "exam": "B12",
    "number": "選擇 10",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：心電圖間期生理意義（PR interval）",
    "stem": "心電圖上，從心房開始去極化到心室開始去極化之間的時間間隔，主要反映興奮通過房室節（AV node）之傳導延遲，在心電圖上對應何者？",
    "options": [
      {
        "key": "A",
        "text": "QRS complex"
      },
      {
        "key": "B",
        "text": "ST segment"
      },
      {
        "key": "C",
        "text": "QT interval"
      },
      {
        "key": "D",
        "text": "P-R interval（P-Q interval）"
      }
    ],
    "answer": "D",
    "explanation": "心房去極化在 ECG 表現為 P 波。自 P 波開始至 QRS 波群開始的時間稱為 **P-R 間期（P-R interval）**（正常值 0.12 ~ 0.20 秒），其主要時間消耗在房室節（AV node）的慢速傳導延遲，確保心房收縮完全排血至心室後，心室才開始激發收縮。故選 (D)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.8～11【李宗玄老師：心電圖生理】",
    "keyConcept": "PR interval（0.12~0.20s）代表心房去極化至 AV node 延遲進入心室的時間",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b12-mc-11",
    "exam": "B12",
    "number": "選擇 11",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：心電圖各波型與心房去極化完成",
    "stem": "在標準體表心電圖中，當心房完全完成去極化（Atrial depolarization complete）的瞬間，心電圖波型正好走到何處？",
    "options": [
      {
        "key": "A",
        "text": "QRS 複合波起點"
      },
      {
        "key": "B",
        "text": "T 波峰值"
      },
      {
        "key": "C",
        "text": "ST 段中點"
      },
      {
        "key": "D",
        "text": "P 波終止點（P wave completion）"
      }
    ],
    "answer": "D",
    "explanation": "P 波代表心房去極化向量之展開過程。當心房所有心肌細胞皆完成去極化時，整個心房處於等電位狀態，不再有電偶極向量差，因此在 ECG 上正好回到基線，即 **P 波的終點（P wave completion）**。故選 (D)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.8～10【李宗玄老師：心電圖各波型】",
    "keyConcept": "P波開始=心房開始去極化；P波結束=心房完全去極化完成",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b12-mc-12",
    "exam": "B12",
    "number": "選擇 12",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：慢反應節律點細胞（SA node）離子機制",
    "stem": "下列關於竇房結（SA node）慢反應細胞（Slow response cell）Phase 4 自發性去極化離子機制的敘述，共有幾種主要離子電流參與？",
    "options": [
      {
        "key": "A",
        "text": "僅有 1 種（Na⁺）"
      },
      {
        "key": "B",
        "text": "2 種（Na⁺ 與 K⁺）"
      },
      {
        "key": "C",
        "text": "3 種（Na⁺、K⁺ 與 Ca²⁺）"
      },
      {
        "key": "D",
        "text": "4 種"
      }
    ],
    "answer": "C",
    "explanation": "竇房結（SA node）Phase 4 舒張期自動去極化由三大離子電流協同完成：\n1. **Funny current（I_f）**：由超極化活化之 HCN 通道介導，主要通透 **Na⁺** 內流（並有少許 K⁺）。\n2. **K⁺ 電流衰減（I_K decay）**：原本維持過極化之延遲整流鉀通道關閉，外流阻力下降。\n3. **Ca²⁺ 電流（I_Ca,T 與 I_Ca,L）**：後半段 T-type 鈣通道短暫開啟，隨後 L-type 鈣通道活化，**Ca²⁺ 內流**推升膜電位至閾值。\n因此共有 **Na⁺、K⁺、Ca²⁺ 三種主要離子** 參與，故選 (C)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.33【李宗玄老師：慢反應細胞電生理】",
    "keyConcept": "SA node Phase 4：HCN (Na⁺) + K⁺衰減 + T/L-type (Ca²⁺) -> 共3種離子參與",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b12-mc-13",
    "exam": "B12",
    "number": "選擇 13",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：快反應心肌細胞動作電位高原期（Phase 2）",
    "stem": "在心室心肌細胞之 Fast response 動作電位中，Phase 2 高原期（Plateau phase）之所以能長時間維持在 0 mV 附近，主要依靠哪兩種離子流的動態平衡？",
    "options": [
      {
        "key": "A",
        "text": "Na⁺ 快速內流與 Cl⁻ 內流"
      },
      {
        "key": "B",
        "text": "K⁺ 內流與 Ca²⁺ 外流"
      },
      {
        "key": "C",
        "text": "L-type Ca²⁺ 通道之緩慢 Ca²⁺ 內流 與 延遲整流 K⁺ 通道之 K⁺ 外流"
      },
      {
        "key": "D",
        "text": "Na⁺-K⁺ ATPase 幫浦之反向運送"
      }
    ],
    "answer": "C",
    "explanation": "心室快反應細胞 Phase 2 高原期長達 200~300 ms，關鍵在於：\n- 內向去極化電流：由電壓敏感型 **L-type Ca²⁺ 通道（I_Ca,L）之緩慢 Ca²⁺ 內流** 維持。\n- 外向復極化電流：由延遲整流鉀通道（I_Ks, I_Kr）之 **K⁺ 外流** 互相抗衡。\n兩者大小相近、方向相反，形成膜電位停滯在 0 mV 附近的平台，確保充分的鈣誘發鈣釋放（CICR）收縮並防止心肌產生強直收縮。故選 (C)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.31【李宗玄老師：快反應動作電位】",
    "keyConcept": "Phase 2 高原期：L-type Ca²⁺ 內流 vs 延遲整流 K⁺ 外流 之動態平衡",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b12-mc-14",
    "exam": "B12",
    "number": "選擇 14",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：間隙接合蛋白 Connexin（Cx）亞型分佈",
    "stem": "下列有關心臟不同組織中 Connexin（Cx，間隙接合蛋白）分佈的對應配對，何者正確？",
    "options": [
      {
        "key": "A",
        "text": "Cx43 主要分佈於竇房結（SA node）"
      },
      {
        "key": "B",
        "text": "Cx40 主要分佈於心室收縮心肌細胞"
      },
      {
        "key": "C",
        "text": "Cx45 主要分佈於浦金氏纖維（Purkinje fiber）"
      },
      {
        "key": "D",
        "text": "Cx40 分佈於希氏束與浦金氏纖維；Cx43 分佈於心室與心房收縮心肌；Cx45 分佈於房室節（AV node）"
      }
    ],
    "answer": "D",
    "explanation": "心臟 Connexin 亞型分佈之經典考點：\n- **Cx40**：傳導速度極快的傳導系統（His bundle、Purkinje fiber）。\n- **Cx43**：主要收縮心肌細胞（工作心肌，Atrial & Ventricular myocardium）。\n- **Cx45**：傳導緩慢的節律組織（AV node、SA node），其通道電導最小，有利於傳導延遲。\n故 (D) 完全正確。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.12【李宗玄老師：心臟間隙接合蛋白】",
    "keyConcept": "Cx40=傳導系統(Purkinje)；Cx43=心室/心房工作心肌；Cx45=AV node(慢傳導)",
    "diagram": null
  },
  {
    "id": "b12-mc-15",
    "exam": "B12",
    "number": "選擇 15",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "循環生理：動靜脈吻合（Arteriovenous anastomosis）之分佈與功能",
    "stem": "動靜脈吻合枝（Arteriovenous anastomosis）是指小動脈不經過微血管網直接與小靜脈相連之構造。下列何處組織最常出現此類構造以調節體溫散熱或大量血流需求？",
    "options": [
      {
        "key": "A",
        "text": "大腦大腦皮質神經突觸"
      },
      {
        "key": "B",
        "text": "心肌毛細血管床"
      },
      {
        "key": "C",
        "text": "耳垂、指尖皮膚與男性睪丸"
      },
      {
        "key": "D",
        "text": "骨骼肌深層肌梭"
      }
    ],
    "answer": "C",
    "explanation": "動靜脈吻合（AV anastomoses）主要分佈於身體末梢與體溫調節器官，如：耳垂、手指尖、鼻尖皮膚（由交感神經調控管徑以控制皮膚散熱或保溫），以及睪丸（維持低於體溫之生精環境）與心臟局部。故選 (C)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.15～17【李宗玄老師：微循環吻合枝】",
    "keyConcept": "AV anastomoses：小動脈直接接小靜脈，見於耳垂、指尖、睪丸（體溫調節）",
    "diagram": null
  },
  {
    "id": "b12-mc-16",
    "exam": "B12",
    "number": "選擇 16",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "血液循環：心內膜與血管內皮抗凝血機制",
    "stem": "心內膜（Endocardium）之內皮細胞為了防止血液在心臟腔室內異常凝固，主要透過分泌下列哪兩種物質以抑制血小板凝集與血栓形成？",
    "options": [
      {
        "key": "A",
        "text": "Endothelin-1 與 Thromboxane A2"
      },
      {
        "key": "B",
        "text": "Angiotensin II 與 Histamine"
      },
      {
        "key": "C",
        "text": "一氧化氮（NO）與 前列腺環素（PGI₂）"
      },
      {
        "key": "D",
        "text": "Von Willebrand Factor 與 Fibrinogen"
      }
    ],
    "answer": "C",
    "explanation": "正常的血管與心內膜內皮細胞具有天然的抗血栓特性，主要透過持續釋放：\n1. **一氧化氮（Nitric oxide, NO）**：活化鳥苷酸環化酶（sGC）使 cGMP 上升，舒張血管平滑肌並強力抑制血小板活化。\n2. **前列腺環素（Prostacyclin, PGI₂）**：活化腺苷酸環化酶（AC）使 cAMP 上升，抑制血小板凝集。\n故選 (C)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.22～24【李宗玄老師：心內膜抗凝機制】",
    "keyConcept": "內皮天然抗血栓：釋放 NO (cGMP) 與 PGI₂ (cAMP) 抑制血小板",
    "diagram": null
  },
  {
    "id": "b12-mc-17",
    "exam": "B12",
    "number": "選擇 17",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟代謝：心外膜脂肪組織（Epicardial adipose tissue）功能",
    "stem": "下列關於包覆在心臟表面之外膜脂肪（Epicardial adipose tissue, EAT）之生理角色，何者描述最為正確？",
    "options": [
      {
        "key": "A",
        "text": "僅為單純填充保護組織，完全沒有任何內分泌或代謝活性"
      },
      {
        "key": "B",
        "text": "具有極高脂肪酸釋放能力為心肌提供能量，並可分泌脂肪激素（Adipokines）參與局部發炎與冠狀動脈調節"
      },
      {
        "key": "C",
        "text": "主要功能是儲存大量肝醣以備心肌無氧呼吸使用"
      },
      {
        "key": "D",
        "text": "直接與浦金氏纖維相連以調節電信號傳導速度"
      }
    ],
    "answer": "B",
    "explanation": "心外膜脂肪（Epicardial fat）與心肌細胞直接相鄰無筋膜阻隔：\n1. 它是高度活躍的內臟脂肪，具有高游離脂肪酸（FFA）周轉率，在生理狀況下可作為心肌能量的緩衝供給來源（心肌主要依賴脂肪酸 β-氧化供能）。\n2. 可分泌多種脂肪激素（如 Adiponectin, IL-6, TNF-α），在病理（如肥胖、動脈硬化）時參與局部發炎。\n故選 (B)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.28～29【李宗玄老師：心外膜脂肪】",
    "keyConcept": "心外膜脂肪（EAT）：高 FFA 釋放為心肌供能，具脂肪激素內分泌功能",
    "diagram": null
  },
  {
    "id": "b12-mc-18",
    "exam": "B12",
    "number": "選擇 18",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "循環生理：冠狀動脈血流調節介質",
    "stem": "冠狀動脈（Coronary artery）管徑與心肌灌注量主要受局部代謝產物調節（Metabolic control）。在心肌耗氧量增加時，最強效的局部冠脈血管舒張介質為下列何者？",
    "options": [
      {
        "key": "A",
        "text": "Acetylcholine"
      },
      {
        "key": "B",
        "text": "腺苷（Adenosine）"
      },
      {
        "key": "C",
        "text": "Norepinephrine"
      },
      {
        "key": "D",
        "text": "Angiotensin II"
      }
    ],
    "answer": "B",
    "explanation": "心肌具有極高的氧氣攝取率（平時即達 70%~80%），無法透過進一步提高氧攝取率來增加供氧，唯一的途徑是增加冠脈血流。\n當心肌代謝增加或缺氧時，ATP 水解產生 AMP，進一步生成 **腺苷（Adenosine）**。Adenosine 擴散至鄰近小動脈結合 A2A 受體，使平滑肌舒張，為心肌局部**最強烈的舒張介質**（Metabolic hyperemia）。Acetylcholine 為神經傳導物，不負責此代謝性擴張。故選 (B)。",
    "volFile": "B12 生理 vol.4.pdf",
    "volPage": "Vol. 4 p.12～15【李宗玄老師：冠脈循環與代謝】",
    "keyConcept": "冠脈代謝調控：心肌缺氧/高代謝時，Adenosine 為最強局部小動脈舒張物質",
    "diagram": null
  },
  {
    "id": "b12-mc-19",
    "exam": "B12",
    "number": "選擇 19",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心血管病理生理：心肌肥厚（Concentric vs Eccentric）與代償",
    "stem": "長期全身性高血壓（Hypertension）會導致左心室後負荷（Afterload）持續增高，此時左心室最典型的適應性結構改變為下列何者？",
    "options": [
      {
        "key": "A",
        "text": "離心性肥厚（Eccentric hypertrophy），心室腔室大幅擴大"
      },
      {
        "key": "B",
        "text": "肌節串聯排列（In series），心室壁厚度變薄"
      },
      {
        "key": "C",
        "text": "向心性肥厚（Concentric hypertrophy），肌節並聯排列（In parallel），心室壁明顯增厚"
      },
      {
        "key": "D",
        "text": "心肌細胞數目大量有絲分裂增加（Hyperplasia）"
      }
    ],
    "answer": "C",
    "explanation": "根據 Laplace 定律：室壁張力 σ = P·r / (2·h)。\n1. **後負荷增加（高血壓、主動脈瓣狹窄）**：心室內壓力 P 劇增，為了降低室壁張力，新合成的肌節以 **並聯方式（In parallel）** 添加，導致心室壁厚度 h 大幅增厚，稱為 **向心性肥厚（Concentric hypertrophy）**。\n2. 前負荷增加（容量過負荷，如二尖瓣逆流）則會以串聯（In series）方式添加肌節，形成離心性肥厚（Eccentric hypertrophy）。\n3. 成年心肌細胞基本不具分裂能力，肥厚是增大（Hypertrophy）而非增生（Hyperplasia）。故選 (C)。",
    "volFile": "B12 生理 vol.4.pdf",
    "volPage": "Vol. 4 p.22～25【李宗玄老師：心室肥厚病理生理】",
    "keyConcept": "高血壓/壓力負荷 -> 並聯排列 (In parallel) -> 向心性肥厚 (Concentric) 壁增厚",
    "diagram": null
  },
  {
    "id": "b12-mc-20",
    "exam": "B12",
    "number": "選擇 20",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟生理與臨床：心室前負荷與心輸出量之代償調控",
    "stem": "在正常個體中，若長期輕度增加左心室前負荷（Preload），心臟會透過何種機制使靜態心輸出量（Cardiac output）維持在恆定水平？",
    "options": [
      {
        "key": "A",
        "text": "交感神經長期過度活化，心率倍增"
      },
      {
        "key": "B",
        "text": "心肌完全停止收縮以避免能量耗竭"
      },
      {
        "key": "C",
        "text": "經由 Frank-Starling 機制稍微增加每搏量，但正常感壓反射（Baroreceptor）會適度調降心率，維持 CO = SV × HR 恆定"
      },
      {
        "key": "D",
        "text": "腎臟停止水分再吸收"
      }
    ],
    "answer": "C",
    "explanation": "前負荷（Preload）增加時，根據 Frank-Starling 定律，心室舒張末期容積增加會增強每次心縮排血量（Stroke Volume, SV）。\n但在健康個體中，動脈血壓感壓反射（Baroreflex）機能完備，血壓輕微上升會反向調整心跳率（Heart Rate, HR），使總心輸出量（CO = SV × HR）維持在器官代謝需求所需之恆定水平。故選 (C)。",
    "volFile": "B12 生理 vol.4.pdf",
    "volPage": "Vol. 4 p.18～20【李宗玄老師：心輸出量調控】",
    "keyConcept": "正常狀態下 Baroreflex 穩定 CO = SV × HR，避免 Preload 引起失控性上升",
    "diagram": null
  },
  {
    "id": "b12-mc-21",
    "exam": "B12",
    "number": "選擇 21",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：心肌 Fast response 動作電位特性與時程",
    "stem": "下列有關心室心肌細胞 Fast response 動作電位與離子機制的敘述，何者完全正確？\n(1) 可分為 0-4 期，一次動作電位時程約為 250~300 ms\n(2) 第 0 期 Na⁺ 通道 m gate 先開啟，h gate 後開啟\n(3) 第 2 期是由於電壓型 Ca²⁺ 通道打開，Ca²⁺ 離子流出細胞\n(4) Na⁺/K⁺ ATPase、Na⁺/Ca²⁺ Exchanger 負責維持與回復第 4 期離子濃度",
    "options": [
      {
        "key": "A",
        "text": "(1), (3), (4)"
      },
      {
        "key": "B",
        "text": "(2), (3)"
      },
      {
        "key": "C",
        "text": "(1), (4)"
      },
      {
        "key": "D",
        "text": "(1), (2), (4)"
      }
    ],
    "answer": "C",
    "explanation": "選項分析：\n- (1) 正確：心室快反應動作電位時程長達約 250~300 ms，具長不反應期。\n- (2) 錯誤：去極化時 m gate（活化閘門）迅速開啟，隨後 h gate（去活化閘門）**關閉**（不是開啟），引起鈉通道去活化（Inactivation）。\n- (3) 錯誤：第 2 期 L-type 鈣通道打開，Ca²⁺ 是**流入**細胞內，不是流出。\n- (4) 正確：第 3、4 期依賴 Na⁺/K⁺ ATPase 與 NCX（鈉鈣交換器）將胞內過多 Na⁺、Ca²⁺ 排出，回復基線離子梯度。\n故只有 (1), (4) 正確，選 (C)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.30～32【李宗玄老師：快反應動作電位】",
    "keyConcept": "快反應 AP 約 300 ms；m gate開、h gate關(去活化)；Phase 2 是 Ca²⁺ 流入",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b12-mc-22",
    "exam": "B12",
    "number": "選擇 22",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟病理：Anthracycline 抗癌藥物之心臟毒性機轉",
    "stem": "臨床化療藥物 Anthracycline（如 Doxorubicin）常引起嚴重的心肌毒性與心肌病變，下列何者為其核心分子致病機轉？",
    "options": [
      {
        "key": "A",
        "text": "破壞肌肉細胞膜上之膽固醇"
      },
      {
        "key": "B",
        "text": "造成心肌粒線體 DNA 損傷、產生過量 ROS 活性氧自由基並抑制粒線體新生（Biogenesis）"
      },
      {
        "key": "C",
        "text": "直接阻斷 AV node 之傳導"
      },
      {
        "key": "D",
        "text": "促進冠狀動脈異常大量血管新生"
      }
    ],
    "answer": "B",
    "explanation": "Anthracycline（如 Doxorubicin 阿黴素）的心肌毒性特徵：\n1. 心肌細胞含有極高密度的粒線體，Anthracycline 進入粒線體後產生大量活性氧（ROS），破壞粒線體 DNA（mtDNA）。\n2. 抑制 Topoisomerase IIβ，破壞粒線體 Biogenesis 與 ATP 生成，導致心肌細胞凋亡與心肌病變。\n故選 (B)。",
    "volFile": "B12 生理 vol.4.pdf",
    "volPage": "Vol. 4 p.34【李宗玄老師：心臟毒性與代謝病理】",
    "keyConcept": "Anthracycline 心毒性：破壞粒線體 DNA，產生過量 ROS，抑制 ATP 合成",
    "diagram": null
  },
  {
    "id": "b12-mc-23",
    "exam": "B12",
    "number": "選擇 23",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：竇房結節律點細胞之動作電位敘述",
    "stem": "下列有關 SA node 節律點心肌細胞動作電位與離子流動之敘述，何者正確？\n(1) 閾值電位約為 -40 mV\n(2) 第四期自動去極化的速度快於 AV node 心肌細胞\n(3) 第四期自動去極化主要是因為 T-type 鈣通道自發活化流入所引發\n(4) L-type 鈣通道參與第四期末端去極化與第 0 期上升相",
    "options": [
      {
        "key": "A",
        "text": "(1), (2), (4)"
      },
      {
        "key": "B",
        "text": "(1), (3)"
      },
      {
        "key": "C",
        "text": "(1), (2)"
      },
      {
        "key": "D",
        "text": "(1), (3), (4)"
      }
    ],
    "answer": "A",
    "explanation": "解析：\n- (1) 正確：SA node 動作電位閾值約在 -40 mV 左右。\n- (2) 正確：SA node 第四期自發去極化斜率最陡、速度最快（約 60~100 bpm），快於 AV node（40~60 bpm），因而成為心臟的主導節律點（Overdrive suppression）。\n- (3) 錯誤：第四期最初之去極化主要由 **HCN 通道介導之 Funny current（I_f）** 啟動，T-type Ca²⁺ 僅在後半段輔助。\n- (4) 正確：L-type Ca²⁺ 通道在跨過 -40 mV 閾值時開啟，主導第 0 期去極化上升相。\n故 (1), (2), (4) 正確，選 (A)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.33【李宗玄老師：節律點電生理】",
    "keyConcept": "SA node：閾值 -40mV；Phase 4 斜率快於 AV node；由 HCN (If) 啟動",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b12-mc-24",
    "exam": "B12",
    "number": "選擇 24",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟神經調控：交感與副交感神經之細胞訊號路徑",
    "stem": "有關心臟自律神經調控之分子機制，下列敘述何者正確？\n(1) 交感神經活化直接作用於心室肌 β₁ 受體，透過 cAMP-PKA 促進 L-type 鈣通道，增加心肌收縮力\n(2) 副交感神經透過乙醯膽鹼結合 M₂ 受體，抑制腺苷酸環化酶，降低 cAMP 與 PKA 活性\n(3) 心衰竭時交感神經長期過度活化伴隨副交感神經張力減退（失衡）\n(4) 交感神經可直接透過提升 cAMP 增強節律點 HCN 通道活性，使心率加快",
    "options": [
      {
        "key": "A",
        "text": "(1), (4)"
      },
      {
        "key": "B",
        "text": "(1), (2), (3), (4)"
      },
      {
        "key": "C",
        "text": "(1), (2), (4)"
      },
      {
        "key": "D",
        "text": "(2), (3), (4)"
      }
    ],
    "answer": "B",
    "explanation": "全部四項描述皆精準符合生理學機制：\n(1) 交感神經釋放 NE 結合 β₁ 受體 -> Gs 蛋白 -> 活化 AC -> cAMP 上升 -> PKA 磷酸化 L-type Ca²⁺ 通道與 Phospholamban -> 增強收縮力。\n(2) 副交感 Ach 結合 M₂ -> Gi 蛋白 -> 抑制 AC -> cAMP 下降。\n(3) 心衰竭時交感長期過度興奮、迷走神經張力喪失，為典型自律神經失衡。\n(4) cAMP 可直接結合於 HCN 通道的 CNBD 結構域，使 Phase 4 斜率變陡，加速心率。\n故選 (B)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.39～41【李宗玄老師：自律神經心臟調控】",
    "keyConcept": "β₁-Gs-cAMP-PKA 增心肌收縮；M₂-Gi-cAMP下降減緩心跳；cAMP直開HCN",
    "diagram": null
  },
  {
    "id": "b12-mc-25",
    "exam": "B12",
    "number": "選擇 25",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心電圖生理：病理心電圖波型判讀（LBBB 與心室肥大）",
    "stem": "下列關於臨床心電圖特徵之敘述，何者正確？\n(1) ST 區段抬高（ST elevation），代表心肌可能有急性透壁性梗塞（Transmural infarction）\n(2) 心室肥大（Ventricular hypertrophy）時，QRS complex 電壓幅度通常下降\n(3) 左束支傳導阻滯（Left bundle branch block, LBBB）會導致 QRS 波群寬度延長且常出現切跡分岔（M 型波）\n(4) Atrial fibrillation（心房顫動）會導致心電圖出現高頻鋸齒狀 F wave",
    "options": [
      {
        "key": "A",
        "text": "(1), (2)"
      },
      {
        "key": "B",
        "text": "(2), (3)"
      },
      {
        "key": "C",
        "text": "(1), (3)"
      },
      {
        "key": "D",
        "text": "(2), (4)"
      }
    ],
    "answer": "C",
    "explanation": "分析：\n- (1) 正確：ST 段抬高為急性透壁性心肌梗塞（STEMI）之黃金診斷標準。\n- (2) 錯誤：心室心肌肥大（LVH）由於心室肌質量增多，去極化向量大幅增大，QRS complex 電壓幅度通常**大幅上升**（如 Sokolow-Lyon 指標：V1 的 S 波 + V5 的 R 波 > 35 mm）。\n- (3) 正確：左束支傳導阻滯時，左心室去極化依賴心肌緩慢傳導，QRS 延長 (>0.12s) 且在 I, aVL, V5, V6 出現切跡分岔的寬 R 波。\n- (4) 錯誤：心房撲動（Atrial Flutter）才出現規則鋸齒狀 F 波；心房顫動（AF）呈現不規則極細之 f 波或幾乎看不見。\n故 (1), (3) 正確，選 (C)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.9～17【李宗玄老師：心電圖病理生理】",
    "keyConcept": "心室肥大 -> QRS 電壓上升；LBBB -> QRS 增寬分岔；STEMI -> ST 段抬高",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b12-mc-26",
    "exam": "B12",
    "number": "選擇 26",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "血流動力學：柏肅葉定律與血管半徑 4 次方關係",
    "stem": "A patient has a 50% narrowing (stenosis) for her left renal artery. What is the expected change in blood flow through the stenotic artery according to Poiseuille's law?",
    "options": [
      {
        "key": "A",
        "text": "1/16"
      },
      {
        "key": "B",
        "text": "1/8"
      },
      {
        "key": "C",
        "text": "1/4"
      },
      {
        "key": "D",
        "text": "1/2"
      },
      {
        "key": "E",
        "text": "no change"
      }
    ],
    "answer": "A",
    "explanation": "根據柏肅葉定律（Poiseuille's law）：\nQ = (ΔP · π · r⁴) / (8 · η · L)\n血流量 Q 與血管半徑 r 的四次方成正比（阻力 R 與 r⁴ 成反比）。\n管徑狹窄 50%，即半徑變為原本的 1/2（r' = 0.5r）。\n因此血流變為：(1/2)⁴ = **1/16**！張哲逢老師萬年必考原型題！故選 (A)。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.9【張哲逢老師：Poiseuille 4次方定律】",
    "keyConcept": "Poiseuille 定律：Q ∝ r⁴。半徑減半 (50%) -> 血流量減至 (1/2)⁴ = 1/16",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b12-mc-27",
    "exam": "B12",
    "number": "選擇 27",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "血流動力學：雷諾數（Reynolds number）與擾流成因",
    "stem": "The tendency of turbulence is increased when:",
    "options": [
      {
        "key": "A",
        "text": "Viscosity increase"
      },
      {
        "key": "B",
        "text": "Sudden occlusion / stenosis creates a high-velocity jet"
      },
      {
        "key": "C",
        "text": "Hematocrit increase"
      },
      {
        "key": "D",
        "text": "Vessel diameter decreases while velocity remains unchanged"
      }
    ],
    "answer": "B",
    "explanation": "雷諾數（Reynolds number, Re）公式：\nRe = (ρ · D · v) / η\n- 當 Re > 2000 時，層流轉為擾流（Turbulence），產生雜音（Murmur/Bruit）。\n- (B) 血管突然狹窄或阻塞使局部流速 v 劇烈飆升（high-velocity jet），顯著增加雷諾數引起擾流。\n- (A) 與 (C)：黏滯度 η 上升（如血比容增加）會使 Re 下降，抑制擾流。\n故選 (B)。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.14【張哲逢老師：雷諾數與亂流】",
    "keyConcept": "Re = (ρ·D·v)/η。流速增加、黏滯度下降（貧血）或管徑突變 -> 產生擾流與雜音",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b12-mc-28",
    "exam": "B12",
    "number": "選擇 28",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "血流動力學：動脈脈壓（Pulse pressure）之決定因子",
    "stem": "Arterial pulse pressure cannot be increased by which of the following?",
    "options": [
      {
        "key": "A",
        "text": "Arterial atherosclerosis（動脈粥狀硬化，順應性下降）"
      },
      {
        "key": "B",
        "text": "Aortic valve stenosis（主動脈瓣狹窄）"
      },
      {
        "key": "C",
        "text": "Clinical hypertension"
      },
      {
        "key": "D",
        "text": "Exercise（運動使每搏量 Stroke Volume 增加）"
      }
    ],
    "answer": "B",
    "explanation": "脈壓（Pulse Pressure, PP）= 收縮壓（SBP） - 舒張壓（DBP）。\n決定因子：每搏量（SV）成正比，大動脈順應性（Compliance, C）成反比。\n- (A) 動脈硬化使 Compliance 下降，收縮壓飆高，PP 顯著增加。\n- (D) 運動使心肌收縮力增強、SV 增大，PP 顯著增加。\n- (B) **主動脈瓣狹窄（Aortic valve stenosis）**：左心室射血受阻，每搏量 SV 明顯下降，射血時間拉長且峰值收縮壓下降，導致脈壓變窄（PP 下降，臨床上呈現 pulsus parvus et tardus）。因此不會增加脈壓！故選 (B)。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.18～21【張哲逢老師：動脈脈壓】",
    "keyConcept": "PP ∝ SV / Compliance。主動脈瓣狹窄使 SV 下降 -> 脈壓下降（狹窄變小）",
    "diagram": null
  },
  {
    "id": "b12-mc-29",
    "exam": "B12",
    "number": "選擇 29",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "心血管反射：臥姿改立姿（Supine to standing）之血流動力學",
    "stem": "When a person changes position from lying supine to standing, which of the following description is FALSE?",
    "options": [
      {
        "key": "A",
        "text": "Central venous pressure (CVP) decreases"
      },
      {
        "key": "B",
        "text": "There is a fall in Arterial pulse pressure"
      },
      {
        "key": "C",
        "text": "Total circulation volume slightly decreases (due to capillary filtration in legs)"
      },
      {
        "key": "D",
        "text": "Gravity causes a backflow of venous blood into the legs, leading to venous pooling"
      }
    ],
    "answer": "D",
    "explanation": "下肢靜脈具有**靜脈瓣（Venous valves）**，能防止血液逆流（backflow）！\n- 由臥姿轉為立姿時，重力作用造成血液滯留於下肢順應性靜脈中（Venous pooling），但並非「逆流」（瓣膜阻止了逆流）。\n- 血液滯留於下肢使得靜脈回流減少 -> 心室前負荷下降 -> CVP 下降 -> 每搏量下降 -> 脈壓下降，促發感壓反射。\n故 (D) 稱「逆流 backflow」為錯誤敘述，選 (D)。",
    "volFile": "B12 生理 vol.8.pdf",
    "volPage": "Vol. 8 p.14～16【張哲逢老師：姿勢改變心血管反射】",
    "keyConcept": "立姿：靜脈瓣防止逆流！重力蓄積（Pooling）使回心血量下降、CVP下降、脈壓下降",
    "diagram": null
  },
  {
    "id": "b12-mc-30",
    "exam": "B12",
    "number": "選擇 30",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "微循環生理：骨骼肌小動脈舒張對微血管之效應",
    "stem": "Vasodilation of arteriole at skeletal muscle is likely to:",
    "options": [
      {
        "key": "A",
        "text": "Increase blood perfusion at muscle capillary"
      },
      {
        "key": "B",
        "text": "Increase CO₂ level at capillary"
      },
      {
        "key": "C",
        "text": "Lower blood pressure at capillary"
      },
      {
        "key": "D",
        "text": "Neither increase nor decrease muscle lymph flow"
      }
    ],
    "answer": "A",
    "explanation": "小動脈（Arteriole）是微血管前阻力血管（Precapillary resistance vessel）。\n當骨骼肌小動脈舒張（Vasodilation）時：\n1. 前阻力下降，進入骨骼肌微血管網的血流灌注量大幅上升（Increase blood perfusion at muscle capillary）。\n2. 微血管靜水壓（Capillary hydrostatic pressure, Pc）隨之上升，促使組織濾過增加，淋巴流量也會增加。\n故 (A) 正確。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.25～27【張哲逢老師：微血管阻力與灌注】",
    "keyConcept": "小動脈舒張 -> 微血管灌流量增加、微血管靜水壓上升 -> 濾過增加",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b12-mc-31",
    "exam": "B12",
    "number": "選擇 31",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "腎臟與循環：醛固酮（Aldosterone）調節血壓機制",
    "stem": "In the renal system, which hormone increases sodium reabsorption and thus increases the blood pressure?",
    "options": [
      {
        "key": "A",
        "text": "Aldosterone"
      },
      {
        "key": "B",
        "text": "Angiotensinogen"
      },
      {
        "key": "C",
        "text": "Angiotensin I"
      },
      {
        "key": "D",
        "text": "Antidiuretic hormone（ADH，主要增加水分重吸收而非鈉）"
      }
    ],
    "answer": "A",
    "explanation": "腎上腺皮質球狀帶分泌的**醛固酮（Aldosterone）**作用於腎臟遠曲小管末端與皮質集尿管主細胞（Principal cells），促進基底膜 Na⁺/K⁺ ATPase 與頂端膜 ENaC 表現，主動**增加 Na⁺ 重吸收（並排泄 K⁺/H⁺）**，進而保留水分以提升細胞外液量與血壓。故選 (A)。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.30～32【張哲逢老師：血壓長程調控】",
    "keyConcept": "Aldosterone：保鈉排鉀保水，調升血壓；ADH：單純保水（AQP2）",
    "diagram": null
  },
  {
    "id": "b12-mc-32",
    "exam": "B12",
    "number": "選擇 32",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "血流動力學：動脈壓力波型與血管舒張效應",
    "stem": "This change of aortic wave in the figure illustrates the effect of vasodilation / lowering blood pressure. What is the pharmacological or physiological effect?",
    "options": [
      {
        "key": "A",
        "text": "Arterial stiffness"
      },
      {
        "key": "B",
        "text": "Vasorelaxant（血管舒張劑）"
      },
      {
        "key": "C",
        "text": "Vasoconstrictor"
      },
      {
        "key": "D",
        "text": "Atherosclerosis"
      }
    ],
    "answer": "B",
    "explanation": "在主動脈壓力波型中：\n血管舒張劑（Vasorelaxant）使周邊血管阻力與平均動脈壓下降，降低脈波傳導速度（Pulse wave velocity, PWV），使得周邊反射回來的反射波（Reflected wave）向後延遲到達，降落於舒張期，從而降低收縮期壓力峰值。動脈硬化（Stiffness）則恰好相反，會使反射波提前疊加放大收縮壓。故圖中變化代表 (B) Vasorelaxant。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.22～24【張哲逢老師：動脈脈波圖形分析】",
    "keyConcept": "Vasorelaxant：降低血壓，延遲反射波抵達，減緩收縮期擴增壓（Augmentation）",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b12-mc-33",
    "exam": "B12",
    "number": "選擇 33",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "血流動力學：血流自動調節機制（Autoregulation）",
    "stem": "Which following statement regarding the autoregulation of blood flow is correct?",
    "options": [
      {
        "key": "A",
        "text": "Minimize the change in blood perfusion when perfusion pressure changes within a physiologic range"
      },
      {
        "key": "B",
        "text": "Is simply the increase of blood supply when metabolic demand increases"
      },
      {
        "key": "C",
        "text": "Is particularly well-developed in the pulmonary circulation"
      },
      {
        "key": "D",
        "text": "Cannot occur in organs with intact innervation"
      }
    ],
    "answer": "A",
    "explanation": "血流自動調節（Autoregulation）的嚴格生理學定義是：**在器官灌注壓（Perfusion pressure）於一定生理範圍（約 60~160 mmHg）內波動時，器官透過內在肌原機制（Myogenic mechanism）與代謝回饋，使局部血流量維持相對恆定**（Minimize the change in blood perfusion）。\n(B) 是代謝性充血（Hyperemia），定義太窄；(C) 肺循環阻力極低，autoregulation 極弱（腦、腎、心最發達）。故 (A) 正確。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.28～30【張哲逢老師：血流自動調節】",
    "keyConcept": "Autoregulation：當灌注壓改變時，器官自發調節阻力以維持血流量恆定（腦、腎最顯著）",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b12-mc-34",
    "exam": "B12",
    "number": "選擇 34",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "心血管調控：運動中神經心血管調節",
    "stem": "Which of the following statements is FALSE? The cardiovascular adjustment during exercise can be initiated partly by:",
    "options": [
      {
        "key": "A",
        "text": "Central command by the cerebral cortex"
      },
      {
        "key": "B",
        "text": "Feedforward by the alerting response"
      },
      {
        "key": "C",
        "text": "Central resetting of the baroreflex to a lower operating point"
      },
      {
        "key": "D",
        "text": "A rise of circulating catecholamines such as epinephrine and norepinephrine"
      }
    ],
    "answer": "C",
    "explanation": "運動時，大腦皮質的 Central command 與骨骼肌化學受體/機械受體活化交感神經，將動脈感壓反射的控制點**重置到更高的水平（Resetting to a HIGHER operating point）**，允許在劇烈運動中心率與收縮壓同時顯著上升，而不會被副交感神經強行拉低。\n(C) 敘述成「重置到較低點 lower operating point」為錯誤，故選 (C)。",
    "volFile": "B12 生理 vol.8.pdf",
    "volPage": "Vol. 8 p.20～24【張哲逢老師：運動心血管調控】",
    "keyConcept": "運動中心血管調節：Baroreflex 被重置到更高設定點（Higher set point）！",
    "diagram": null
  },
  {
    "id": "b12-mc-35",
    "exam": "B12",
    "number": "選擇 35",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "微循環生理：組織水腫（Tissue edema）之 Starling 力學成因",
    "stem": "Tissue edema usually DOES NOT occur in which of the following clinical scenarios?",
    "options": [
      {
        "key": "A",
        "text": "Arterioles dilate significantly with Ca²⁺ channel blocking drug"
      },
      {
        "key": "B",
        "text": "Essential hypertension without heart or renal failure"
      },
      {
        "key": "C",
        "text": "Venous pressure increased by congestive heart failure"
      },
      {
        "key": "D",
        "text": "Axillary lymph plexus removed due to breast cancer surgery"
      }
    ],
    "answer": "B",
    "explanation": "Starling 力學水腫成因包括：\n- 微血管靜水壓 Pc 升高（心衰竭靜脈壓上升、小動脈過度舒張如 CCB 藥物副作用造成腳踝水腫）。\n- 淋巴管阻塞（乳癌手術清除腋下淋巴結導致淋巴水腫）。\n- 血漿膠體滲透壓下降（肝硬化低白蛋白血症）。\n(B) **原發性高血壓（Essential hypertension）**：因小動脈代償性強烈收縮（Precapillary resistance 增高），血壓降落在小動脈處，下游微血管靜水壓 Pc 通常維持正常，因此不會引起組織水腫。故選 (B)。",
    "volFile": "B12 生理 vol.8.pdf",
    "volPage": "Vol. 8 p.8～12【張哲逢老師：微循環與水腫】",
    "keyConcept": "原發性高血壓小動脈收縮阻擋壓力 -> 微血管靜水壓不升 -> 通常不水腫",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b12-mc-36",
    "exam": "B12",
    "number": "選擇 36",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "循環生理：心衰竭（Heart failure）時腎臟之神經內分泌代償",
    "stem": "關於腎臟對於充血性心衰竭（Congestive Heart Failure）的生理代償反應，下列何者錯誤？",
    "options": [
      {
        "key": "A",
        "text": "Increase sodium and water retention"
      },
      {
        "key": "B",
        "text": "Pronounced renal vasoconstriction"
      },
      {
        "key": "C",
        "text": "Expansion of extracellular fluid volume"
      },
      {
        "key": "D",
        "text": "Reduced activation of Renin-angiotensin-aldosterone system (RAAS)"
      }
    ],
    "answer": "D",
    "explanation": "心衰竭時心輸出量下降，腎臟入球小動脈灌注壓降低，且交感神經強烈興奮：\n1. 腎臟緻密斑與近腎小球細胞感應到缺血，會**劇烈活化 RAAS 系統（Marked activation of RAAS）**，分泌大量 Renin，使 Angiotensin II 與 Aldosterone 飆升。\n2. 導致強烈的腎血管收縮、鈉水滯留與細胞外液體積擴張，加重心臟水腫負擔。\n(D) 稱「Reduced activation of RAAS」完全相反，故選 (D)。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.33～36【張哲逢老師：心衰竭神經內分泌調控】",
    "keyConcept": "心衰竭心輸出量下降 -> 腎缺血 -> 強烈活化 RAAS（非抑制）造成鈉水滯留水腫",
    "diagram": null
  },
  {
    "id": "b12-mc-37",
    "exam": "B12",
    "number": "選擇 37",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "休克病理生理：失血性休克（Hemorrhagic shock）之臨床徵象",
    "stem": "A patient in clinical shock due to severe acute hemorrhage usually DOES NOT exhibit which of the following?",
    "options": [
      {
        "key": "A",
        "text": "A reduced central venous pressure (CVP)"
      },
      {
        "key": "B",
        "text": "A pronounced tachycardia"
      },
      {
        "key": "C",
        "text": "A rise in total peripheral resistance (TPR)"
      },
      {
        "key": "D",
        "text": "An increased cardiac output"
      }
    ],
    "answer": "D",
    "explanation": "嚴重急性失血性休克（Hemorrhagic shock）時：\n- 循環血容量驟降 -> 靜脈回流減少 -> CVP 下降。\n- 每搏量與心輸出量（Cardiac Output）大幅下降（絕對不可能增加！）。\n- 體內感壓反射劇烈活化交感神經代償：心跳加快（Tachycardia）、周邊血管強烈收縮使總周邊阻力 TPR 飆升以力保腦部血壓。\n故 (D)「心輸出量增加」絕對錯誤，選 (D)。",
    "volFile": "B12 生理 vol.8.pdf",
    "volPage": "Vol. 8 p.18～21【張哲逢老師：休克生理學】",
    "keyConcept": "失血性休克：CO 下降、CVP 下降；交感代償使 HR 飆快、TPR 上升",
    "diagram": null
  },
  {
    "id": "b12-mc-38",
    "exam": "B12",
    "number": "選擇 38",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "微循環生理：毛細血管靜水壓與膠體滲透壓平衡",
    "stem": "關於微血管膠體滲透壓（Oncotic pressure）與靜水壓（Hydrostatic pressure）在液體交換中的作用，下列何者正確？",
    "options": [
      {
        "key": "A",
        "text": "微血管膠體滲透壓傾向使液體自血管流出至組織間隙"
      },
      {
        "key": "B",
        "text": "微血管靜水壓在動脈端較高，是驅動液體自微血管濾過流出（Filtration）至組織間隙之主要力量"
      },
      {
        "key": "C",
        "text": "靜脈端的微血管靜水壓高於動脈端"
      },
      {
        "key": "D",
        "text": "組織間液靜水壓遠高於血管內靜水壓"
      }
    ],
    "answer": "B",
    "explanation": "Starling 微血管液體交換原理：\n1. **微血管靜水壓（Pc）**：動脈端約 32 mmHg，靜脈端約 15 mmHg。方向為**推擠液體自血管向外濾過（Filtration out）**。\n2. **血漿膠體滲透壓（πc）**：由血漿白蛋白維持，約 25~28 mmHg，沿微血管基本恆定。方向為**吸引液體由組織間隙拉回血管內（Reabsorption in）**。\n故動脈端淨濾過（Pc > πc），靜脈端淨吸收（Pc < πc）。(B) 正確。",
    "volFile": "B12 生理 vol.8.pdf",
    "volPage": "Vol. 8 p.6～9【張哲逢老師：Starling 力學平衡】",
    "keyConcept": "靜水壓 Pc 推液體出去（動脈端強）；膠體滲透壓 πc 拉液體進來（靜脈端回收）",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b12-mc-39",
    "exam": "B12",
    "number": "選擇 40",
    "type": "single",
    "category": "單選題",
    "teacher": "余佳慧老師",
    "topic": "血液生理學：凝血酶（Thrombin）之正回饋促進機制",
    "stem": "下列關於凝血酶（Thrombin）在止血反應中所扮演之正回饋（Positive feedback）作用機制的敘述，何者正確？",
    "options": [
      {
        "key": "A",
        "text": "活化 Protein C 造成抗凝血"
      },
      {
        "key": "B",
        "text": "促進組織因子（Tissue factor）生成"
      },
      {
        "key": "C",
        "text": "活化凝血因子 Factor V 與 Factor VIII，加速凝血酶生成瀑布"
      },
      {
        "key": "D",
        "text": "促進紅血球破裂釋放血紅素"
      }
    ],
    "answer": "C",
    "explanation": "Thrombin（Factor IIa）在凝血瀑布中具有關鍵的正回饋（Amplification）角色：\n- 回頭活化凝血因子 **Factor V、Factor VIII 以及 Factor XI**，形成更多十因子酶（Tenase）與凝血酶原酶複合物，使 Thrombin 產生爆發性倍增。\n- 結合血小板 PAR 受體，刺激血小板釋放 TXA₂ 與 ADP，強化血小板血栓形成。\n（雖然 Thrombin 結合 Thrombomodulin 會活化 Protein C，但那是負回饋抗凝機制，並非止血正回饋）。故選 (C)。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.20～24【余佳慧老師：凝血瀑布機制】",
    "keyConcept": "Thrombin 正回饋：活化 Factor V, VIII, XI 加速瀑布反應並活化血小板",
    "diagram": null
  },
  {
    "id": "b12-mc-40",
    "exam": "B12",
    "number": "選擇 41",
    "type": "single",
    "category": "單選題",
    "teacher": "余佳慧老師",
    "topic": "血液生理學：耐力運動訓練對血液攜氧量之適應機制",
    "stem": "常跑馬拉松的耐力運動選手在接受長期高強度訓練後，其血液攜氧總量（Total O₂ capacity）顯著提升，最核心的生理機制為何？",
    "options": [
      {
        "key": "A",
        "text": "血漿中物理溶解的氧氣量大幅倍增"
      },
      {
        "key": "B",
        "text": "氧氣和二氧化碳在血紅素上的結合位競爭消失"
      },
      {
        "key": "C",
        "text": "紅血球內的 2,3-BPG 大量增加"
      },
      {
        "key": "D",
        "text": "長期相對組織缺氧刺激紅血球生成素（EPO）分泌，促使紅血球總數與血紅素總量增加"
      }
    ],
    "answer": "D",
    "explanation": "長期耐力訓練的生理適應：\n- 運動反覆引發肌肉相對低氧狀態，刺激腎臟骨髓軸釋放 **紅血球生成素（Erythropoietin, EPO）**。\n- EPO 促進骨髓造血，使**紅血球總量與血紅素（Hemoglobin）總量顯著增加**，直接擴增血液最大攜氧容量。\n- (A) 溶解氧僅佔不到 1.5%，微不足道；(C) 2,3-BPG 增加會使氧合曲線右移促進釋氧，但不增加總攜氧量；(E) 三價鐵（Methemoglobin）無法攜氧。故選 (D)。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.28～29【余佳慧老師：紅血球生成與攜氧】",
    "keyConcept": "耐力訓練 -> 缺氧刺激腎臟釋放 EPO -> 紅血球總數與血紅素增加 -> 提升總攜氧量",
    "diagram": "images/o2.jpg"
  },
  {
    "id": "b12-mc-41",
    "exam": "B12",
    "number": "選擇 42",
    "type": "single",
    "category": "單選題",
    "teacher": "余佳慧老師",
    "topic": "血液與肝臟生理：凝血因子、維生素 K 與肝臟合成功能",
    "stem": "關於肝臟在血液與凝血功能中所扮演的生理角色，下列敘述何者完全正確？",
    "options": [
      {
        "key": "A",
        "text": "纖維蛋白原（Fibrinogen）只由骨髓製造"
      },
      {
        "key": "B",
        "text": "免疫球蛋白（Immunoglobulins）全部由肝臟實質細胞合成"
      },
      {
        "key": "C",
        "text": "肝臟分泌膽汁促進脂溶性維生素 K 的吸收，而維生素 K 為合成凝血因子 II, VII, IX, X 的必要輔因子"
      },
      {
        "key": "D",
        "text": "組織纖維蛋白溶酶原活化劑（t-PA）主要由肝臟合成"
      }
    ],
    "answer": "C",
    "explanation": "生理機制分析：\n- (C) 正確：肝臟分泌膽鹽乳化脂肪，促進脂溶性**維生素 K** 吸收。維生素 K 是肝細胞微粒體 γ-谷氨醯羧化酶的輔因子，負責羧化 **凝血因子 II（凝血酶原）, VII, IX, X** 及 Protein C/S，賦予其結合 Ca²⁺ 的能力。\n- (A) 錯誤：Fibrinogen 主要由肝臟合成。\n- (B) 錯誤：免疫球蛋白由 B 淋巴細胞分化之漿細胞（Plasma cells）製造。\n- (D) 錯誤：t-PA 主要由血管內皮細胞（Endothelial cells）合成分泌。故選 (C)。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.8～10, 13【余佳慧老師：肝臟與凝血因子】",
    "keyConcept": "肝臟造凝血因子；膽汁助吸 Vit K；Vit K-依賴因子：II, VII, IX, X",
    "diagram": null
  },
  {
    "id": "b12-mc-42",
    "exam": "B12",
    "number": "選擇 43",
    "type": "multi",
    "category": "多選題",
    "teacher": "余佳慧老師",
    "topic": "血液生理與臨床：t-PA 治療缺血性中風之分子機轉",
    "stem": "重組組織型纖維蛋白溶酶原活化劑（t-PA）常用於急診搶救急性缺血性腦中風，關於其藥理生理機轉，下列哪些敘述正確？（複選）",
    "options": [
      {
        "key": "A",
        "text": "促進血小板釋放 Thromboxane A2"
      },
      {
        "key": "B",
        "text": "直接與凝血因子 X 結合抑制其活性"
      },
      {
        "key": "C",
        "text": "將纖維蛋白溶酶原（Plasminogen）酵素活化切割轉化為纖維蛋白溶酶（Plasmin）"
      },
      {
        "key": "D",
        "text": "抑制體內前列腺環素（PGI₂）生成"
      },
      {
        "key": "E",
        "text": "活化生成的 Plasmin 能特異性水解切割血栓中的纖維蛋白（Fibrin），溶解血栓"
      }
    ],
    "answer": [
      "C",
      "E"
    ],
    "explanation": "t-PA（Tissue Plasminogen Activator）之溶栓機轉：\n1. t-PA 專一性結合於纖維蛋白（Fibrin）表面，將吸附在其上的 **纖維蛋白溶酶原（Plasminogen）剪切活化為有活性的纖維蛋白溶酶（Plasmin）**（選項 C）。\n2. Plasmin 為廣譜絲胺酸蛋白酶，能高效**降解消化血栓中的 Fibrin 纖維網**，將血栓分解為纖維蛋白降解產物（FDP/D-dimer），使阻塞的腦血管重新灌通（選項 E）。\n故正確選項為 (C) 與 (E)。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.13【余佳慧老師：纖維蛋白溶解系統】",
    "keyConcept": "t-PA 活化 Plasminogen -> Plasmin 水解切割 Fibrin -> 溶解血栓",
    "diagram": null
  },
  {
    "id": "b12-mc-43",
    "exam": "B12",
    "number": "選擇 44",
    "type": "multi",
    "category": "多選題",
    "teacher": "余佳慧老師",
    "topic": "血液循環：一氧化氮（NO）在遠端組織運送的結合載體",
    "stem": "血管內皮細胞生成之一氧化氮（Nitric oxide, NO）半衰期極短，但在體內可藉由與血液中特定分子結合形成穩定的儲存複合體，運送至遠端微血管發揮血管舒張效應。下列哪些為 NO 在血液中的主要結合載體？（複選）",
    "options": [
      {
        "key": "A",
        "text": "運鐵蛋白（Transferrin）"
      },
      {
        "key": "B",
        "text": "嗜中性球顆粒膜"
      },
      {
        "key": "C",
        "text": "紅血球細胞膜上之花生四烯酸"
      },
      {
        "key": "D",
        "text": "紅血球中的血紅素（結合於 β-globin 鏈之 Cysteine 殘基形成 S-nitrosohemoglobin 或 Heme 鐵）"
      },
      {
        "key": "E",
        "text": "血漿白蛋白（結合於 Albumin 之 Cysteine-34 殘基形成 S-nitrosoalbumin）"
      }
    ],
    "answer": [
      "D",
      "E"
    ],
    "explanation": "余佳慧老師血液簡報高階考點：\nNO 為親脂性氣體分子，在血液中主要透過兩種蛋白質載體穩定結合並長途運送：\n1. **血紅素（Hemoglobin, Hb）**：結合於 β-globin 鏈的 Cysteine 殘基（Cys-β93）形成 **S-nitrosohemoglobin (SNO-Hb)**，在低氧組織去氧時釋放 NO 舒張血管。\n2. **血漿白蛋白（Albumin）**：結合於 Albumin 游離的 Cys-34 殘基形成 **S-nitrosoalbumin (SNO-Alb)**，作為血漿中最大的 NO 儲存庫。\n故選 (D) 與 (E)。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "余佳慧老師上課簡報 Blood Dept Med（2025）頁 56",
    "keyConcept": "NO 血液運送載體：結合於血紅素（SNO-Hb）與血漿白蛋白（SNO-Albumin）之 Cys 殘基",
    "diagram": null
  },
  {
    "id": "b12-mc-44",
    "exam": "B12",
    "number": "選擇 45",
    "type": "single",
    "category": "單選題",
    "teacher": "蔡佳醍老師",
    "topic": "臨床 EKG：心房顫動（Atrial Fibrillation）心電圖特徵",
    "stem": "一名 72 歲男性主訴陣發性心悸，心電圖檢查顯示：QRS 波群寬度正常，但 R-R 間期完全不規則（Irregularly irregular），且找不到清晰對稱的 P 波，取而代之的是細小不規則的基線基波。最可能的診斷為何？",
    "options": [
      {
        "key": "A",
        "text": "竇性心搏過速（Sinus tachycardia）"
      },
      {
        "key": "B",
        "text": "心室頻脈（Ventricular tachycardia）"
      },
      {
        "key": "C",
        "text": "陣發性室上性心搏過速（PSVT）"
      },
      {
        "key": "D",
        "text": "心房顫動（Atrial fibrillation, AF）"
      }
    ],
    "answer": "D",
    "explanation": "典型心房顫動（AF）的三大心電圖黃金特徵：\n1. **P 波消失**：代之以細小微弱、頻率高達 350~600 bpm 的 f 波。\n2. **R-R 間期絕對不規則**（Irregularly irregular rhythm）：因 AV node 不規則濾過傳導。\n3. **QRS 波群通常窄（<0.12s）**：表示心室內傳導正常，非心室起源心律不整。\n完全符合題幹，故選 (D)。",
    "volFile": "B12 生理 vol.5.pdf",
    "volPage": "Vol. 5 p.67【蔡佳醍老師：心房顫動 EKG】",
    "keyConcept": "心房顫動 AF：P 波消失代之以 f 波、R-R 間期完全不規則（Irregularly irregular）",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b12-mc-45",
    "exam": "B12",
    "number": "選擇 46",
    "type": "single",
    "category": "單選題",
    "teacher": "蔡佳醍老師",
    "topic": "臨床 EKG：心室頻脈（Ventricular Tachycardia）判讀",
    "stem": "心電圖顯示連續出現寬大畸形之 QRS 波群（時程 > 0.14 秒），心跳速率高達 180 次/分，節律規則且不見正常 P 波。最可能的診斷為何？",
    "options": [
      {
        "key": "A",
        "text": "心房顫動（Atrial fibrillation）"
      },
      {
        "key": "B",
        "text": "竇性心律（Normal sinus rhythm）"
      },
      {
        "key": "C",
        "text": "一度房室傳導阻滯（First-degree AV block）"
      },
      {
        "key": "D",
        "text": "心室頻脈（Ventricular tachycardia, VT）"
      }
    ],
    "answer": "D",
    "explanation": "心室頻脈（VT）特徵：\n- 心室起源之異位節律點高速放電（100~250 bpm，此題心率 180 bpm）。\n- **QRS 波群寬大畸形（Wide QRS > 0.12s）**。\n- 規則節律，無正常心房引導之 P-QRS 關聯。\n- 為潛在致命性心律不整，需緊急評估去顫或抗心律不整藥物。故選 (D)。",
    "volFile": "B12 生理 vol.5.pdf",
    "volPage": "Vol. 5 p.67～68【蔡佳醍老師：心室心律不整】",
    "keyConcept": "心室頻脈 VT：寬大 QRS（Wide complex）、心率極快（180bpm）、規則",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b12-mc-46",
    "exam": "B12",
    "number": "選擇 47",
    "type": "single",
    "category": "單選題",
    "teacher": "蔡佳醍老師",
    "topic": "臨床 EKG：病竇症候群與緩慢性心律不整（Bradycardia）",
    "stem": "一位經常頭暈（Dizziness）的老年患者接受心電圖檢查，顯示為節律規則但心跳僅約 46 次/分（R-R 間距 6.5 大格）。關於此病患的臨床評估，下列哪項敘述為錯誤？",
    "options": [
      {
        "key": "A",
        "text": "此患者之心率在臨床醫學定義上屬於正常竇性心律（Normal rate）"
      },
      {
        "key": "B",
        "text": "心率低於 60 bpm，符合心搏過緩（Bradycardia）診斷"
      },
      {
        "key": "C",
        "text": "若心跳過慢導致心輸出量不足，患者可能有突發暈厥（Syncope / Adams-Stokes attack）之危險"
      },
      {
        "key": "D",
        "text": "若有嚴重症狀且藥物無法改善，患者可能需要植入永久性心臟節律器（Pacemaker）"
      }
    ],
    "answer": "A",
    "explanation": "臨床常識判讀：\n- 正常成人靜態心率標準為 **60 ~ 100 bpm**。\n- 心率 46 次/分顯著低於 60 bpm，屬於明確的**心搏過緩（Sinus Bradycardia）**，絕非「正常心率」。\n- 嚴重緩脈患者常因腦部血流灌注不足導致頭暈甚至暈厥（Syncope），適應症時需植入人工節律器（Pacemaker）。\n因此 (A) 稱其心率正常為錯誤，選 (A)。",
    "volFile": "B12 生理 vol.5.pdf",
    "volPage": "Vol. 5 p.45, 55, 70～74【蔡佳醍老師：徐脈與節律器】",
    "keyConcept": "正常心率 60~100 bpm；低於 60 為 Bradycardia，嚴重者有暈厥危險需節律器",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b12-sa-1",
    "exam": "B12",
    "number": "非選 1",
    "type": "single",
    "category": "單選/非選題",
    "teacher": "郭鐘金老師",
    "topic": "離子通道結構域：電壓感應 S4 與選擇性濾器 S5-S6 結構",
    "stem": "張三做一個電壓敏感型鈉離子通道的突變實驗，發現突變 A 區常導致通道開關之電壓依賴性（Voltage dependence）降低，而突變 B 區使得鉀離子之通透性大幅增加（選擇性喪失）。請問以下哪個穿膜區域最有可能介於 A 區和 B 區之間？",
    "options": [
      {
        "key": "A",
        "text": "S1"
      },
      {
        "key": "B",
        "text": "S2"
      },
      {
        "key": "C",
        "text": "S3"
      },
      {
        "key": "D",
        "text": "S4"
      },
      {
        "key": "E",
        "text": "S5"
      },
      {
        "key": "F",
        "text": "S6"
      }
    ],
    "answer": "E",
    "explanation": "電壓敏感型陽離子通道（Nav / Kv）結構域：\n- 每個亞基由 6 個穿膜片段（S1～S6）組成。\n- **突變 A 區（電壓感應器 Voltage sensor）**：位於 **S4 片段**（帶正電之精胺酸 Arg / 離胺酸 Lys，感應跨膜電壓開關通道）。\n- **突變 B 區（離子選擇性濾器 Selectivity filter）**：位於 **S5-S6 之間的 P-loop（穿膜孔道濾器）**，負責離子大小與水合半徑之精密選擇。\n- 位於 S4（A區）與 S5-S6 P-loop（B區）之間的穿膜片段正是 **S5**！\n（官方一開始誤公布 S4，後官方更正標準答案為 S5）。故選 (E) S5。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.43【郭鐘金老師：鈉離子通道次單元結構】",
    "keyConcept": "電壓感應=S4；選擇性濾器=S5-S6 P-loop；兩者之間穿膜段=S5",
    "diagram": null
  },
  {
    "id": "b12-sa-2",
    "exam": "B12",
    "number": "非選 2",
    "type": "short",
    "category": "簡答題",
    "teacher": "郭鐘金老師",
    "topic": "平滑肌生理：閂鎖狀態（Latch-bridge state）之分子機轉與優缺點",
    "stem": "有一奇特生物，發現其骨骼肌可以如一般哺乳動物的平滑肌一樣發生等長及等張收縮。經探討其等長收縮機制後，發現其與一般哺乳動物的 latch bridge（閂鎖狀態）相同。試問該奇特生物能從中得到什麼最主要的好處（優點）與缺點？",
    "options": [],
    "answer": "優點：以極低能量消耗長時間維持肌肉張力；缺點：橫橋循環週期慢，收縮舒張反應遲緩",
    "explanation": "【標準官方評分解答】：\n1. **最主要好處（優點）**：**能以極低 ATP 能量消耗（不到正常 1/10）長時間維持穩固的肌肉收縮張力**（如血管平滑肌維持血管張力與血壓）。\n2. **最主要缺點**：**橫橋解離速度極慢，收縮與舒張速率非常遲緩**，無法像正常骨骼肌那樣執行快速敏捷的運動。\n\n【分子機制解析】：\n當肌球蛋白輕鏈被 MLCK 磷酸化後與肌動蛋白結合，此時若肌球蛋白輕鏈被 MLCP 去磷酸化，橫橋不會立刻斷開，而是停留在「閂鎖結合狀態（Latch state）」，ATP 水解率驟降，維持張力極長。",
    "volFile": "B12 生理 vol.2.pdf",
    "volPage": "Vol. 2 p.43【郭鐘金老師：平滑肌閂鎖狀態】",
    "keyConcept": "Latch-bridge：MLC 去磷酸化後仍保持結合。優點：極省 ATP 維持張力；缺點：速度極慢",
    "diagram": null
  },
  {
    "id": "b11-tf-1",
    "exam": "B11",
    "number": "B11 是非 1",
    "type": "tf",
    "category": "是非題",
    "teacher": "余佳慧老師",
    "topic": "血液生理學：胎兒血紅素（HbF）之氧親和力",
    "stem": "胎兒血紅素（HbF）對 2,3-BPG 的親和力比成人血紅素（HbA）高，因此在胎盤處能更容易將氧氣釋放給母體。",
    "options": [
      {
        "key": "O",
        "text": "O（正確）"
      },
      {
        "key": "X",
        "text": "X（錯誤）"
      }
    ],
    "answer": "X",
    "explanation": "敘述完全顛倒！\n- 胎兒血紅素構型為 α₂γ₂，其 γ 鏈將成人 β 鏈帶正電的組胺酸替換為絲胺酸，使其對帶負電的 **2,3-BPG 親和力顯著「低於」成人血紅素（HbA）**。\n- 正因為與 2,3-BPG 結合少，HbF 的氧合解離曲線相對 HbA **左移**，對氧氣具有**更高的親和力**，才能在胎盤處高效地從母體奪取氧氣！故為錯誤（X）。",
    "volFile": "B12 生理 vol.7.pdf",
    "volPage": "Vol. 7 p.28～30【余佳慧老師：血紅素氧合曲線】",
    "keyConcept": "HbF (α₂γ₂) 對 2,3-BPG 親和力低 -> 氧親和力高於 HbA -> 曲線左移自母體搶氧",
    "diagram": "images/o2.jpg"
  },
  {
    "id": "b11-mc-1",
    "exam": "B11",
    "number": "B11 選擇 1",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "神經肌肉生理：突觸間隙乙醯膽鹼之擴散時間量級",
    "stem": "乙醯膽鹼（ACh）自神經末梢囊泡釋放後，擴散跨越 50 nm 的 NMJ 突觸間隙並結合到突觸後受體，其擴散所需時間數量級大約為何？",
    "options": [
      {
        "key": "A",
        "text": "約 1 秒"
      },
      {
        "key": "B",
        "text": "約 100 毫秒（ms）"
      },
      {
        "key": "C",
        "text": "約數微秒到數十微秒（μs，小於 100 μs）"
      },
      {
        "key": "D",
        "text": "約 1 分鐘"
      }
    ],
    "answer": "C",
    "explanation": "根據愛因斯坦擴散公式 t ≈ x² / (2D)：\n突觸間隙距離 x 僅 50 nm（5 × 10⁻⁸ m），ACh 的小分子水溶液擴散係數 D ≈ 10⁻⁵ cm²/s。\n計算得擴散時間僅約 **數微秒（約 10~50 μs）**！突觸傳導延遲（約 0.5~1 ms）的大部分時間其實耗費在突觸前膜 Ca²⁺ 通道開啟與囊泡融合胞吐，而不是小分子跨間隙的物理擴散。故選 (C)。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.48～50【郭鐘金老師：NMJ 擴散時間】",
    "keyConcept": "NMJ 擴散極快（數十微秒 μs）；突觸延遲主要耗在鈣內流與囊泡融合胞吐",
    "diagram": null
  },
  {
    "id": "b11-mc-2",
    "exam": "B11",
    "number": "B11 選擇 2",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "肌肉生理學：骨骼肌收縮與肌漿網鈣離子釋放",
    "stem": "骨骼肌興奮收縮偶聯（Excitation-Contraction Coupling）中，T 管上的 DHP 受體如何引發肌漿網（SR）釋放鈣離子？",
    "options": [
      {
        "key": "A",
        "text": "DHP 受體作為電壓感受器，透過物理構型機械性耦合（Mechanical coupling）直接拉開肌漿網上的 Ryanodine 受體（RyR1）"
      },
      {
        "key": "B",
        "text": "必須依賴胞外鈣離子大量內流引發鈣誘發鈣釋放（CICR）"
      },
      {
        "key": "C",
        "text": "依賴鈉離子直接流入肌漿網內部置換鈣"
      },
      {
        "key": "D",
        "text": "依賴 G 蛋白偶聯受體產生 IP3 途徑"
      }
    ],
    "answer": "A",
    "explanation": "骨骼肌 vs 心肌之核心對比：\n- **骨骼肌**：T 管上的 DHP 受體（Cav1.1）感應動作電位電壓後，透過細胞質腳（Foot process）進行**機械性直接物理耦合（Mechanical coupling）**，瞬時拉開 SR 上的 RyR1 釋放 Ca²⁺，即使胞外完全無 Ca²⁺ 也能收縮！\n- **心肌**：才依賴胞外 Ca²⁺ 經 L-type 鈣通道流入，進行 CICR（鈣誘發鈣釋放）。\n故選 (A)。",
    "volFile": "B12 生理 vol.2.pdf",
    "volPage": "Vol. 2 p.28～32【郭鐘金老師：興奮收縮偶聯】",
    "keyConcept": "骨骼肌：DHP 與 RyR1 是機械物理拉開（不需胞外鈣）；心肌：CICR（需胞外鈣）",
    "diagram": null
  },
  {
    "id": "b11-mc-3",
    "exam": "B11",
    "number": "B11 選擇 3",
    "type": "single",
    "category": "單選題",
    "teacher": "郭鐘金老師",
    "topic": "神經肌肉病理：重症肌無力（Myasthenia Gravis）臨床藥物機轉",
    "stem": "重症肌無力（Myasthenia gravis）病患體內產生自體抗體攻擊突觸後骨骼肌 AChR，臨床常用之第一線緩解藥物 Pyridostigmine 的藥理機轉為何？",
    "options": [
      {
        "key": "A",
        "text": "可逆性抑制乙醯膽鹼酯酶（AChE），減少 ACh 水解以延長其在突觸間隙之濃度與停留時間"
      },
      {
        "key": "B",
        "text": "直接阻斷突觸前膜之鉀離子通道"
      },
      {
        "key": "C",
        "text": "促進突觸後膜生成更多鈉離子通道"
      },
      {
        "key": "D",
        "text": "不可逆性破壞突觸間隙之神經毒素"
      }
    ],
    "answer": "A",
    "explanation": "重症肌無力（MG）的病理是突觸後菸鹼型 AChR 受體被抗體破壞，安全係數嚴重下降。\n使用 **AChE 抑制劑（如 Neostigmine、Pyridostigmine）** 可阻斷乙醯膽鹼之水解酶，大幅延長 ACh 在 NMJ 突觸間隙的存留時間與濃度，提高現存未被破壞受體的活化機率，使終板電位 EPP 重新越過動作電位閾值。故選 (A)。",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.55～58【郭鐘金老師：重症肌無力與 NMJ 藥理】",
    "keyConcept": "Pyridostigmine 抑制 AChE -> 減少 ACh 水解 -> 延長作用時間 -> 改善肌無力",
    "diagram": null
  },
  {
    "id": "b11-mc-4",
    "exam": "B11",
    "number": "B11 選擇 4",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：一度房室傳導阻滯（First-degree AV block）之判定",
    "stem": "臨床心電圖顯示：每個 P 波之後都規律伴隨一個 QRS 波群，無任何漏搏，但 PR interval 持續大於 0.20 秒（5 小格以上）。最正確的診斷為何？",
    "options": [
      {
        "key": "A",
        "text": "一度房室傳導阻滯（First-degree AV block）"
      },
      {
        "key": "B",
        "text": "二度房室傳導阻滯（Second-degree AV block Mobitz I）"
      },
      {
        "key": "C",
        "text": "三度完全房室阻滯（Complete heart block）"
      },
      {
        "key": "D",
        "text": "心房撲動（Atrial flutter）"
      }
    ],
    "answer": "A",
    "explanation": "房室阻滯（AV block）診斷要領：\n- **一度 AV block**：PR 間期固定延長 > 0.20 秒（正常為 0.12~0.20s），每個 P 波皆能下傳產生 QRS 波群，無 QRS 脫落。\n- 二度 Mobitz I：PR 間期漸進延長直到脫落一個 QRS 波群。\n- 三度：心房與心室完全各跳各的，AV 分離。\n故選 (A)。",
    "volFile": "B12 生理 vol.5.pdf",
    "volPage": "Vol. 5 p.45～48【蔡佳醍/李宗玄老師：AV block 診斷】",
    "keyConcept": "一度 AV block：PR 固定延長 > 0.20 秒，P 波無脫落 1:1 下傳",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b11-mc-5",
    "exam": "B11",
    "number": "B11 選擇 5",
    "type": "single",
    "category": "單選題",
    "teacher": "蔡佳醍老師",
    "topic": "臨床 EKG：心房撲動（Atrial Flutter）之鋸齒狀 F 波",
    "stem": "心電圖在肢體導程 II, III, aVF 出現規律且極具特徵的「鋸齒狀（Sawtooth pattern）」心房撲動波（F waves），心房頻率約為 300 bpm，伴隨固定 2:1 或 4:1 的心室傳導。此患者之診斷為何？",
    "options": [
      {
        "key": "A",
        "text": "心室顫動（Ventricular fibrillation）"
      },
      {
        "key": "B",
        "text": "心房顫動（Atrial fibrillation）"
      },
      {
        "key": "C",
        "text": "竇性心律不整（Sinus arrhythmia）"
      },
      {
        "key": "D",
        "text": "心房撲動（Atrial flutter, AFL）"
      }
    ],
    "answer": "D",
    "explanation": "心房撲動（Atrial flutter, AFL）經典心電圖特徵：\n- 右心房三尖瓣環處典型巨折返環（Macro-reentrant circuit），產生規律約 250~350 bpm（通常 300 bpm）之**鋸齒狀 F 波（Sawtooth waves）**，在下壁導程（II, III, aVF）最為明顯。\n- AV node 生理不反應期通常產生固定傳導比率（如 2:1 傳導時心室率約 150 bpm）。\n心房顫動（AF）則是不規則紊亂細波。故選 (D)。",
    "volFile": "B12 生理 vol.5.pdf",
    "volPage": "Vol. 5 p.62～65【蔡佳醍老師：心房撲動 EKG】",
    "keyConcept": "心房撲動 AFL：下壁導程鋸齒狀 Sawtooth F 波（約 300 bpm），固定比例傳導",
    "diagram": "images/ecg.jpg"
  },
  {
    "id": "b11-sa-1",
    "exam": "B11",
    "number": "B11 簡答 1",
    "type": "short",
    "category": "簡答題",
    "teacher": "郭鐘金老師",
    "topic": "神經生理學：階梯電位（Graded potential）衰減與動作電位必要性",
    "stem": "神經纖維若沒有產生動作電位，其被動電位（階梯電位 Graded potential）在傳導時會隨距離發生什麼變化？為什麼生物體神經系統需要動作電位？",
    "options": [],
    "answer": "被動電位會呈指數型衰減（Electrotonic decay）；需要動作電位是為了全或無再生不衰減傳導",
    "explanation": "【標準官方評分解答】：\n1. **被動電位的變化**：受細胞膜電容與軸漿電阻影響，被動電位（電緊張電位）沿軸突傳導時，會隨距離**呈指數型快速衰減（Exponential decay, 遵循長度常數 λ）**，經過數毫米後訊號即消滅殆盡。\n2. **為什麼需要動作電位**：神經纖維長達數十公分甚至一公尺以上。為了克服電位隨距離之指數衰減，生物演化出電壓敏感型鈉離子通道，引發**全或無（All-or-None）的再生性動作電位（Regenerative action potential）**，使神經衝機能在長距離傳輸中保持訊號振幅不衰減！",
    "volFile": "B12 生理 vol.1.pdf",
    "volPage": "Vol. 1 p.35～38【郭鐘金老師：電纜理論與長度常數】",
    "keyConcept": "被動電位依長度常數 λ 指數衰減；動作電位靠電壓鈉通道再生達到長距離不衰減傳導",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b10-mc-1",
    "exam": "B10",
    "number": "B10 經典 1",
    "type": "single",
    "category": "單選題",
    "teacher": "張哲逢老師",
    "topic": "血流動力學：Poiseuille 定律與動脈狹窄血流換算",
    "stem": "A patient undergoes Doppler ultrasound showing a 50% narrowing of luminal diameter for her left renal artery. Assuming the perfusion pressure gradient remains constant, what is the expected blood flow rate through the stenotic artery relative to the normal vessel?",
    "options": [
      {
        "key": "A",
        "text": "1/2 of normal"
      },
      {
        "key": "B",
        "text": "1/4 of normal"
      },
      {
        "key": "C",
        "text": "1/8 of normal"
      },
      {
        "key": "D",
        "text": "1/16 of normal"
      }
    ],
    "answer": "D",
    "explanation": "歷年張哲逢老師必考題經典原型：\n依 Poiseuille 定律：Q ∝ r⁴。\n管徑縮減 50%，半徑 r' = 0.5r。\nQ' / Q = (0.5)⁴ = 0.0625 = **1/16**。\n血流量僅剩正常的 1/16（阻力增為 16 倍）。故選 (D)。",
    "volFile": "B12 生理 vol.6.pdf",
    "volPage": "Vol. 6 p.9【張哲逢老師：柏肅葉定律】",
    "keyConcept": "Poiseuille 定律：Q ∝ r⁴。管徑減半 -> 血流降為 1/16（阻力增為 16 倍）",
    "diagram": "images/hemo.jpg"
  },
  {
    "id": "b10-mc-2",
    "exam": "B10",
    "number": "B10 經典 2",
    "type": "single",
    "category": "單選題",
    "teacher": "李宗玄老師",
    "topic": "心臟電生理：竇房結 Phase 4 自動放電之分子通道",
    "stem": "心臟節律點（SA node）之慢反應細胞在舒張期（Phase 4）具有自發性去極化能力。啟動此去極化之 Funny current（I_f）是由下列何種通道蛋白所介導？",
    "options": [
      {
        "key": "A",
        "text": "電壓敏感型 Nav1.5 鈉離子通道"
      },
      {
        "key": "B",
        "text": "HCN 通道（超極化活化環核苷酸門控陽離子通道）"
      },
      {
        "key": "C",
        "text": "RYR2 蘭諾定受體"
      },
      {
        "key": "D",
        "text": "Kir2.1 內向整流鉀離子通道"
      }
    ],
    "answer": "B",
    "explanation": "Funny current（I_f）的分子基礎：\n- 由 **HCN 通道（Hyperpolarization-activated cyclic nucleotide-gated channel）** 介導。\n- 該通道在動作電位復極化至負電位（約 -60 mV）時被反常「活化開啟」，通透非選擇性陽離子（主要為 Na⁺ 內流），產生自動去極化。\n- 交感神經可透過提高胞內 cAMP 直接結合 HCN 通道，使其在更正的電位活化，加速心率。故選 (B)。",
    "volFile": "B12 生理 vol.3.pdf",
    "volPage": "Vol. 3 p.33【李宗玄老師：節律點 HCN 通道】",
    "keyConcept": "Funny current (If) 由 HCN 通道介導，在過極化時活化主導 Phase 4 自動放電",
    "diagram": "images/ap.jpg"
  },
  {
    "id": "b10-mc-3",
    "exam": "B10",
    "number": "B10 經典 3",
    "type": "single",
    "category": "單選題",
    "teacher": "蔡佳醍老師",
    "topic": "臨床 EKG：心房撲動與心房顫動之病理生理鑑別",
    "stem": "關於心房撲動（Atrial Flutter）與心房顫動（Atrial Fibrillation）之病理電生理機轉與心電圖表現的比較，下列何者正確？",
    "options": [
      {
        "key": "A",
        "text": "心房撲動為心房多發性微折返波（Multiple wandering wavelets），心房波完全不規則"
      },
      {
        "key": "B",
        "text": "心房撲動為單一固定巨折返環（Macro-reentrant loop），心電圖呈現規則鋸齒狀 F 波；心房顫動為多發無序微折返，呈現不規則細顫 f 波且 R-R 間期完全不規則"
      },
      {
        "key": "C",
        "text": "兩者皆會在心電圖上看到明顯對稱的正常 P 波"
      },
      {
        "key": "D",
        "text": "心房顫動心室律極為規則，心房撲動心室律絕對不規則"
      }
    ],
    "answer": "B",
    "explanation": "兩大心房心律不整核心對比：\n- **心房撲動（AFL）**：常繞行三尖瓣環之單一巨折返環（Macro-reentry），心房率約 300 bpm，ECG 呈現規律對稱之**鋸齒狀 F 波（Sawtooth）**。\n- **心房顫動（AF）**：多個混亂微折返小波（Multiple chaotic wavelets）同時在心房遊走，心房率 > 350~600 bpm，P 波消失代之以紊亂 f 波，R-R 間期**完全不規則（Irregularly irregular）**。\n故 (B) 完全正確。",
    "volFile": "B12 生理 vol.5.pdf",
    "volPage": "Vol. 5 p.62～67【蔡佳醍老師：心房心律不整鑑別】",
    "keyConcept": "Flutter：單一巨折返、鋸齒狀 F 波；Fibrillation：多微折返、不規則 f 波 + 不規則 R-R",
    "diagram": "images/ecg.jpg"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_DATA;
}
