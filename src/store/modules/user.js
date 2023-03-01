import { login as submitLogin } from "@/api/user.js";
import md5 from "md5";
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    /**
     * 登录请求
     * @param {*} context 
     * @param {*} userInfo 
     * @returns 
     */
    login(context, userInfo) {
      const { username, password } = userInfo;
      return new Promise((resolve, reject) => {
        submitLogin({
          username,
          password: md5(password),
        })
          .then((data) => {
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
