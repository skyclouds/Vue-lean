 <template>
  <div>
      <h2>我是Profile</h2>
      <h2>获取TEL:{{$route.query.tel}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  created(){
    console.log('Profile created')
  },
  destroyed() {
    console.log('Profile destroyed')
  }
}
</script>

<style>

</style>
