import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// import Vue from 'vue';
import store from "./store/index";
// import Vuex from 'vuex'

// Vue.use(Vuex);

// export const store = new Vuex.Store()

 createApp(App).use(router).use(store).mount('#app')
