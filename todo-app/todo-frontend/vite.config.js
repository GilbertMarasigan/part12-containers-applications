import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.js'
  },
  server: {
    host: true,
    allowedHosts: ['frontend', 'localhost'],
    port: 5173
  }
})