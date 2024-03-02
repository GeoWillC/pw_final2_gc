<template>
  <div class="nav">
  <h1>Prueba Final 2 Programacion Web</h1>
  <NavBar></NavBar>
</div>
  <router-view />
</template>

<script>

import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.nav{
  margin-bottom: 4%;
}
</style>
