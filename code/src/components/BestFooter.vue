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

    footer {
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 56px;
        background-color: var(--primary-color);
    }

    footer p {
        color: var(--white);
        font-weight: 600;
        margin: 0;
    }

    footer a {
        color: var(--black);
        font-weight: 700;
        text-decoration: none;
        transition: all 400ms;
    }

    footer a:hover {
        outline: 1px solid var(--white);
        padding: 4px;

        color: var(--white);
    }
</style>