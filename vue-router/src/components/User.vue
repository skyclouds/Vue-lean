 <template>
  <div>
    <h2>我是用户</h2>
    <p>使用方式1获取我的ID:{{ userId }}</p>
    <p>使用方式2获取我的ID:{{ $route.params.userId }}</p>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  created() {
    console.log("User created");
  },
  destroyed() {
    console.log("User destroyed");
  },
  computed: {
    userId() {
      //$routes谁活跃此时就是谁
      return this.$route.params.userId;
    },
  },
  methods: {
    btnClick() {
      //所有到组件都继承自Vue类都原型
      //Vue.use注册使用时候的router对象
      console.log(this.$router);
      //当前活跃的
      console.log(this.$route);

      this.test();
      console.log(this.$author);
    },
  },
};
</script>

<style>
</style>
