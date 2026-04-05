import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Tambahin ini

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/porto-react/",
})