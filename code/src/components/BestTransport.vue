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
    const appName = ''

    return {
      appName,
    }
  },
  created() {
    // Implemente aqui o GET dos dados da API REST
    // para que isso ocorra na inicialização da pagina
    this.appName = 'MelhorFrete'
  },
  methods: {
    // Implemente aqui os metodos utilizados na pagina
    methodFoo() {
      console.log(this.appName)
    },
  },
}
</script>

<style scoped>
  main {
    margin: 20px 0;
  }
</style>
