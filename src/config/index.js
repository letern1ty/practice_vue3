/* 
环境配置文件
1、开发环境
2、测试环境
3. 线上环境
 */

//
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development:{
        baseApi :'/mock',
        mockApi:'https://www.fastmock.site/mock/2f05a572a099e8165d6642d54b9fea2a/mock',
    },
    test:{
        baseApi :'/test',
        mockApi:'https://www.fastmock.site/mock/2f05a572a099e8165d6642d54b9fea2a/mock',
    },
    pro:{
        baseApi :'/api',
        mockApi:'https://www.fastmock.site/mock/2f05a572a099e8165d6642d54b9fea2a/mock',
    }
}

export default {
    env,
    mock:true,
    ...EnvConfig[env]
}