<template>
  <div class="wrapper-message">
    <p>{{ currentTime }}: {{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    body: String,
    currentTime: Number
  }
};
</script>

<style lang="sass" scoped>
.wrapper-message
  padding-left: 10px
  word-break: break-all

  p
    text-align: left
    margin: 5px 0 5px 0
</style>
