export const actions = { 
  clean_all_app(store) {
    store.commit("set_default_settings", 121); 
    store.commit("set_is_started_set_is_finished", false);
  },
  begin_game({ state, getters, commit, dispatch }) {
    commit("clean_last_game");
    commit("set_is_finished", false);
    commit("set_is_started", true);
    commit("set_interval", setInterval(function () {
      if (state.timer >= 43200) {
        console.warn("too much time to choose a position , isn't it ?");
        commit('finalize', { time: getters.get_second_formated, player: null, fulldate: getters.get_fulldate });
      } else {
        commit("add_timer", getters.get_second);
      }
    }, getters.get_milisenconds)); 
  },
  save_new_position({ state, getters, commit, dispatch}, payload) {
    commit('add_position', payload);
    if (getters.get_did_i_win || getters.get_leftover_positions === 0) {
      commit('finalize', {time: getters.get_seconds_formated, player: (getters.get_did_i_win) ? getters.get_turn : null, fulldate: getters.get_fulldate });
    } else {
      commit('change_turn');
    }
  },
  prepare_game_rooms(store) {
    store.commit("clean_last_game");
    store.commit("set_is_started_set_is_finished", false);
  }
}  