import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  base: '/fobos/',
  plugins: [react()],
  resolve: {
    alias: {
      '_': path.resolve(__dirname, 'src'),
    },
  },

})
