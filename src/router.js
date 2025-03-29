import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home.vue";
import Index from "./pages/Tasks/Index.vue";
import Login from "./pages/Auth/Login.vue";
import Register from "./pages/Auth/Register.vue";


const routes = [
    {path: '/home', component: Home, name:'home'},
    {path: '/tasks', component: Index, name:'tasks'},
    {path: '/login', component: Login, name:'login'},
    {path: '/register', component: Register, name:'register'},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router