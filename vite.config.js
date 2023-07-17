import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir: "build"
  },
  rollupOptions: {
    external: ['/src/index.jsx'], // Add the import path here
  }
})