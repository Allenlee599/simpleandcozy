<template>
    <div class="whole-container">
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
    name: 'FloorThree',
    components: {
      FloorPanel
    },
    data() {
      return {
        images: [
          { src: require('../assets/floor3/floor_three_table.jpg'), alt: 'Floor 3 Image 1' },
          { src: require('../assets/floor3/floor_three_shelf.jpg'), alt: 'Floor 3 Image 2' },
          { src: require('../assets/floor3/floor_three_table_2.jpg'), alt: 'Floor 3 Image 3' }
        ],
        images_ocean: [
          { src: require('../assets/floor3/ocean/ocean_1.jpg'), alt: 'Floor 1 Image 1' },
          { src: require('../assets/floor3/ocean/ocean_2.jpg'), alt: 'Floor 1 Image 2' },
          { src: require('../assets/floor3/ocean/ocean_3.jpg'), alt: 'Floor 1 Image 3' }
        ],
        images_river: [
          { src: require('../assets/floor3/river/river_1.jpg'), alt: 'Floor 1 Image 1' },
          { src: require('../assets/floor3/river/river_2.jpg'), alt: 'Floor 1 Image 2' },
          { src: require('../assets/floor3/river/river_3.jpg'), alt: 'Floor 1 Image 3' }
        ]
      };
    }
  }
</script>

<style scoped>
.whole-container {
  margin-top: 45rem; /* Adjust based on the height of the NavBar */
  padding-bottom: 8vh; /* Adjust based on the height of the BottomAboutus */
}
</style>