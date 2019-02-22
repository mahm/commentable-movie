<template>
  <div class="form-wrapper">
    <div class="form-box">
      <div class="textarea-wrapper">
        <input
          v-if="playing"
          v-model="body"
          type="text"
          class="form-input"
          placeholder="コメント..."
          @keyup.enter="handleSubmit"
          @keypress="setCanSubmit"
        >
        <div v-else>再生前に投稿できません</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import uuid from "uuidv4";

export default {
  data() {
    return {
      body: "",
      canSubmit: false
    };
  },
  methods: {
    ...mapActions("chat", ["addMessage"]),
    setCanSubmit() {
      this.canSubmit = true;
    },
    handleSubmit() {
      if (!this.canSubmit) {
        return;
      }
      this.postMessage();
      this.body = "";
      this.canSubmit = false;
    },
    postMessage() {
      this.addMessage({
        id: uuid(),
        currentTime: this.currentTime,
        body: this.body
      });
    }
  },
  computed: {
    ...mapGetters("player", ["playing", "currentTime"])
  }
};
</script>


<style scoped lang="sass">
.form-wrapper
  border-left: 2px solid black

.form-box
  margin: 5px
  border: 1px solid #ccc
  border-radius: 5px

.textarea-wrapper
  padding: 10px

.form-input
  width: 100%
  border: none
  overflow: auto
  outline: none
  -webkit-box-shadow: none
  -moz-box-shadow: none
  box-shadow: none
  resize: none
  font-size: 1em
  &::placeholder
    color: #ccc

.toolbox-wrapper
  padding: 5px
  border-bottom: 1px solid #ccc
  text-align: right

</style>