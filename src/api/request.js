import axios from 'axios';
import config from "../config";
import {
    ElMessage
} from "element-plus";

const NETWORK_ERROR = '网络请求异常,请稍后重试'
// 创建一个axios实例对象
const service = axios.create({
    baseURL: config.baseURL
})
//请求之前的一些事情

service.interceptors.request.use((req) => {
    //可以自定义header
    //jwt-token 认证的时候
    return req

})
//请求之后的事情
service.interceptors.response.use((res) => {
    console.log(res.data)
    //统一处理res.data
    const {
        code,
        data,
        msg
    } = res.data
    if (code == 200) {
        console.log(data)
        return data
    } else {
        //网络请求错误
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})


//封装核心函数
function request(options) {
    // {}
    options.method = options.method || 'get'
    if (options.method.toLowerCase() == 'get') {
        options.params = options.data
    }

    //对mock的处理
    let isMock = config.isMock;
    if (typeof options.mock != 'undefined') {
        isMock = options.mock
    }
    //对线上环境做处理
    if(config.env == 'prod'){
        service.defaults.baseURL = config.baseURL
    }else{
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }
    return service(options)
}


export default request