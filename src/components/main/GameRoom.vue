<template>
  <section class="body">
    <game-detail></game-detail>
    <div id="board" :class="board_styles">
      <div v-for="i in dimensions" :key="'row='+i" :class="styles.row">
        <square v-for="ii in dimensions" :key="'cell-'+i+'-'+ii" :position="getPosition(i,ii)"></square>
      </div>
    </div>
    <popup v-if="!is_started">
      <template slot="body">
        <ul class="ttt-prev-start">
          <player-detail v-for="(player,i) in players" :key="i" :player="player"></player-detail>
          <game-options label_begin="start"></game-options>
        </ul>
      </template>
    </popup> 
    <popup v-if="winner"> 
      <template slot="body">
        <ul>
          <li v-if="winner.player" class="d-flex">
            <div class="d-flex vh-flex-center">Победитель:</div>
            <div>{{winner.player | strtoupper}}</div>
          </li>
          <li v-else class="d-flex"> 
            <div class="vh-flex-center w100"> Ничья !</div>
          </li>
          <li class="d-flex">
            <div class="d-flex vh-flex-center">Время:</div>
            <div>{{winner.time}}</div>
          </li>
          <game-options label_begin="restart"></game-options>
        </ul>
      </template>
    </popup>
  </section>
</template>

<script>
import Vue from 'vue';
import square from "./game_room/square.vue";
import popup from "./game_room/popup.vue";
import player_detail from "./game_room/player_detail.vue";
import game_detail from "./game_room/game_detail.vue";
import game_options from "./game_room/game_options.vue";
 
Vue.component('square', square);
Vue.component('popup', popup);;
Vue.component('player-detail', player_detail);
Vue.component('game-detail', game_detail);
Vue.component('game-options', game_options);

export default {
  data() {
    return {
      styles: { row:"row d-flex"},
      players:null
    } 
  },
  created() {
    this.$store.dispatch("prepare_game_rooms");
    this.players = this.$store.getters.getPlayers;
  },
  methods: {
    getDimensions:function() {
      return Math.sqrt(this.$store.getters.getSize);
    },
    getPosition:function(row,column){
      return (((row+row)-(this.getDimensions()-row))+column)-1;
    }
  },
  computed: { 
    board_styles() {
      return `s-`+this.$store.getters.getSize;
    },
    dimensions() {
      return this.getDimensions();
    },
    is_started() {
      return this.$store.getters.isStarted;
    },
    winner() {
      return this.$store.getters.getWinner; 
    }
  }
}
</script>
