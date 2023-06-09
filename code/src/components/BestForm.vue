<template>
    <div class="container mt-4">

        <div class="row">

            <div class="col-12 title-column px-4 py-3 rounded-top">
                <b-icon icon="box-seam" font-scale="1.4" variant="light"></b-icon>
                <p class="h3 container-title">Calcule seu frete</p>
            </div>
            
            <div class="w-100"></div>

            <div class="col-md-5 px-4">

                <div class="form-wrapper container py-3 rounded-3">
                    
                    <div class="row mt-4 mb-4">
                    <div class="form-title col-12 mb-4 mt-2">
                        <b-icon icon="map" font-scale="1.6"></b-icon>
                        <p class="h5">Insira o destino e o peso</p>
                    </div>

                    <div class="col-12 mb-3">
                        <label for="citySelect">Destino</label>
                        <select id="citySelect" class="form-control" v-model="selectedCity">
                        <option value="">Selecione o destino</option>
                        <option v-for="city in cities" :value="city" :key="city">{{ city }}</option>
                        </select>
                    </div>

                    <div class="col-12 mb-3">
                        <label for="weightInput">Peso</label>
                        <input id="weightInput" type="number" v-model.number="weight" class="form-control" placeholder="Peso da carga em KG">
                    </div>

                    <div class="col-12 d-flex justify-content-center">
                        <button class="form-button" @click="getBestCompanies">Analisar</button>
                    </div>
                    </div>
                    
                </div>

            </div>

            <div class="col-md-7">
                <div class="data-div" v-if="isData">
                    <h5 class="data-div-title">Estas são as melhores alternativas de frete que encontramos para você.</h5>
                    <CompanyCard
                    iconName="currency-dollar"
                    cardLabel="Frete com menor valor"
                    :companieName="cheapestCompanyName"
                    :freightTime="cheapestCompanyTime"
                    :freightPrice="cheapestCompanyPrice"
                    ></CompanyCard>
                    <CompanyCard
                    iconName="speedometer"
                    cardLabel="Frete mais rápido"
                    :companieName="fastestCompanyName"
                    :freightTime="fastestCompanyTime"
                    :freightPrice="fastestCompanyPrice"
                    ></CompanyCard>
                </div>

                <div class="empty-data" v-else>
                    <b-icon icon="search" animation="cylon" font-scale="2"></b-icon>
                    <p class="h5">{{columnText}}</p>
                </div>
            </div>

        </div>

        <AlertModal v-if="isModalVisible" :message="modalMessage" @close="isModalVisible = false"></AlertModal>
    </div>
</template>

<script>
import AlertModal from './AlertModal.vue'
import CompanyCard from './CompanyCard.vue'

    export default {

        components: {
            AlertModal,
            CompanyCard,
        },

        props: {
            companies: {
            type: Array,
            required: true,
            },
        },

        data() {
            return {
            selectedCity: '',
            weight: null,
            isData: false,
            isModalVisible: false,
            columnText: 'Nenhum dado selecionado',
            cheapestCompany: null,
            fastestCompany: null,
            minCost: Infinity,
            minTime: Infinity,
            modalMessage: '',
            }
        },

        computed: {
            // Retorna um Set, com os nomes das cidades de forma única.
            cities() {
            return [...new Set(this.companies.map(company => company.city))]
            },
            // Retornando dados da empresa mais rápida.
            fastestCompanyName() {
                return this.fastestCompany ? this.fastestCompany.name : '';
            },
            fastestCompanyPrice() {
                let lightCost = parseFloat(this.fastestCompany.cost_transport_light.replace('R$ ', '')) * this.weight;
                let heavyCost = parseFloat(this.fastestCompany.cost_transport_heavy.replace('R$ ', '')) * this.weight;
                const cost = this.weight <= 100 ? Math.ceil(lightCost) : Math.ceil(heavyCost);
                return cost.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            },
            fastestCompanyTime() {
                return this.fastestCompany ? this.fastestCompany.lead_time : '';
            },
            // Retornando dados da empresa mais barata.
            cheapestCompanyName() {
                return this.cheapestCompany ? this.cheapestCompany.name : '';
            },
            cheapestCompanyPrice() {
                let lightCost = parseFloat(this.cheapestCompany.cost_transport_light.replace('R$ ', '')) * this.weight;
                let heavyCost = parseFloat(this.cheapestCompany.cost_transport_heavy.replace('R$ ', '')) * this.weight;
                const cost = this.weight <= 100 ? Math.ceil(lightCost) : Math.ceil(heavyCost);
                return cost.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
            },
            cheapestCompanyTime() {
                return this.cheapestCompany ? this.cheapestCompany.lead_time : '';
            }
        },

        methods: {
            getBestCompanies() {

                /* Reiniciando as variáveis ao início da função,
                 * para não armazenar valores de parâmetros antigos.*/
                this.minCost = Infinity
                this.minTime = Infinity
                this.cheapestCompany = null
                this.fastestCompany = null

                if (this.selectedCity && this.weight <= 0 ) { 
                    /* Caso o usuário tente fazer a análise com um
                     * valor de peso menor ou igual a zero. */
                    this.modalMessage = 'Insira um peso maior que zero.'
                    this.isData = false;
                    this.isModalVisible = true;

                } else if (this.selectedCity && this.weight) {
                /* Array apenas com as empresas com o destino da cidade selecionada. */
                const filteredCompanies = this.companies.filter(company => company.city === this.selectedCity);

                if (filteredCompanies.length > 0) {
                    /* Calculando a empresa com o frete mais caro
                     * e a empresa com o frete mais barato */

                    filteredCompanies.forEach(company => {
                    /* Convertendo os valores de String para números */
                    let lightCost = parseFloat(company.cost_transport_light.replace('R$ ', '')) * this.weight;
                    let heavyCost = parseFloat(company.cost_transport_heavy.replace('R$ ', '')) * this.weight;
                    let deliveryTime = parseInt(company.lead_time.replace('h', ''));

                    const cost = this.weight <= 100 ? lightCost : heavyCost;
                        
                    /* Comparação de valores, alternando as variáveis
                     * de valor mínimo e tempo mínimo */
                    if (cost < this.minCost) {
                        this.minCost = cost;
                        this.cheapestCompany = company;
                    }
                    if (deliveryTime < this.minTime)
                        this.minTime = deliveryTime;
                        this.fastestCompany = company;
                    });

                    this.isData = true;

                } else {
                    
                    /* Caso não fosse encontrada nenhuma empresa para a cidade selecionada. */
                    this.isData = false;
                    this.columnText = 'Nenhuma companhia de entregas no momento.';

                }
                } else {
                    /* Caso o botão de Análise seja clicado sem ter dados nos campos */
                    this.modalMessage = 'Insira os valores para realizar a análise.'
                    this.isData = false;
                    this.isModalVisible = true;
                }
            },
        }
    }

</script>

<style scoped>

    * {
        font-family: 'Nunito Sans', sans-serif;
    }
    .container {
        box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.220);
    }

    .form-wrapper {
        background-color: rgb(235, 234, 234);
        box-shadow: none;

        margin: 80px 0!important;
    }

    .title-column {
        display: flex;
        align-items: center;
        gap: 8px;

        background-color: #6584c6 ;
    }

    .form-title {
        display: flex;
        align-items: center;
        gap: 8px;
        
    }

    .form-title p {
        font-weight: 700;
        margin: 0;
    }

    label {
        font-weight: 700;
    }

    .form-button {
        font-weight: 700;
        letter-spacing: 1px;

        padding: 8px;

        width: 65%;

        border-radius: 8px;

        background-color: #7c9be0;
        border: none;

        transition: all 400ms;
    }

    button:hover {
        background-color: #33466e;
    }

    .container-title {
        margin: 0;

        color: #fff;
    }

    .empty-data {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
        padding: 15%;
    }

    .empty-data p {
        text-align: center;
        font-weight: 700;
    }

    .data-div {
        height: 100%;
        width: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        gap: 12px;

        padding: 24px 12px;
    }

    .data-div-title {
        margin-bottom: 16px;
        padding-inline: 8px;
    }

    .data-div:has(.company-card:hover) .company-card:not(:hover) {
        filter: grayscale(100%) blur(2px);
        transform: scale(0.95);
    }

    @media (max-width: 768px) {
        .form-title {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 8px;
        }

        .empty-data {
            border-top: 1px solid rgba(134, 127, 127, 0.479);
        }

        .form-title p {
            text-align: center;
        }
    }
</style>