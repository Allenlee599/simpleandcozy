<template>
    <div class="button-panel">
      <slot name="buttons"></slot>
    </div>  
    <div class='word-panel'>
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
  right: 1.5vw;
  width: 100%;
  height: auto;
  color: #000; 
}
.button-panel {
  position: relative;
  top: 1vh;
  width: 100%;
  height: auto;
  color: #000; 
}
</style>