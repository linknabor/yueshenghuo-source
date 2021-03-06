// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/static/css/base.css'
import '../src/static/css/normalize.css'

import Qs from 'qs';
import axios from 'axios';
axios.defaults.withCredentials=true; //存储cookie？
import VueAxios from 'vue-axios';
import './assets/js/rem'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import cookie from 'js-cookie'
import $ from 'jquery'

import common from './common.js'
Vue.prototype.common = common;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../src/static/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)


import receiveData from './receiveData.js'
Vue.prototype.receiveData = receiveData;

// Vue.prototype.HOST = '/bannername'

var axiosInstance = axios.create({
  transformRequest: [function (data) {
      data = JSON.stringify(data);
      return data;
  }],
  headers: {
      //'Content-Type': 'application/x-www-form-urlencoded',
      //'Content-Type':'application/json;charset=utf-8',
      'Content-Type':"application/json",
    
      'Accept': 'application/json',

  },
  // baseURL: 'http://uat.gm4life.cn/guangming/wechat/hexie/wechat/',
  baseURL:'https://uat.e-shequ.com/yueshenghuo/wechat/hexie/wechat/',
  // baseURL: "https://test.e-shequ.com/baofang/wechat/hexie/wechat/",
  // baseURL:'http://192.168.1.13:9990',

  withCredentials:true,
  transformResponse: [function (data) {//数据转换
    return data;
  }],
});
//创建axios拦截器 给请求头加cookie

axiosInstance.interceptors.request.use(
  config => {
      if( !cookie.get('session')){//没有seesion 判断  暂时跳过直接在首页就存seesion
        
      }else{//在请求头加 session
        config.headers.Cookie =`${ cookie.get('Cookie') }`
      }

       return config
  },
  err => {
      return Promise.reject(err)
  }
)

Vue.use(VueAxios, axiosInstance);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
