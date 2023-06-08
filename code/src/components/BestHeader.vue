<template>
    <div>
        <b-navbar variant="faded" type="dark" class="d-flex align-items-center justify-content-center">
            <b-navbar-brand href="index.html">
            <b-icon icon="truck"></b-icon>
            {{ brandName }}
            </b-navbar-brand>
        </b-navbar>
</div>
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
    background-color: #6584c6 !important;
    box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.220);
    }

    img {
        height: 30px;
        width: 30px;
    }
    .navbar-brand {
    font-weight: 700;
    font-family: 'Nunito Sans', sans-serif;
    }

</style>