import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel 部署時不需要 base path，GitHub Pages 需要 '/designed/'
  // 根據部署平台自動設置：Vercel 使用 '/'，GitHub Pages 使用 '/designed/'
  base: process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/designed/' : '/'),
  build: {
    outDir: 'dist',
  },
})
