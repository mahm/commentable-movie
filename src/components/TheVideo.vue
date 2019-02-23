<template>
  <div class="video-wrapper">
    <ThePlayer/>
    <TheChat/>
  </div>
</template>

<script>
import ThePlayer from "./ThePlayer";
import TheChat from "./TheChat";

export default {
  components: {
    ThePlayer,
    TheChat
  },
  created() {
    this.$store.dispatch("chat/init");
  }
};
</script>

<style lang="sass" scoped>
.video-wrapper
  width: 100%
  display: flex
  border: 3px solid black
</style>
