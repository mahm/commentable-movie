<template>
  <div id="app">
    <TheVideo/>
  </div>
</template>

<script>
import TheVideo from "./components/TheVideo";

export default {
  name: "app",
  components: {
    TheVideo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
