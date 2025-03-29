import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(Toast, {
    timeout: 3000,
    position: 'top-right',
});
app.use(router)
app.use(createPinia())
app.mount('#app')
