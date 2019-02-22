<template>
  <div class="wrapper">
    <div class="player">
      <videoPlayer class="player" :options="playerOptions"/>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";

export default {
  props: {
    src: String,
    type: String
  },
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        language: "ja",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: this.type,
            src: this.src
          }
        ],
        fluid: true
      }
    };
  }
};
</script>

<style lang="sass" scoped>
.wrapper
  flex-basis: 100%
  background-color: black
  position: relative

// .player
//   position: absolute
//   top: 50%
//   left: 50%
//   transform: translateY(-50%) translateX(-50%)
</style>
