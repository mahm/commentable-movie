<template>
  <div class="video-wrapper">
    <Player src="/movie/clouds.mp4" type="video/mp4"/>
    <TheChat/>
  </div>
</template>

<script>
import Player from "./Player";
import TheChat from "./TheChat";

export default {
  components: {
    Player,
    TheChat
  }
};
</script>

<style lang="sass" scoped>
.video-wrapper
  width: 100%
  display: flex
  border: 3px solid black
</style>
