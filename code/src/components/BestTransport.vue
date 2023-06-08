<template>
  <div>
    <best-header :brandName="appName"></best-header>
  </div>
</template>

<script>
import BestHeader from './BestHeader.vue'

export default {
  components: {
    BestHeader,
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
</style>
