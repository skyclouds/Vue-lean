var { test } = require("./js/commjs-mudule-test.js")
import getInfo from "./js/es6-module-test.js"
//依赖css
import css from "./css/normal.css"
//依赖less
import less from "./css/special.less"

console.log("Hello,Vue.js")
test()
getInfo()

document.writeln('<h2>Hello,Webpack</h2>')

//使用Vue
//同时有el与template时,Vue内部会将template替换el
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/app.vue'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})