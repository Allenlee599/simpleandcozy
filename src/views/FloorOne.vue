<template>
    <div class="floor-one-whole-container">
        <FloorPanel
            title="公共區域"
            :images="images"
        />
        <FloorPanel
        title="面海房"
        :images="images_ocean"
        />
        <FloorPanel
        title="面溪房"
        :images="images_river"
        />
    </div>
</template>
  
<script>
  import FloorPanel from '../components/FloorPanel.vue';
  
  export default {
    name: 'FloorOne',
    components: {
      FloorPanel
    },
    data() {
      return {
        images: [
          { src: require('../assets/floor1/floor_one_big_table_3.jpg'), alt: 'Floor 1 Image 3' },
          { src: require('../assets/floor1/floor_one_personal_table.jpg'), alt: 'Floor 1 Image 4' },
          { src: require('../assets/floor1/floor_one_big_table.jpg'), alt: 'Floor 1 Image 4' }
        ],
        images_ocean: [
          { src: require('../assets/floor1/ocean/ocean_1.jpg'), alt: 'Floor 1 Image 1' },
          { src: require('../assets/floor1/ocean/ocean_2.jpg'), alt: 'Floor 1 Image 2' },
          { src: require('../assets/floor1/ocean/ocean_3.jpg'), alt: 'Floor 1 Image 3' }
        ],
        images_river: [
          { src: require('../assets/floor1/river/river_1.jpg'), alt: 'Floor 1 Image 1' },
          { src: require('../assets/floor1/river/river_2.jpg'), alt: 'Floor 1 Image 2' },
          { src: require('../assets/floor1/river/river_3.jpg'), alt: 'Floor 1 Image 3' }
        ]
      };
    }
  }
</script>

<style scoped>
.floor-one-whole-container {
  margin-top: 45rem; /* Adjust based on the height of the NavBar */
  padding-bottom: 8vh; /* Adjust based on the height of the BottomAboutus */
}
</style>