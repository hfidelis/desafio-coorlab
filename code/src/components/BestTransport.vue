<template>

  <div>

    <best-header :brandName="appName"></best-header>

    <main>
      <div id="loading-wrapper" v-if="isLoading">
        <load-icon></load-icon>
      </div>

      <div v-else>

      </div>
    </main>

  </div>

</template>

<script>
import BestHeader from './BestHeader.vue'
import LoadIcon from './LoadIcon.vue'

export default {
  components: {
    BestHeader,
    LoadIcon
  },
  data() {
    return {
      appName: '',
      companies: [],
      isLoading: true
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
        const data = response.json()
        this.companies = data
        this.isLoading = false

      } catch (error) {

        console.log(error)
        this.isLoading = false

      }
    }
  },
}
</script>

<style scoped>
  main {
    margin: 20px 0;
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
  
</style>
