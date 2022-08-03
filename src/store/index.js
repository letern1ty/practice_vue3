import {
    tryOnBeforeMount
} from "@vueuse/core";
import {
    createStore
} from "vuex";
import Cookie from "js-cookie";
export default createStore({
    state: {
        isCollapse: true,
        currentMenu: null,
        tabsList: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home',
        }],
        token: ''
    },
    mutations: {
        updateIsCollapse(state, payload) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            console.log(val.name, 'val')
            // val.name = 'home' ? (state.currentMenu = null) : (state.currentMenu = val)
            if (val.name == 'home') {
                state.currentMenu = null
                console.log(state.currentMenu, 'state.currentMenu00000000')
            } else {
                console.log(val, 'val')
                state.currentMenu = val
                console.log(state.currentMenu, 'state.currentMenu')
                let result = state.tabsList.findIndex(item => item.name === val.name)
                result == -1 ? state.tabsList.push(val) : ''
            }

        },
        closeTab(state, val) {
            let res = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(res, 1)
        },
        setToken(state, val) {
            state.token = val
            Cookie.set('token', val)
        },
        clearToken(state) {
            state.token = ""
            Cookie.remove('token')
        },
        getToken(state) {
            state.token = state.token || Cookie.get('token')
        }
    },
})