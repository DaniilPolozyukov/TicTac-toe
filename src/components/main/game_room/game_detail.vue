<template>
  <div class="details">
    <div class="w100 d-flex">
      <div class="d-flex">Игрок A</div>
      <div class="d-flex">{{timer}}</div>
      <div class="d-flex">Игрок B</div>
    </div>
    <div class="w100 d-flex">
      <div>
        <transition name="turn">
          <div v-if="turn('a')" class="gd-turn"></div>
        </transition>
      </div>
      <div></div>
      <div>
        <transition name="turn">
          <div v-if="turn('b')" class="gd-turn"></div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    turn(){
      return flag => {
        return this.$store.getters.get_turn === flag;
      }
    },
    timer(){
      return this.$store.getters.get_seconds_formated;
    }
  }
}
</script>
<style>
  .turn-enter-active, .turn-leave-active {
    transition: opacity 1s;
  }
  .turn-enter, .turn-leave-to {
    opacity: 0;
  }
</style>