import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  assetsInclude: ['**/*.svg'], // Ensure SVG icons are included
})
