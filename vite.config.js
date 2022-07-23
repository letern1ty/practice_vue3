import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  chainWebpack: config => {
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({
        remUnit: 192,
        remPrecision: 8
      }) // remUnit: 192代表以1920px为整体，如果设计稿的尺寸是750px，这里的值为75
      .end()
  }
})