<template>
    <swiper :navigation="true" :pagination="{ clickable: true }" :modules="modules" class="mySwiper">
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

    import 'swiper/css/pagination';
  
    // import './style.css';
  
    // import required modules
    import { Navigation, Pagination } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [Navigation, Pagination],
        };
      },
    };
</script>

<style scoped>

.swiper {
  position: relative;
  top : 1vh;
  width: 100%;
  height: auto;
}

.swiper-slide {
  text-align: center;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: auto;
  /* object-fit: cover; */
}

/* Media queries for responsive design */
@media (max-width: 1200px) {
  .swiper {
    top: 50px;
  }
}

@media (max-width: 768px) {
  .swiper {
    top: 30px;
  }
}

@media (max-width: 480px) {
  .swiper {
    top: 20px;
  }
}
</style>
