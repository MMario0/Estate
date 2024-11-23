import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Estate/',
  optimizeDeps: {
    include: ['react-toastify', 'framer-motion'],
  },
});