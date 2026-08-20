import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // (Contoh jika menggunakan React)
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
