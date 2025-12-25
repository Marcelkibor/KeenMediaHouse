import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin:true,
        secure:true
      },
    },
  },
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  base: '/'
})