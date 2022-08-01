import {
    createApp
} from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import route from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/scss/index.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(route)
app.mount('#app')