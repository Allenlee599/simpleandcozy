<template>
  <NavBar />
  <router-view />
  <BottomAboutus />
</template>

<script>
import NavBar from './components/NavBar.vue';
import BottomAboutus from './components/BottomAboutus.vue';

export default {
  name: 'App',
  components: {
    NavBar, 
    BottomAboutus
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 30px;
}
</style>
