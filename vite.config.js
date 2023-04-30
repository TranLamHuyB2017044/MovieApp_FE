import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server:{
    port: 'https://movies-app-.cyclic.app',
    proxy:{
      "/api/user":{
        target: 'https://movies-app-.cyclic.app/api/user',
        changeOrigin: true,
      },
      "/api/movies":{
        target: 'https://movies-app-.cyclic.app/api/movies',
        changeOrigin: true,
      },
    },
  },
})
