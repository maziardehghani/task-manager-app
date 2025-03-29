import axios from "axios";

const token = sessionStorage.getItem('token');

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
    },
});

export {api, token};