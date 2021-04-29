<template>
  <div>
      <h2>我是首页</h2>
      <p>我是首页内容</p>
      <!-- 需要写完整到路径 -->
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/message">消息</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return{
      path: '/home/news'
    }
  },
  created(){
    console.log('Home created')
  },
  //组件使用了keep-alive时才有效
  activated() {
    console.log('Home activated')
    this.$router.push(this.path)
  },
  //组件使用了keep-alive时才有效
  deactivated() {
    console.log('Home deactivated')
  }, 
  beforeRouteLeave(to,from,next) {
    console.log('Home beforeRouteLeave')
    this.path=this.$route.path
    next()
  },
  destroyed() {
    console.log('Home destroyed')
  }
}
</script>

<style>

</style>
