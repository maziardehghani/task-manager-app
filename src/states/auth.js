import { reactive } from 'vue';

export const authState = reactive({
    isAuthenticated: !!sessionStorage.getItem('token'),
    token: sessionStorage.getItem('token'),
});
