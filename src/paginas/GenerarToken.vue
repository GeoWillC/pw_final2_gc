<template>
    <div class="container">
        <h1>Token</h1>
        <div class="izquierda">
            <p>Semilla</p>
            <input :="token" type="text">
            <p>Tiempo de vigencia</p>
            <input type="text">
            <p>Token</p>
            <input type="text">
            
        </div>
        <br>
        <button @click="generar()">Generar</button>
    </div>

</template>

<script>
import { generarTokenFachada } from '../helpers/clienteToken.js'
export default {
    data() {
        return {
            token: null,
            
        }
    },
    methods: {
        async generar() {
            this.token=await generarTokenFachada();
            console.log(this.token);
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
    padding: 0% 1% 1% 1%;
    border-style: dotted;
    border-color: rgb(38, 127, 243);
    font-size: 2cap;

}

.container input {
    border-radius: 30px;
    border-color: rgb(38, 127, 243);
}

.container h1,
.container p {
    color: rgb(38, 127, 243);
}
.izquierda{
    text-align: left;
}
.container button{
    border-radius: 30px;
    background-color: rgb(38, 127, 243);
    color: white;
    font-size: 1.3cap;
    padding: 20px 20px;

}
</style>