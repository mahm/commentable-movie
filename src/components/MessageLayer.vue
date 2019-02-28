<template>
  <div class="message-layer">
    <div class="message-wrapper">
      <div :class="viewing.messageClass" v-for="viewing in currentViewings" :key="viewing.id">
        <div>{{ viewing.body }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";

export default {
  data() {
    return {
      counter: 0,
      currentViewings: [],
      timerId: null
    };
  },
  computed: {
    ...mapGetters("player", ["currentTime"]),
    ...mapGetters("chat", ["scoredMessages"])
  },
  watch: {
    currentTime(val) {
      const ceiledTime = Math.ceil(val);
      if (this.counter < ceiledTime) {
        this.counter = Math.ceil(val);
      } else if (this.counter > ceiledTime + 2) {
        this.counter = Math.ceil(val);
      }
      if (this.scoredMessages[this.counter]) {
        this.scoredMessages[this.counter].map(item => {
          const currentDate = new Date();
          const lifetime = Math.floor(currentDate.getTime() / 1000) + 100;
          const messageClass = `message top-${Math.round(Math.random() * 10) +
            1}`;
          this.currentViewings.push({
            ...item,
            lifetime,
            messageClass
          });
        });
        this.counter += 1;
      }
    }
  },
  mounted() {
    this.timerId = setInterval(() => {
      const currentDate = new Date();
      const currentSecond = Math.floor(currentDate.getTime() / 1000);
      this.currentViewings = _.remove(this.currentViewings, item => {
        return item.lifetime >= currentSecond;
      });
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timerId);
  }
};
</script>

<style lang="sass" scoped>
.message-layer
  position: absolute
  width: 100%
  height: 100%
  overflow: hidden

.message-wrapper
  position: relative
  width: 100%
  height: 100%

.message
  position: absolute
  right: 50%
  width: 100%
  filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.6))
  color: white
  font-weight: bold
  font-size: 36px
  transform: translateX(100%)
  animation: murquee 10s linear 1
  z-index: 9999
  opacity: 0

  &.top-1
    top: 0%
  &.top-2
    top: 10%
  &.top-3
    top: 20%
  &.top-4
    top: 30%
  &.top-5
    top: 40%
  &.top-6
    top: 50%
  &.top-7
    top: 60%
  &.top-8
    top: 70%
  &.top-9
    top: 80%
  &.top-10
    top: 80%

@keyframes murquee
  0%
    transform: translateX(100%)
  1%
    opacity: 1
  99%
    opacity: 1
  100%
    transform: translateX(-100%)
    opacity: 0
</style>
