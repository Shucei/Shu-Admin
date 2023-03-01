import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate' // 用于持久化
import user from './modules/user.js'
export default createStore({
  getters:{
    token:state=>state.user.token
  },
  modules: {
    user
  },
    // 配置插件
    plugins: [
      createPersistedstate({
        // 本地存储的名字
        key: 'Shu-Admin',
        // 指定需要存储的模块
        paths: ['user']
      })
    ]
})