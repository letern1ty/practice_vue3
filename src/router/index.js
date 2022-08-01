import {
    createRouter,
    createWebHashHistory
} from "vue-router"

const routes = [{
    path: '/',
    component: () => import('../view/Main.vue'),
    children: [{
            path: '/',
            name: 'home',
            component: () => import('../view/home/Home.vue'),
        },
        {
            path: '/user',
            name: 'user',
            component: () => import('../view/user/User.vue'),
        },
        {
            path: '/page1',
            name: 'page1',
            component: () => import('../view/page1.vue'),
        },
        {
            path: '/page2',
            name: 'page2',
            component: () => import('../view/page2.vue'),
        },
    ]
}]


const routers = createRouter({
    history: createWebHashHistory(),
    routes
})

export default routers