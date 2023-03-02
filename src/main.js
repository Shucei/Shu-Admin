import { createApp } from 'vue'
import VueRouter from './router'
import 'normalize.css'
import './permission' // permission control，权限控制文件
// 暗黑
import '@/styles/dark.scss'
// 引入全局样式
import '@/styles/index.scss'
import 'nprogress/nprogress.css'
// 导入svgIcon
import svgIconPlugin from '@/icons/index'
// 导入vuex
import store from '@/store/index'
// 导入全局路由

import App from './App.vue'
const app = createApp(App)
app.use(VueRouter).use(store).mount('#app')

svgIconPlugin(app)
