<template>
  <div :class="square" @click="cross_out">
    <div v-if="is_cross_out" class="d-flex vh-flex-center"></div>
  </div>
</template>
<script>
export default {
  props:["position"],
  data(){
    return {
      Strikethrough : "",
    }
  }, 
  methods: {
    cross_out:function() {
      if (this.$store.getters.get_is_available_to_cross_out(this.position)) {
        this.$store.dispatch("save_new_position", this.position);
      }
    }
  },
  computed: {
    square() {
      var cross_out_by_position = this.$store.getters.get_cross_out_by_position(this.position);
      return `cell square d-flex vh-flex-center ${cross_out_by_position}`;
    },
    is_cross_out() {
      return this.$store.getters.get_is_cross_out(this.position);
    }
  }
}
</script>