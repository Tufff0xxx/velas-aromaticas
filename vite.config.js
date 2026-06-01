import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/velas-aromaticas/', // ← el nombre que le pongas al repo en GitHub
})