import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react({
      'babel': {
        plugins: ['@emotion/babel-plugin']
      }
    })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      outDir: './dist',
    },
    envDir: path.resolve(__dirname, './.env'),
    cacheDir: path.resolve(__dirname, './.vite'),
    server: {
      port: 8000,
      host: true,
    },
  }
})
