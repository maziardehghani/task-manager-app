<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-lg border-0 rounded-4 mt-5">
          <div class="card-header bg-primary text-white rounded-top-4 py-4">
            <h3 class="text-center mb-0"><i class="bi bi-person-fill me-2"></i>Login to Your Account</h3>
          </div>
          <div class="card-body p-4 p-md-5">
            <form @submit.prevent="login">
              <div class="mb-4">
                <label for="email" class="form-label">Email Address</label>
                <div class="input-group">
                  <span class="input-group-text bg-light"><i class="bi bi-envelope-fill text-primary"></i></span>
                  <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Enter your email" >
                </div>
              </div>

              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <div class="input-group">
                  <span class="input-group-text bg-light"><i class="bi bi-lock-fill text-primary"></i></span>
                  <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Enter your password" >
                </div>
              </div>

              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary btn-lg rounded-pill py-2">
                  <BasePreLoaderButton
                      :main-text="'login'"
                      :loading-text="'loading...'"
                      :loading="preLoader" />
                </button>
              </div>

              <div class="text-center mt-4">
                <p class="mb-0">Don't have an account? <router-link :to="{ name: 'register' }" class="text-decoration-none fw-bold">Sign up</router-link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import {reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
import BasePreLoaderButton from "../../components/Base/BasePreLoaderButton.vue";
import {authState} from "../../states/auth.js";
import { useToast } from 'vue-toastification';

const toast = useToast();
const router = useRouter();

const form = reactive({
  email: '',
  password: '',
});

const preLoader = ref(false);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


async function login() {

  preLoader.value = true;

  try {

    const res = await api.post(`auth/login`, {
      email : form.email,
      password : form.password
    });

    localStorage.setItem('token', res.data.data.token)
    authState.isAuthenticated = true;

    toast.success('Login successful!');
    await router.push({name: 'home'});

  } catch (err) {
    toast.error(err.response.data.message);
  }

  preLoader.value = false;
}



</script>


<style scoped>
.card {
  border: none;
}
.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
.card-header {
  border-bottom: none;
}
</style>