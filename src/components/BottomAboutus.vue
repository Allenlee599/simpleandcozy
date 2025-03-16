<template>
    <footer>
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
    .AboutUs {
        background-color: rgb(159, 29, 29);
        left: 0;
        display: flex;
        justify-content: center;
        /* padding: 20px; */
        width: 100%;
        height: 50%;
        margin-top: 200px;
    }
    .footer-content {
        width: 30%;
        color: white;
    }
</style>