/* 
    整个项目的api管理
*/
import request from './request.js'
export default {
    //home 左侧列表
    getTableData(params) {
        return request({
            url: '/home/tableData',
            method: 'post',
            data: params,
            mock: true
        })
    },
    getCountData(params) {
        return request({
            url: '/home/terble',
            method: 'get',
            data: params,
            mock: true
        })
    },
    getEchartsData(params) {
        return request({
            url: '/home/terble',
            method: 'get',
            data: params,
            mock: true
        })
    }
}