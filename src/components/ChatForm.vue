<template>
  <div class="form-wrapper">
    <div class="form-box">
      <div class="textarea-wrapper">
        <input type="text" class="form-input" placeholder="コメント...">
      </div>
    </div>
  </div>
</template>

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