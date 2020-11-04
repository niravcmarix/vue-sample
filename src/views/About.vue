<template>
  <div class="about">
    <h1>This is an about page {{ count }}</h1>
    <button @click="increment">INCREMENT</button> 
  </div>
</template>
<script>

export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('increment')
    }
  }
}
</script>
