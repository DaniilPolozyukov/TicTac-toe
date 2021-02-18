<template>
  <router-link :to="obj_menu.to" tag="li"><a class="btn">{{obj_menu.label | strtoupper}}</a></router-link>
</template>
<script>
export default {
  props: ["menu"],
  data() {
    return {
      obj_menu:this.menu
    }
  }
}
</script>
<style scoped>
  li {
    display: block;
    padding: .25em 0 0em;
    list-style: none;
  }
</style>