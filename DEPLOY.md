# GitHub Pages 部署指南

## 問題說明

GitHub Pages 不支援 React Router 的 `BrowserRouter`，因為當用戶直接訪問 `/portfolio` 等路由時，GitHub Pages 會嘗試尋找對應的文件，但找不到就會顯示 404。

## 解決方案

我已經為您設置了兩種解決方案：

### 方案 1: 使用 GitHub Actions 自動部署（推薦）

1. **啟用 GitHub Pages**
   - 前往您的 GitHub 倉庫
   - 點擊 Settings → Pages
   - 在 Source 選擇 "GitHub Actions"

2. **推送代碼**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

3. **等待部署完成**
   - GitHub Actions 會自動構建並部署
   - 部署完成後，網站會在 `https://yourusername.github.io/designed/` 可用

### 方案 2: 手動部署

1. **構建專案**
   ```bash
   npm run build
   ```

2. **複製 404.html**
   ```bash
   cp public/404.html dist/404.html
   ```

3. **部署到 GitHub Pages**
   - 使用 `gh-pages` 套件或手動上傳 `dist` 目錄內容

## 重要配置

### vite.config.ts
已設置 `base: '/designed/'`，這對應您的倉庫名稱。

如果您的 GitHub Pages URL 不同，請修改：
- 如果使用自定義域名：`base: '/'`
- 如果倉庫名稱不同：修改為對應的路徑

### 404.html
已創建 `public/404.html` 文件，用於處理 GitHub Pages 的路由重定向。

## 測試

部署後，測試以下 URL 是否正常：
- `https://yourusername.github.io/designed/`
- `https://yourusername.github.io/designed/portfolio`
- `https://yourusername.github.io/designed/about`
- `https://yourusername.github.io/designed/services`
- `https://yourusername.github.io/designed/contact`

## 注意事項

1. **Base URL**: 確保 `vite.config.ts` 中的 `base` 與您的 GitHub Pages URL 匹配
2. **404.html**: 必須在 `dist` 目錄中，GitHub Pages 會使用它來處理路由
3. **首次部署**: 可能需要幾分鐘時間才能生效

## 如果仍有問題

如果部署後仍然看到 404，請檢查：
1. GitHub Pages 設置是否正確
2. `vite.config.ts` 中的 `base` 路徑是否正確
3. `dist/404.html` 是否存在
4. 瀏覽器緩存（嘗試無痕模式）

