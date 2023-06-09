<template>
    <footer>
        <p>Desenvolvido por <a href="https://github.com/hfidelis" target="_blank">Heitor Fidelis</a></p>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
    * {
        font-family: 'Nunito Sans', sans-serif;
    }

    footer {
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 56px;
        background-color: #6584c6 ;
    }

    footer p {
        color: #fff;
        font-weight: 600;
        margin: 0;
    }

    footer a {
        color: #0B0B0B;
        font-weight: 700;
        text-decoration: none;
        transition: all 400ms;
    }

    footer a:hover {
        outline: 1px solid #fff;
        padding: 4px;

        color: #fff;
    }
</style>