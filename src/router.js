import { createRouter, createWebHistory } from 'vue-router'
import Home from "./pages/Home.vue";
import Index from "./pages/Tasks/Index.vue";
import Login from "./pages/Auth/Login.vue";
import Register from "./pages/Auth/Register.vue";
import {authState} from "./states/auth.js";


const routes = [
    {path: '/home', component: Home, name:'home',meta: { requiresAuth: true }},
    {path: '/tasks', component: Index, name:'tasks',meta: { requiresAuth: true }},
    {path: '/login', component: Login, name:'login', meta: { hideHeader: true }},
    {path: '/register', component: Register, name:'register', meta: { hideHeader: true }},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !authState.isAuthenticated) {

        console.log(authState.isAuthenticated);
        next({ name: 'login' });
    } else {
        next();
    }
});

export default router