<!-- src/components/Home.vue -->
<template>
    <div>
      <ImageSwiper />
    </div>
  </template>
  
  <script>
  import ImageSwiper from '../components/ImageSwiper.vue';
  export default {
    name: 'HomeView',
    components: {
      ImageSwiper
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>