import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel expects this folder
  },
  server: {
    port: 5173,
  },
  base: './', // ensures correct paths when deployed
})
