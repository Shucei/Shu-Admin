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
// i18n （PS：导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'
import installElementPlus from '@/plugins/elememt.js'

import App from './App.vue'
const app = createApp(App)
app.use(VueRouter).use(store).mount('#app')
app.use(i18n)
svgIconPlugin(app)
installElementPlus(app)
