import Vue from 'vue'
import { filters } from './helpers/filters'
import { store } from './store/store'
import { router } from './routes/init'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  filters,
})
 