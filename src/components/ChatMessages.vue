<template>
  <div class="wrapper">
    <ChatMessage v-for="message in messages" :key="message.id" v-bind="message"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ChatMessage from "./ChatMessage";

export default {
  computed: {
    ...mapGetters("chat", ["messages"])
  },
  components: {
    ChatMessage
  },
  watch: {
    messages() {
      this.$nextTick(() => {
        this.$el.scrollTop = this.$el.scrollHeight;
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.wrapper
  flex: 1
  width: 400px
  overflow-y: scroll
  -webkit-overflow-scrolling: touch
</style>
