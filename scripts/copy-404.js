// 構建後複製 404.html 到 dist 目錄
import { copyFileSync, existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

const source = join(rootDir, 'public', '404.html')
const dest = join(rootDir, 'dist', '404.html')

if (existsSync(source)) {
  copyFileSync(source, dest)
  console.log('✓ 404.html copied to dist/')
} else {
  console.warn('⚠ 404.html not found in public/')
}

