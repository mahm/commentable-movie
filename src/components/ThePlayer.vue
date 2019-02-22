<template>
  <div class="wrapper">
    <MessageLayer/>
    <Player src="/movie/clouds.mp4" type="video/mp4"/>
  </div>
</template>

<script>
import Player from "./Player";
import MessageLayer from "./MessageLayer";

export default {
  components: {
    Player,
    MessageLayer
  }
};
</script>

<style lang="sass" scoped>
.wrapper
  flex-basis: 100%
  background-color: black
  position: relative
</style>
