<template>
  <div class="navbar">
    <div class="brand-name">Simple&Cozy</div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/room">Room</router-link></li>
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background-color: white;
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2000; /* Ensures it stays on top of other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow */
}

.brand-name {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.navbar img {
  width: 15rem;
  height: 7rem;
  transform: rotate(90deg);
  max-width: 100%;
  object-fit: contain;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0;
}

.nav-links a {
  color: #333; /* Changed to a visible color */
  text-decoration: none;
  transition: color 0.3s;
  font-weight: bold;
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

/* Media queries for responsive design */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-direction: column;
    gap: 10px;
  }

  .nav-button {
    margin-top: 10px;
  }
}
</style>
