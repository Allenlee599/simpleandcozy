<template>
    <footer class="footer">
      <div class="AboutUs">
        <div class="footer-content">
          <h3>關於我們</h3>
          <p>我們是一群熱愛大自然的人，希望透過這個平台讓更多人認識大自然的美好。</p>
        </div>
        <div class="footer-content">
          <h3>聯絡我們</h3>
          <p>電話：0978-733-216</p>
          <p>信箱：simpleandcozy216@gmail.com</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'BottomAboutus',
  };
  </script>
  
<style scoped>
.footer {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 8vh; /* Set a fixed height using vh */
background-color: rgb(159, 29, 29);
color: #fff;
padding: 0.5rem 1rem; /* Adjust padding using rem */
box-shadow: 0 -0.125rem 0.3125rem rgba(0, 0, 0, 0.1); /* Optional: adds a shadow */
z-index: 2000; /* Ensure the footer is on top of other elements */
display: flex;
align-items: center; /* Center content vertically */
}

.AboutUs {
display: flex;
justify-content: flex-start; /* Align content to the left */
align-items: center; /* Center items vertically */
width: 100%;
}

.footer-content {
flex: 1;
margin: 0 0.625rem; /* Adjust margin using rem */
text-align: left; /* Align text to the left */
}

.footer-content h3 {
margin-bottom: 0.3125rem; /* Adjust margin using rem */
font-size: 0.875rem; /* Adjust font size using rem */
font-weight: bold;
}

.footer-content p {
margin: 0.125rem 0; /* Adjust margin using rem */
font-size: 0.75rem; /* Adjust font size using rem */
}

@media (max-width: 768px) {
.AboutUs {
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
}

.footer-content {
    margin: 0.3125rem 0; /* Adjust margin using rem */
}
}
</style>