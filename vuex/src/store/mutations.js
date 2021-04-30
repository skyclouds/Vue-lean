import Vue from 'vue'
import {INCREMENT} from "./mutations-types"
export default {
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
}