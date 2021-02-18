<template>
  <li class="d-flex vh-flex-center">
    <a class="btn small" @click.prevent="begin">{{label_begin | strtoupper}}</a>
    <router-link tag="a" class="btn small" :to="{name:'home'}">{{exit_label | strtoupper}}</router-link>
  </li>
</template>
<script>
export default {
  props:["label_begin", "function_begin"],
  data(){
    return {
      exit_label : "exit"
    }
  },
  methods: {
    begin() {
      if (typeof this.function_begin === "function") {
        this.function_begin.call();
      } else {
        this.$store.dispatch("begin_game");
      }
    }
  }
}
</script>