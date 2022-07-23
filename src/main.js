import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
// import './utils/flexible'
import 'element-plus/dist/index.css'

// 修改后的主题样式必须放在最后面
// import '../theme/index.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
