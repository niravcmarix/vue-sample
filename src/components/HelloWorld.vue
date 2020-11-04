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
  props: ['custom', 'idName'],
  data() {
    return {
      message: "hello from varuable"
    }
  }
}
</script>

<style>

</style>