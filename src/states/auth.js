import { reactive } from 'vue';

export const authState = reactive({
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
});
