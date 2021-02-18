<template>
  <section class="body main-menu">
    <ul>
      <tttoption v-for="(menu,i) in menus" :key="i" :menu="menu"></tttoption>
    </ul>
  </section>
</template>
<script>
  import Vue from 'vue'
  import {mapState} from 'vuex';
  import tttoption from "./../../components/main/menu/tttoption";
  Vue.component('tttoption', tttoption)

  export default {
    computed :mapState(["menus"]), 
  }
</script>
<style scoped>
  ul { 
    margin: 0em auto;
    padding: 0em;
    width: 12em;
  }
</style>