<template>
  <div>
    <router-link to="/generarToken">Generar Token</router-link>
    <router-link to="/guardarEstudiante">Guardar Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
div a {
    color: #2c3e50;
    margin: 0px 10px;
    font-weight: bold;
    border: solid 1px;
    padding: 10px 10px;
    border-radius: 10px;
    background-color: aqua;

}

.router-link-exact-active {
    background-color:  #68ffd9;
}
</style>