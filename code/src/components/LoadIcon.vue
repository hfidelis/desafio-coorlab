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
        box-shadow: 0 0 16px 2px var(--light-shadow);
        border-radius: 50%;
        height: 60px;
        width: 60px;
    }

</style>