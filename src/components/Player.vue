<template>
  <div class="wrapper">
    <div class="player">
      <videoPlayer
        class="player"
        :options="playerOptions"
        :playsinline="true"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @statechanged="playerStateChanged($event)"
        @ready="playerReadied"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  },
  methods: {
    ...mapActions("player", ["setPlaying", "setCurrentTime"]),
    onPlayerPlay(player) {
      this.setPlaying(true);
    },
    onPlayerPause(player) {
      this.setPlaying(false);
    },
    onPlayerEnded(player) {},
    onPlayerWaiting(player) {},
    onPlayerPlaying(player) {},
    onPlayerLoadeddata(player) {},
    onPlayerTimeupdate(player) {
      const currentTime = player.currentTime();
      this.setCurrentTime(currentTime);
    },
    onPlayerCanplay(player) {},
    onPlayerCanplaythrough(player) {},
    playerStateChanged(player) {},
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    }
  }
};
</script>

<style lang="sass" scoped>
// .player
//   position: absolute
//   top: 50%
//   left: 50%
//   transform: translateY(-50%) translateX(-50%)
</style>
