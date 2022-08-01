import {
    createApp
} from 'vue'
// import './style.css'

import App from './App.vue'
//引入  ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入全局css
import './assets/scss/index.scss'

//引入vuex 路由
import route from './router/index'
import store from './store/index'

//引入mock
import "./api/mock.js";

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(route)
app.use(store)
app.mount('#app')