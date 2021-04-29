<template>
  <div>
      <h2>我是设置</h2>
      <p>我是设置内容</p>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  created(){
    console.log('Setting created')
  },
  destroyed() {
    console.log('Setting destroyed')
  }
}
</script>

<style>

</style>
