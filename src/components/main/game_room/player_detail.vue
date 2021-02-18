<template>
  <li class="d-flex">
    <div class="d-flex vh-flex-center">Игрок {{player.label | strtoupper}}</div>
    <div>
      <div :class="classes">
        <div></div>
      </div>
    </div> 
  </li>
</template>
<script>
export default {
  props:["player"],
  data(){
    return {
 
    }
  },
  computed: {
    classes() {
      return `${this.player.class} d-flex vh-flex-center small`
    }
  }
}
</script>