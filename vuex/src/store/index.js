import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state= {
    counter:10,
    students:[
        {id:1,name:'james',age:30},
        {id:2,name:'kobe',age:24},
        {id:3,name:'curry',age:10},
    ],
    info:{
        id:'ID001',
        tel:110
    }
}

const store=new Vuex.Store({
    state,
    //修改状态值处理
    mutations,
    //异步操作处理
    actions,
    //类似computed
    getters,
    //划分不同模块
    modules: {
        a:moduleA
    }
})

// 3.导出
export default store