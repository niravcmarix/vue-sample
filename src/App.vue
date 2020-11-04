<template>
  <Header v-if="isLoggedIn" />
  <router-view/>
  <Footer/>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
