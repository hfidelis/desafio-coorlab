<template>

  <div>

    <best-header :brandName="appName"></best-header>

    <main>

      <div id="loading-wrapper" v-if="isLoading">
        <load-icon></load-icon>
      </div>

      <div id="api-error-div" v-if="apiError">
        <b-icon icon="emoji-frown" font-scale="4" style="color: #7c9be0;"></b-icon>
        <h2>Não foi possível se conectar com o servidor.<br>Erro: {{ errorInfo[0] }} {{ errorInfo[1] }} {{ errorInfo[2] }}</h2>
      </div>

      <!-- O Conteúdo do form só sera exibido caso não tenham erros e nem carregamento. -->
      <div id="content-wrapper" v-if="!isLoading && !apiError">
        <best-form :companies="companies"></best-form>
      </div>
    
    </main>

  </div>

</template>

<script>
import BestHeader from './BestHeader.vue'
import LoadIcon from './LoadIcon.vue'
import BestForm from './BestForm.vue'

export default {
  components: {
    BestHeader,
    LoadIcon,
    BestForm,
  },
  data() {
    return {
      appName: '',
      companies: [],
      isLoading: true,
      apiError: false,
      errorInfo: []
    }
  },
  created() {
    this.appName = 'MelhorFrete'
    this.fetchCompanies()
  },
  methods: {
    /* Função assíncrona que realiza a requisição GET em nossa API fictícia
     * e atribuindo os dados para a variável companies, após o método ser
     * concluído, o componente de Loading é removido.*/
    async fetchCompanies() {

      try {

        const apiUrl = "http://localhost:3000/transport"
        const response = await fetch(apiUrl)
        const data = await response.json()
        this.companies = data
        this.isLoading = false
        this.apiError = false

      } catch (error) {

        this.isLoading = false
        this.apiError = true
        this.errorInfo = [error.name, error.message, error.number]
        console.log(error)

      }
    }
  },
}
</script>

<style scoped>
  main {
    margin: 100px 0;
  }

  #loading-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #api-error-div {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
  }

  #api-error-div h2 {
    text-align: center;
  }

  @media (max-width:576px) {
    main {
      margin-inline: 5vh;
    }
  }

  @media (min-width: 768px) {
  main {
    margin-inline: 6vh;
  }
  }

  @media (min-width: 992px) {
  main {
    margin-inline: 8vh;
  }
  }

  @media (min-width: 1200px) {
  main {
    margin-inline: 35vh;
  }
  }

  @media (min-width: 1600px) {
  main {
    margin-inline: 50vh;
  }
  }

</style>
