import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const PUBLIC_PATH = process.env.PUBLIC_PATH
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: PUBLIC_PATH,
})
