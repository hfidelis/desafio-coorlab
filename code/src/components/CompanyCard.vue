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

    p {
        margin: 0;
    }
    .company-card {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
        height: auto;
        width: 90%;

        transition: all 500ms;

        cursor: pointer;
        
    }

    .company-info {
        height: 100%;
        width: 70%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon-div {
        height: 100%;
        width: 20%;
        background-color: var(--light-primary);

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 8px;

        border-radius: 12px 0 0 12px;
    }

    .company-data {
        height: 100%;
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: column;

        background-color: var(--gray);
        border-radius: 0 12px 12px 0;

        padding: 12px 16px;
    }

    .company-data p {
        font-weight: 700;
        font-size: 18px;
    }

    .freight-price {
        height: 100%;
        width: 30%;

        display: flex;
        justify-content: center;
        flex-direction: column;

        background-color: var(--gray);

        border-radius: 12px;
        padding: 12px;
        overflow: hidden;
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

        .company-info {
            width: 90%;
        }

        .freight-price {
            width: 50%;
        }
    }


</style>