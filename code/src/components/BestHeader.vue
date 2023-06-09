<template>
    <header>
        <b-navbar variant="faded" type="dark" class="d-flex align-items-center justify-content-center">
            <b-navbar-brand href="index.html">
            <b-icon icon="truck"></b-icon>
            {{ brandName }}
            </b-navbar-brand>
        </b-navbar>
    </header>
</template>

<script>
    export default {
        props: {
            brandName: {
            type: String,
            required: true
        }
        }
    }
</script>

<style scoped>

    .navbar {
    background-color: var(--primary-color) !important;
    box-shadow: 0 0 16px 4px var(--light-shadow);
    }
    
    .navbar-brand {
    font-weight: 700;
    font-family: 'Nunito Sans', sans-serif;
    }

</style>