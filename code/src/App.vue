<template>
  <div id="app">
    <BestTransport/>
  </div>
</template>

<script>
import BestTransport from './components/BestTransport.vue'

export default {
  name: 'App',
  components: {
    BestTransport
  }
}
</script>

<style>
  html, body {
    height: 100vh;
    width: 100vw;
  }

  #app {
    height: 100%;
    width: 100%;
  }
</style>
