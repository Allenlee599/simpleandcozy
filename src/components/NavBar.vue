<template>
  <div class="navbar">
    <img alt="simple_and_cozy_logo" src="../assets/simple_logo.svg">
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
    <button class="nav-button">立即預訂</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
img {
  width: 15rem; /* 314px */
  height: 10.125rem;  /* 216px */
  transform: rotate(90deg);
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background-color: white;
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2000; /* Ensures it stays on top of other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow */
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: #333; /* Changed to a visible color */
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #666; /* Change color on hover */
}

.nav-button {
  background-color: #333;
  color: white;
  border: none;
  margin-right: 50px;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
