<template>
  HELLO {{ message }}
  <p v-bind:id="message"></p>
  <div>
    {{message}} {{ custom}} {{idName}}
  </div>
  <input v-model="message"/>
</template>

<script>
export default {
  props: ['custom', 'idName', 'working'],
  data() {
    return {
      message: "hello from varuable"
    }
  },
  mounted() {
    console.log(this.$parent.working, this.working);
  }
}
</script>

<style>

</style>