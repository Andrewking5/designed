import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署時需要設置 base 路徑
  // 如果使用自定義域名，改為 base: '/'
  base: process.env.NODE_ENV === 'production' ? '/designed/' : '/',
  build: {
    outDir: 'dist',
    // 確保 404.html 被複製到 dist 目錄
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
