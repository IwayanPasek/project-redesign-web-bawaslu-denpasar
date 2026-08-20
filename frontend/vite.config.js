import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (Contoh jika menggunakan React)
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/project-redesign-web-bawaslu-denpasar/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
