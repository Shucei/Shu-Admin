import axios from "axios";

import nprogress from "nprogress";
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000
})


// request interceptor
service.interceptors.request.use(
  (config) => {
    nprogress.start();

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {

  },
  (error) => {
    // 判断后端token过期日期，被动处理token过期
    if (error.response && error.response.data.code === 10002) {
      // 当等于10002的时候 表示 后端告诉我token超时了
      // store.dispatch("user/logout"); // 登出action 删除token
      // router.push("/login");
      // Message({
      //   message: "账号过期，请重新登录",
      //   type: "error",
      //   duration: 2000,
      // });
    } else {
      // Message.error(error.message); // 提示错误信息
    }
    nprogress.done();
    return Promise.reject(error); // 返回执行错误，让当前的执行链跳出成功，直接进入catch
  }
);


export default service