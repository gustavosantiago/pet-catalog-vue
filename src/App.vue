<template>
  <PetCatalogNavbar />
  <PetList />
</template>

<script>
import PetList from './pages/PetList.vue'
import PetCatalogNavbar from './components/PetCatalogNavbar.vue'

export default {
  name: 'App',
  components: {
    PetList,
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
