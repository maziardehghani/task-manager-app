import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home.vue";
import Index from "./pages/Tasks/Index.vue";


const routes = [
    {path: '/home', component: Home, name:'home'},
    {path: '/tasks', component: Index, name:'tasks'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router