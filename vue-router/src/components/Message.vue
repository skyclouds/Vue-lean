<template>
  <div>
      <ul>
          <li>消息1</li>
          <li>消息2</li>
          <li>消息3</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Message',
  created(){
    console.log('Message created')
  },
  destroyed() {
    console.log('Message destroyed')
  }
}
</script>

<style>

</style>
