import axios from "axios";

import nprogress from "nprogress";
import store from "@/store/index";
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 5000
})
const Time = 10000000;
// request interceptor
service.interceptors.request.use(
  (config) => {
    nprogress.start();
    const token = store.state.user.token;
    if (token) {
      config.headers.Authorization = "Bearer " + token;
      // token过期处理，主动处理
      const newTime = Date.now();
      const curTime = localStorage.getItem("loginTime");
      if (newTime - curTime > Time) {
        store.dispatch("user/logout");
        router.push("/login");
        nprogress.done();
        return Promise.reject(new Error("账号过期，请重新登录"));
      } else {
        // 续期，若在n秒内没有任何操作就过期，若操作了就重新赋个时间戳，保持时间的更新
        localStorage.setItem("loginTime", Date.now());
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    nprogress.done();
    const { success, message, data } = response.data;
    console.log(success, message, data);
    
    if (success) {
      return data;
    } else {
      ElMessage({
        message: message,
        type: "error",
        duration: 1500,
      });
      return Promise.reject(new Error());
    }
  },
  (error) => {
    // 判断后端token过期日期，被动处理token过期
    if (error.response && error.response.data.code === 10002) {
      // 当等于10002的时候 表示 后端告诉我token超时了
      store.dispatch("user/logout"); // 登出action 删除token
      router.push("/login");
      ElMessage({
        message: "账号过期，请重新登录",
        type: "error",
        duration: 2000,
      });
    } else {
      ElMessage.error(error.message); // 提示错误信息
    }
    nprogress.done();
    return Promise.reject(error); // 返回执行错误，让当前的执行链跳出成功，直接进入catch
  }
);




export default service