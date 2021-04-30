import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutations-types"

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA={
    state:{
        name:'linus'
    },
    mutations:{
        updateModuleAName(state,payload){
            state.name=payload
        }
    },
    actions:{
        //这里到context指到是moduleA
        //这里的commit只影响moduleA的mutations
        asyncUpdateModuleName(context,payload){
            console.log(context)
            return new Promise((resolve)=>{
                setTimeout(() => {
                    context.commit('updateModuleAName',payload)
                    resolve()
                }, 1000)
            })
        }
    },
    getters:{
        labelName1(state){
            return 'Hello:'+state.name
        },
        labelName2(state,getters){
            return getters.labelName1+"!"
        },
        labelName3(state,getters,rootState){
            return getters.labelName2+rootState.counter
        }
    }
}

const store=new Vuex.Store({
    state: {
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
    },
    //修改状态值处理
    mutations: {
        //定义方法,这里的state不需要this
        [INCREMENT](state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        incrementCount(state,payload){
            //console.log(payload)
            state.counter+=payload.count
        },
        addStudent(state,stu){
            state.students.push(stu)
        },
        updateInfo(state){
            //state.info.tel=119
            //不是预先定义的属性无法增加到响应式监听
            //state.info['address']='Fuzhou'
            // delete state.info.tel

            //可以通过Vue.set方法实现后定义的属性增加到响应式监听
            Vue.set(state.info,'address','Fuzhou')
            Vue.delete(state.info,'id')
        }
    },
    //异步操作处理
    actions: {
        //这里到context指到是store
        //这里的commit只影响store中的mutations
        asyncUpdateInfo(context,payload){
            console.log(context)
            console.log(payload)
            // setTimeout(() => {
            //     context.commit('updateInfo')
            //     payload.success()
            // }, 1000);

            //推荐到异步写法
            return new Promise((resolve)=>{
                setTimeout(() => {
                    context.commit('updateInfo')
                    resolve()
                }, 1000)
            })
        }
    },
    //类似computed
    getters: {
        powerCounter(state){
            return state.counter * state.counter
        },
        moreThan20(state) {
            return state.students.filter(s => s.age >= 20);
        },
        moreThan20Length(state,getters) {
            return getters.moreThan20.length;
        },
        moreThanAge(state) {
            return function(age){
                return state.students.filter(s => s.age >= age);
            }
        }
    },
    //划分不同模块
    modules: {
        a:moduleA
    }
})

// 3.导出
export default store