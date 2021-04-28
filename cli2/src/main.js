// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */ 

const cpn = {
  template: `<div>{{message}}</div>`,
  data() {
    return {
      message: '我是组件'
    }
  }
}

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  //vue-template组件负责将template转为render函数
  render: function (createElement) {
    //  1.普通用法:createElement('标签',{标签属性},[''])
    // return createElement('h2',
    // {class:'box'},
    // ['Hello,Vue.js',createElement('button',['按钮'])])
    //2.传入组件
    return createElement(App)
  }
})
