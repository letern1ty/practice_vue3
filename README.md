# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## mock 的使用

### 本地mock

* 下载mockjs

````
    npm install mockjs -S
````
* 新建mock文件
````
    在src下新建 api文件夹
    在api文件夹下 新建 data文件夹 下新建index.js 文件 并写入data数据
    在api文件夹下新建 mock.js 文件
````
* 在main.js 中引入 Mock
```
//引入mock
import "./api/mock.js";
```

* mockjs 语句

```
  import  Mock  from "mockjs";
import homeApi from './mockData/home'

Mock.mock('/home/getData',homeApi.getHomeData)
```