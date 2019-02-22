<template>
  <div class="wrapper-message">
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    body: String
  }
};
</script>

<style lang="sass" scoped>
.wrapper-message
  padding-left: 10px
  word-break: break-all

  p
    text-align: left
</style>
