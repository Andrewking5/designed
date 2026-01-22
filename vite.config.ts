import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel 部署時不需要 base path，GitHub Pages (自定義網域) 也需要 '/'
  // 由於使用了 custom domain (redpower-design.com)，base path 應對應根目錄
  base: '/',
  build: {
    outDir: 'dist',
  },
})
