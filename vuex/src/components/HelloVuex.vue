<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreThan20}}</h2>
    <h2>{{$store.getters.moreThan20Length}}</h2>
    <h2>{{$store.getters.moreThanAge(25)}}</h2>
    <h2>{{$store.state.info}}</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.labelName1}}</h2>
    <h2>{{$store.getters.labelName2}}</h2>
    <h2>{{$store.getters.labelName3}}</h2>
  </div>
</template>

<script>

export default {
  name: 'HelloVuex'
}
</script>

<style>

</style>
