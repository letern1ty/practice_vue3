import {
    createRouter,
    createWebHashHistory,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../view/login.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../view/home.vue')
        }
    ]
})

export default router