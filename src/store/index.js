
import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      count: 1,
      isLoggedIn: localStorage.getItem("flag") ? true : false
    }
  },
  mutations: {
    increment (state) {
      state.count++;
    },
    setLoggedIn(state, flag) {
      state.isLoggedIn = flag;
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    setLoggedIn(context, flag) {
      if(!flag) localStorage.clear();
      context.commit("setLoggedIn", flag);
    }
  }
})

export default store;
