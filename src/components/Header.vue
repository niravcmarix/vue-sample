<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/contact">Contact</router-link> | 
        
        <router-link to="/post">Post</router-link> | 
        <span>Store Couuner - {{counter}}</span>

        <button @click="logout">Logout</button>
    </div>
</template>
<script>
export default {
  computed: {
    counter() {
      console.log("Dasdadasdsa");
      return this.$store.state.count;
    }
  },
  methods: {
    getCuunter () {
      console.log("GET COUTNER");
      return this.$store.state.count;
    },
    logout() {
      this.$store.dispatch("setLoggedIn", false);
      this.$router.push("/login");
    }
  }
}
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>