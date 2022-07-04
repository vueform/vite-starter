import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['trix-editor'].indexOf(tag) !== -1
        }
      },
    }),
  ],
  resolve: {
    alias: {
      'composition-api': path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
    }
  },
  optimizeDeps: {
    include: [
      'nouislider',
      'wnumb',
      'trix'
    ]
  }
})
