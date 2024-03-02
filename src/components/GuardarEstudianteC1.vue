<template>
    <div class="container">
        <h1>Estudiante</h1>
        <div class="izquierda">
            <p>Token</p>
            <input type="text">
            <p>Nombre</p>
            <input v-model="name" type="text">
            <p>Apellido</p>
            <input v-model="lastName" type="text">
            <p>Cedula</p>
            <input v-model="cid" type="text">
        </div>
        <br>
        <button @click="insertar()">Guardar</button>
    </div>
</template>

<script>
import { insertarFachada } from '../helpers/clienteEstudiante.js'
export default {


    data() {
        return {
            name: null,
            lastName: null,
            cid: null,
        }
    },
    methods: {
        async insertar() {
            const estuBody = {
                nombre: this.name,
                apellido: this.lastName,
                cedula: this.cid,
            }
            
            await insertarFachada(estuBody);
            console.log(estuBody);
        },
    }
}
</script>

<style scoped>
.container {
    display: block;
    align-items: first baseline;
    text-align: center;
    margin-left: 37%;
    margin-right: 37%;
    padding: 1% 1% 1% 1%;
    border-style: dotted;
    border-color: rgb(38, 127, 243);
    font-size: 1cap;
}

.container input {
    border-radius: 30px;
    border-color: rgb(38, 127, 243);
}

.container h1,
.container p {
    color: rgb(38, 127, 243);
}

.izquierda {
    text-align: left;
}

.container button {
    border-radius: 30px;
    background-color: rgb(38, 127, 243);
    color: white;
    font-size: 1.3cap;
    padding: 20px 20px;

}
</style>