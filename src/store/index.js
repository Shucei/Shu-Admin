import { createStore } from 'vuex'
import getters from './getters'
// import createPersistedstate from 'vuex-persistedstate' // 用于持久化
import user from './modules/user.js'
import app from './modules/app.js'
export default createStore({
  getters: getters,
  modules: {
    user,
    app
  }

  // // 配置插件
  // plugins: [
  //   createPersistedstate({
  //     // 本地存储的名字
  //     key: 'Shu-Admin',
  //     // 指定需要存储的模块
  //     paths: ['user']
  //   })
  // ]
})
