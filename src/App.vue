<template>
  <div id="ttt">
    <section class="head d-flex vh-flex-center">VUE.js Tic-tac-toe</section>
    <router-view></router-view>
    <section class="footer">created with vue.js</section>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$store.dispatch("clean_all_app");
  }
}
</script>

<style>

</style>
