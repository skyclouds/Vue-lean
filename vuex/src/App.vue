<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{moreThan20}}</h2>
    <h2>{{moreThan20.length}}</h2>
    <h2>{{$store.state.info}}</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.labelName1}}</h2>
    <h2>{{$store.getters.labelName2}}</h2>
    <h2>{{$store.getters.labelName3}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">Add</button>
    <button @click="update">Apdate</button>
    <button @click="asyncUpdate">AsyncUpdate</button>
    <button @click="updateName">UpdateName</button>
    <button @click="asyncUpdateName">AsyncUpdateName</button>
    <hello-vuex />

  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import {INCREMENT} from "./store/mutations-types"

export default {
  components: { 
    HelloVuex 
  },
  name: "App",
  data() {
    return {
      message: "我是App组件",
    };
  },
  computed: {
    moreThan20() {
      return this.$store.state.students.filter(s => s.age >= 20)
    }
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      //payload:负载
      //1.普通提交风格
      // this.$store.commit("incrementCount",count);

      //2.特殊的提交风格
      this.$store.commit({
        type:'incrementCount',
        count
      });
    },
    addStu(){
      this.$store.commit("addStudent",{id:5,name: "alan",age:35});
    },
    update(){
        this.$store.commit("updateInfo")
    },
    asyncUpdate(){
      // this.$store.dispatch("asyncUpdateInfo",{
      //   message:'我是传入到信息',
      //   success(){
      //     console.log('asyncUpdate success')
      //   }
      // })

      //推荐写法
      this.$store.dispatch("asyncUpdateInfo",'我是传入到信息')
      .then(res=>{
        console.log('asyncUpdate success')
      })
    },
    updateName(){
        this.$store.commit("updateModuleAName",'mike')
    },
    asyncUpdateName(){
      this.$store.dispatch("asyncUpdateModuleName",'max')
      .then(res=>{
        console.log('asyncUpdateName success')
      })
    }
  }
};
</script>

<style>
</style>
