import Vue from 'vue'
import VueRouter from 'vue-router';
import { Menu, GameRoom } from './../components/main/init';
import { store } from './../store/store';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Menu, name: "home"},
  { path: '/s-player', component: GameRoom, name: "s-play"},
  { path: '/m-player', component: GameRoom, name: "m-play"},
];
 
export const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  store.state.mode = (to.name === "s-play") ? "s" : "m";
  next();
})

