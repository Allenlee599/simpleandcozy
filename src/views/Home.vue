<template>
  <div class="home-container">
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
.home-container {
  margin-top: 0.5vh; /* Adjust this value as needed */
}
</style>