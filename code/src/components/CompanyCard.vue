<template>
    <div class="company-card">
        <div class="company-info">
            <div class="icon-div">
                <b-icon :icon=iconName font-scale="2" animation="fade"></b-icon>
            </div>
            <div class="company-data">
                <p>{{ cardLabel }}</p>
                <span>Transportadora: {{ companieName }}</span>
                <span>Tempo estimado:  {{ freightTime }} </span>
            </div>
        </div>
        <div class="freight-price">
            <p>Preço</p>
            <span>{{ freightPrice }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            required: true
        },
        cardLabel: {
            type: String,
            required: true
        },
        companieName: {
            type: String,
            required: true
        },
        freightTime: {
            type: String,
            required: true
        },
        freightPrice: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

    * {
        font-family: 'Nunito Sans', sans-serif;
    }

    p {
        margin: 0;
    }
    .company-card {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        height: auto;
        min-width: 90%;

        transition: all 500ms;

        cursor: pointer;
        
    }

    .company-info {
        height: 100%;
        min-width: 70%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-div {
        height: 100%;
        min-width: 20%;
        background-color: #7c9be0;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 8px;

        border-radius: 12px 0 0 12px;
    }

    .company-data {
        height: 100%;
        min-width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        background-color: rgb(234, 230, 230);
        border-radius: 0 12px 12px 0;

        padding: 12px 16px;
    }

    .company-data p {
        font-weight: 700;
        font-size: 18px;
    }

    .freight-price {
        height: 100%;
        min-width: 30%;

        display: flex;
        justify-content: center;
        flex-direction: column;

        background-color: rgb(210, 209, 209);

        border-radius: 12px;
        padding: 12px;
    }

    .freight-price p {
        font-weight: 700;
        letter-spacing: 1px;
    }

    .freight-price span {
        font-size: .8em;
    }

    @media (max-width: 768px) {
        .company-card {
            flex-direction: column;
        }
    }


</style>