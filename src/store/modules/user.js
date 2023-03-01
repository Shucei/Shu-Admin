import { login as submitLogin } from "@/api/user.js";
import md5 from "md5";
// md5(password)
import {setItem,getItem,removeItem} from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    token: getItem('token') || '', // 设置token为共享状态
    userInfo: {}
  }),
  mutations: {
    setToken(state,data){
      setItem('token',data)
    }
  },
  actions: {
    /**
     * 登录请求
     * @param {*} context 
     * @param {*} userInfo 
     * @returns 
     */
    async login(context, userInfo) {
      const { username, password } = userInfo;
        const data =  await submitLogin({
          mobile:username,
          password
        })
        context.commit('setToken',data)
    },
  },
};
