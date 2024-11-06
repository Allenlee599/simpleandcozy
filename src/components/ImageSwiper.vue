<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <img src="../assets/fullhouse.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/house_galaxy.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/house_sunset.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/mountain.jpg" alt="" />
      </swiper-slide><swiper-slide>
        <img src="../assets/house_bird.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/house_3F.jpg" alt="" />
      </swiper-slide><swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
  </template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
  
    import 'swiper/css/navigation';
  
    // import './style.css';
  
    // import required modules
    import { Navigation } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Navigation],
        };
      },
    };
</script>

<style scoped>

.swiper {
  position: relative;
  top : 150px;
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  /* font-size: 18px; */
  background: white;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.swiper-slide img {
  display: block;
  width: 95%;
  height: 95%;
  object-fit: cover;
}

</style>
