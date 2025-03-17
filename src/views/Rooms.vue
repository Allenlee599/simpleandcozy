<!-- src/components/About.vue -->
<template>
    <div class="rooms-container">
        <div class="sidebar">
          <WordPanel>
            <template #buttons>
              <div class="buttons-container">
                <div v-for="(button, index) in buttons" :key="index">
                  <ButtonPanel :label="button.label" :to="button.to" />
                </div>
              </div>
            </template>
          </WordPanel>  
        </div>
        <div class="main-content">
          <router-view></router-view>
        </div>
    </div>
  </template>
  
  <script>
  import WordPanel from '../components/WordPanel.vue';
  import ButtonPanel from '../components/ButtonPanel.vue';

  export default {
    name: 'RoomsView',
    components: {
      WordPanel,
      ButtonPanel
    },
    data() {
    return {
      buttons: [
        { label: '一樓空間', to: '/floor1' },
        { label: '二樓空間', to: '/floor2' },
        { label: '三樓空間', to: '/floor3' }
      ]
    }
  }
  }
  </script>
  
<style scoped>
.rooms-container {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 100vh; /* Ensure the container takes full height */
}

.sidebar {
  width: 150px; /* Set the width of the sidebar */
  background-color: #333; /* Background color for the sidebar */
  padding: 20px; /* Padding inside the sidebar */
  border-radius: 5px;;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow */
  position: sticky;
  top: 10vh;
}

.main-content {
  flex: 1; /* Take the remaining space */
  padding: 20px; /* Padding inside the main content */
}

.buttons-container {
  display: flex;
  flex-direction: column; /* Stack buttons vertically */
  gap: 10px; /* Add space between buttons */
  margin-bottom: 20px; /* Add some margin below the buttons */
}

button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1d1e1e;
}

@media (max-width: 768px) {
  .rooms-container {
    flex-direction: column; /* Stack sidebar and main content vertically */
  }

  .sidebar {
    width: 100%; /* Make sidebar full width */
    box-shadow: none; /* Remove shadow */
  }

  .main-content {
    width: 100%; /* Make main content full width */
    padding: 10px; /* Adjust padding */
  }
}

@media (max-width: 480px) {
  .buttons-container {
    flex-direction: column; /* Ensure buttons are stacked vertically */
    gap: 5px; /* Adjust gap between buttons */
  }

  button {
    padding: 8px 16px; /* Adjust button padding */
  }
}
  </style>