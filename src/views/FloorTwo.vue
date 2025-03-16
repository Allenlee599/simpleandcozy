<template>
    <div class="floor-two-container">
        <WordPanel title="Floor two" message="This is the second floor." />
    </div>
</template>

<script>
import WordPanel from '../components/WordPanel.vue';
export default {
    name: 'FloorTwo',
    components: {
        WordPanel
    }
}
</script>