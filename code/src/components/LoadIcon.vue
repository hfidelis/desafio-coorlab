<template>
    <div class="load-wrapper d-flex align-items-center justify-content-center">
        <b-icon icon="arrow-clockwise" animation="spin" font-scale="3" variant="light"></b-icon>
    </div>
</template>

<script>
    export default {
        
    }
</script>
    
<style scoped>
    .load-wrapper {
        background-color: var(--primary-color);
        box-shadow: 0 0 24px 2px rgba(0, 0, 0, 0.220);
        border-radius: 50%;
        height: 60px;
        width: 60px;
    }

</style>