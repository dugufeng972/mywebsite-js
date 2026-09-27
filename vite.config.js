import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        //自动导入 Element Plus 图标
        IconsResolver({
          prefix: 'Icon',
          enabledCollections: ['ep'], // Element Plus 的图标集标识
        }),
      ],
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // 配置less
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: '@use "@/assets/style/variables.scss" as *;',
        // },
        // 配置全局共享变量less
        less: {
          additionalData: '@import "@/assets/style/mixin.less";',
        },
      },
    },
  },
})
