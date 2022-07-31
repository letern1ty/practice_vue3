import {
    createRouter,
    createWebHashHistory
} from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('../view/Main.vue'),
        children: [{
            path: '/',
            name: 'home',
            component: () => import('../view/home/Home.vue'),
        }]
    }
]


const routers = createRouter({
    history:createWebHashHistory(),
    routes
})

export default routers