import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//1.axios基本使用
axios({
  url: 'http://v.juhe.cn/toutiao/index',
  //默认使用get请求
  methods: 'post',
  params: {
    key: '073b1180e3f67a8f5391ad7060fb367e',
    type: 'top',
    page: 1,
    page_size: 30
  }
}).then(res => {
  console.log(res)
})

//2.axios并发请求
axios.all([axios({
  url: 'http://v.juhe.cn/toutiao/index',
  params: {
    key: '073b1180e3f67a8f5391ad7060fb367e',
    type: 'top',
    page: 1,
    page_size: 10
  }
}), axios({
  url: 'http://v.juhe.cn/toutiao/index',
  params: {
    key: '073b1180e3f67a8f5391ad7060fb367e',
    type: 'top',
    page: 2,
    page_size: 10
  }
})]).then(res => {
  console.log(res)
})

//3.全局配置
axios.defaults.baseURL = 'http://v.juhe.cn'
axios.defaults.timeout = 5000
axios({
  url: '/toutiao/index',
  //默认使用get请求
  methods: 'post',
  params: {
    key: '073b1180e3f67a8f5391ad7060fb367e',
    type: 'top',
    page: 1,
    page_size: 30
  }
}).then(res => {
  console.log(res)
})

//4.创建axios实例
const instance = axios.create({
  baseURL: 'http://v.juhe.cn',
  timeout: 5000
})

instance({
  url: '/toutiao/index',
  params: {
    key: '073b1180e3f67a8f5391ad7060fb367e',
    type: 'top',
    page: 2,
    page_size: 10
  }
}).then(res => {
  console.log(res)
})

//5.使用封装
import { request } from './network/request'

// request({
//   url:'/toutiao/index',
//   params:{
//     key:'073b1180e3f67a8f5391ad7060fb367e',
//     type: 'top',
//     page:2,
//     page_size:10
//   }
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })

// request({
//   baseConfig:{
//       url:'/toutiao/index',
//       params:{
//         key:'073b1180e3f67a8f5391ad7060fb367e',
//         type: 'top',
//         page:2,
//         page_size:10
//       }
//   },
//   success(res){
//     console.log(res)
//   },
//   failure(err){
//     console.log(err)
//   }
// })

request({
  url: '/toutiao/index',
  params: {
    key: '073b1180e3f67a8f5391ad7060fb367e',
    type: 'top',
    page: 2,
    page_size: 10
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})