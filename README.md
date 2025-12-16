# 室內設計作品集網站

一個現代化、精美的室內設計作品集展示網站，使用 React + TypeScript + Vite 構建，具有豐富的動畫效果和精緻的互動細節。

## ✨ 功能特色

- 🎨 **精美的視覺設計** - 現代簡約的設計風格，優雅的配色方案
- 🎬 **豐富的動畫效果** - 使用 Framer Motion 實現流暢的動畫過渡
- 📱 **響應式設計** - 完美適配手機、平板和桌面設備
- 🖼️ **作品集展示** - 支持分類篩選、圖片輪播和詳細展示
- 📄 **多頁面架構** - 首頁、作品集、關於我、服務項目、聯絡頁面
- ⚡ **快速載入** - 使用 Vite 構建，極速開發和載入體驗

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

訪問 http://localhost:5173 查看網站

### 構建生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 📁 專案結構

```
designed/
├── src/
│   ├── components/        # 可重用組件
│   │   ├── Home/         # 首頁專用組件
│   │   ├── Layout.tsx    # 布局組件
│   │   ├── Navigation.tsx # 導航欄
│   │   └── Footer.tsx    # 頁腳
│   ├── pages/            # 頁面組件
│   │   ├── Home.tsx      # 首頁
│   │   ├── Portfolio.tsx # 作品集
│   │   ├── About.tsx     # 關於我
│   │   ├── Services.tsx  # 服務項目
│   │   └── Contact.tsx   # 聯絡頁面
│   ├── data/             # 數據文件
│   │   ├── projects.ts   # 作品數據
│   │   └── services.ts   # 服務數據
│   ├── types/            # TypeScript 類型定義
│   ├── App.tsx           # 主應用組件
│   ├── main.tsx          # 入口文件
│   └── index.css         # 全局樣式
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 技術棧

- **React 18** - UI 框架
- **TypeScript** - 類型安全
- **Vite** - 構建工具
- **React Router** - 路由管理
- **Framer Motion** - 動畫庫
- **Tailwind CSS** - 樣式框架
- **Lucide React** - 圖標庫

## 📝 頁面說明

### 首頁 (Home)
- Hero 區塊：大圖背景與動態文字
- 精選作品：展示 3 個精選專案
- 服務預覽：4 個主要服務項目
- 關於預覽：設計師簡介與統計數據
- CTA 區塊：引導聯絡

### 作品集 (Portfolio)
- 分類篩選：按空間類型篩選作品
- 網格展示：響應式作品卡片
- 詳細模態框：點擊查看完整專案詳情
- 圖片輪播：多圖切換展示

### 關於我 (About)
- 個人簡介與設計理念
- 經歷時間軸
- 核心價值觀
- 專業技能展示

### 服務項目 (Services)
- 服務詳情卡片
- 完整服務流程（6 步驟）
- CTA 引導區塊

### 聯絡我 (Contact)
- 聯絡表單（姓名、Email、電話、主題、訊息）
- 聯絡資訊卡片
- 社群媒體連結

## 🎯 動畫效果

- 頁面載入時的淡入動畫
- 滾動觸發的視差效果
- 懸停時的縮放和位移
- 平滑的頁面過渡
- 導航欄的滾動變化
- 圖片燈箱效果
- 表單提交動畫

## 🎨 設計特色

- **配色方案**：米白色、深灰色、金色點綴
- **字體**：Playfair Display（標題）+ Inter（內文）
- **間距**：充足的留白空間
- **圓角**：統一的圓角設計
- **陰影**：分層的陰影效果

## 📦 自定義內容

### 修改作品數據
編輯 `src/data/projects.ts` 文件，添加或修改作品資訊。

### 修改服務數據
編輯 `src/data/services.ts` 文件，自定義服務項目。

### 修改配色
在 `tailwind.config.js` 中調整顏色配置。

## 🔧 開發建議

1. 圖片資源：建議將圖片放在 `public` 目錄或使用 CDN
2. 表單提交：目前為模擬提交，需要連接後端 API
3. 路由配置：可在 `src/App.tsx` 中添加更多路由
4. 響應式：所有組件都已響應式設計，可在不同設備測試

## 📄 授權

此專案僅供學習和展示使用。

## 🙏 致謝

- 使用 Unsplash 提供的免費圖片
- 使用 Google Fonts 提供的字體

"# designed" 
