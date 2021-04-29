<template>
  <div>
      <ul>
          <li>新闻1</li>
          <li>新闻2</li>
          <li>新闻3</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'News',
  created(){
    console.log('News created')
  },
  destroyed() {
    console.log('News destroyed')
  }
}
</script>

<style>

</style>
