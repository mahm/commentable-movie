<template>
  <div class="wrapper">
    <ChatMessages/>
    <ChatForm/>
  </div>
</template>

<script>
import ChatMessages from "./ChatMessages";
import ChatForm from "./ChatForm";

export default {
  components: {
    ChatMessages,
    ChatForm
  }
};
</script>

<style lang="sass" scoped>
.wrapper
  flex-basis: 400px
  display: flex
  flex-direction: column
  border-left: 2px solid black
</style>
