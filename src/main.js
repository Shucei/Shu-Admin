import { createApp } from 'vue'
import VueRouter from './router'
import 'normalize.css'
// 引入全局样式
import '@/styles/index.scss'
import App from './App.vue'

const app = createApp(App)
app.use(VueRouter).mount('#app')

