import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/generarToken',
        component: () => import('@/paginas/GenerarToken.vue')
    },
    {
        path: '/guardarEstudiante',
        component: () => import('@/paginas/GuardarEstudiante.vue')
    }

]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router