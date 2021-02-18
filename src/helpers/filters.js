import Vue from 'vue'

// This is a global filter
Vue.filter("ucfirst", function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

Vue.filter("strtoupper", function (str) {
  return str.toUpperCase();
});


export const filters = {
   
}