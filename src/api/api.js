import axios from "axios";

const baseURL = process.env.VUE_APP_API;
let token = "";
// let loadingInstance; //创建Loading 的实例
axios.defaults.baseURL = baseURL; // 配置axios请求的地址
axios.defaults.headers.post["Content-Type"] = "application/json; charset=utf-8";
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
if (token) {
  axios.defaults.headers.common["token"] = token; // 设置请求头为 Authorization
}

//配置发送请求前的拦截器 可以设置token信息
axios.interceptors.request.use(
  config => {
    let user = window.localStorage.getItem("token");
    if (user) {
      token = user;
    }
    config.headers.common["token"] = token;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 配置响应拦截器
axios.interceptors.response.use(
  res => {
    const token = localStorage.getItem("token");
    if (token) {
      res.headers.token = token;
    }
    return Promise.resolve(res.data);
  },
  error => {
    return Promise.reject(error);
  }
);
export default axios;
