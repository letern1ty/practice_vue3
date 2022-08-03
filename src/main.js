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

//引入api.js 中的 api函数
import api from './api/api';




const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(route)
app.config.globalProperties.$http = api
app.use(store)
app.mount('#app')



// route.beforeEach((to, from, next) => {
//     // 1. 每个条件执行后都要跟上 next() 或 使用路由跳转 api 否则页面就会停留一动不动
//     // 2. 要合理的搭配条件语句，避免出现路由死循环。
//     store.commit('getToken')
//     const token = store.state.token;
//     if (!token && to.name !== 'login') {
//         if (!token) {
//             return router.replace({
//                 name: 'login'
//             })
//         }
//         next()
//     } else {
//         next()
//     }
// })