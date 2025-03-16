<template>
    <div class='word-panel'>
      <slot name="buttons"></slot>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </div>
  </template>
  
<script>
export default {
  name: 'WordPanel',
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
}
</script>

<style scoped>
.word-panel {
  position: relative;
  top: 1vh;
  width: 100%;
  height: auto;
  color: #000; 
}
</style>