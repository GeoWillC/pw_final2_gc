<template>
    <div class="componente2" :="consultar()">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Cédula</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dato in datos" :key="dato.id">
                    <td>{{ dato.id }}</td>
                    <td>{{ dato.nombre }}</td>
                    <td>{{ dato.apellido }}</td>
                    <td>{{ dato.cedula }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { consultarEstudiantesFachada } from '../helpers/clienteEstudiante.js'
export default {
    data() {
        return {
            datos: null
        }
    },
    methods: {
        async consultar() {
            this.datos = await consultarEstudiantesFachada();
            console.log("Datos");
            console.log(this.datos);
        }

    },
    created() {
        this.consultar()
    }
}
</script>

<style>
.componente2 {
    border: 5px solid #ccc;
    border-color: rgb(38, 127, 243);
    padding: 10px;
    width: 50%;
    align-items: center;
    border-style: dotted;
    margin-left: 25%;
    margin-right: 25%;
    padding: 1% 1% 1% 1%;
}

.componente2 h2 {
    text-align: center;
}
.componente2 table {
    width: 100%;
    border-collapse: collapse;
}

.componente2 table th,
.componente2 table td {
    padding: 5px;
    border: 1px solid black;
}
</style>