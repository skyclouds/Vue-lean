<template>
    <div id="tab-bar">
      <slot/>
    </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar{
    display:flex;
    background-color:#F6F6F6;
    position:fixed;
    left:0;
    right: 0;
    bottom: 0;
    box-shadow: 0.5px -1px 1px rgba(100,100,100,0.10);
  }
</style>
