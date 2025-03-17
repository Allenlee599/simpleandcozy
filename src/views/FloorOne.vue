<template>
    <div class="floor-one-container">
        <WordPanel title="Floor One" message="This is the first floor." />
    </div>
</template>

<script>
import WordPanel from '../components/WordPanel.vue';
export default {
    name: 'FloorOne',
    components: {
        WordPanel
    }
}
</script>