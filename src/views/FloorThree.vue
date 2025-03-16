<template>
    <div class="floor-three-container">
        <WordPanel title="Floor three" message="This is the third floor." />
    </div>
</template>

<script>
import WordPanel from '../components/WordPanel.vue';
export default {
    name: 'FloorThree',
    components: {
        WordPanel
    }
}
</script>