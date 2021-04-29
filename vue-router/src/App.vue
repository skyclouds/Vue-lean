<template>
  <div id="app">
    <!--通过JS代码设置路由 -->
    <div>
      <button @click="homeClick">首页</button>
      <button @click="setClick">设置</button>
      <button @click="aboutClick">关于</button>
      <button @click="userClick">用户</button>
      <button @click="profileClick">档案</button>
    </div>
    
    <!--通过vue-router设置路由 -->   
    <div>  
      <!-- router-link最终会被渲染为<a>标签 -->
      <!-- <router-link to="/home">首页</router-link> -->
      <!--通过replase属性修改路由方式 -->
      <!-- <router-link to="/setting" replace tag="button" active-class="active">设置</router-link> -->
      <!--通过tag属性修改渲染到标签 -->
      <!-- <router-link to="/about" tag="button">关于</router-link> -->
      <!--路由属性-->
      <!-- <router-link :to="'/user/'+userId">用户</router-link> -->
      <!-- <router-link :to="{path:'/profile',query:{tel:15280026629}}">档案</router-link> -->
    </div>
    <!-- exclude里面传组件的name值 -->
    <keep-alive exclude="User,Profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'UID2020'
    }
  },
  methods:{
    homeClick(){
      //通过代码修改路径vue-router
      this.$router.push('/home')
    },
    setClick(){
      this.$router.replace('/setting')
    },
    aboutClick(){
      this.$router.push('/about')
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          tel:'TEL110'
        }
      })
    }
  }
}
</script>

<style>
  .router-link-active{
    color:red;
  } 
  .active{
    color:red;
  }
</style>
