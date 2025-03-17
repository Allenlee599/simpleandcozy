<template>
    <div class="floor-panel-container">
      <WordPanel :title="title" :message="message" class="word-panel"/>
      <div class="image-gallery" v-if="images && images.length">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </template>
  
  <script>
  import WordPanel from './WordPanel.vue';
  
  export default {
    name: 'FloorPanel',
    components: {
      WordPanel
    },
    props: {
      title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      images: {
        type: Array,
        default: () => []
      }
    }
  }
  </script>
  
  <style scoped>
  .word-panel h1, .word-panel p {

  }

  .floor-panel-container {
    padding: 20px;
    margin-top: 1h; /* Ensure the panel is not covered by the navbar */
    margin-left: 18vw; /* Adjust the left margin as needed */
    margin-bottom: 20px; /* Add space below each FloorPanel */
  }
  
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5vw; /* Space between images */
    margin-top: 20px; /* Space above the image gallery */
    margin-left: 1rem;
  }
  
  .image-gallery img {
    width: 100%;
    max-width: 300px; /* Adjust the max width as needed */
    height: 100%;
    border-radius: 5px; /* Optional: adds rounded corners */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow */
  }
  
  /* Media queries for responsive design */
  @media (max-width: 1200px) {
    .image-gallery img {
      max-width: 250px; /* Adjust the max width for smaller screens */
    }
  }
  
  @media (max-width: 768px) {
    .image-gallery {
      justify-content: center; /* Center images on smaller screens */
    }
  
    .image-gallery img {
      max-width: 200px; /* Adjust the max width for smaller screens */
    }
  }
  
  @media (max-width: 480px) {
    .image-gallery {
      flex-direction: column; /* Stack images vertically on very small screens */
      align-items: center; /* Center images on very small screens */
    }
  
    .image-gallery img {
      max-width: 100%; /* Make images full width on very small screens */
    }
  }
  </style>