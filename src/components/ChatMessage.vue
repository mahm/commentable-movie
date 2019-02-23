<template>
  <div class="wrapper-message">
    <p>{{ formatedTime }} {{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    body: String,
    currentTime: Number
  },
  computed: {
    formatedTime() {
      const time = parseInt(this.currentTime);
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${padZero(minutes)}:${padZero(seconds)}`;
    }
  }
};

function padZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
}
</script>

<style lang="sass" scoped>
.wrapper-message
  padding-left: 10px
  word-break: break-all

  p
    text-align: left
    margin: 5px 0 5px 0
</style>
