<template>
  <PetCatalogNavbar />
  <router-view></router-view>
</template>

<script>
import PetCatalogNavbar from './components/PetCatalogNavbar.vue'

export default {
  name: 'App',
  components: {
    PetCatalogNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
