<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">task-manager</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/tasks">Tasks</router-link>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="logout">Logout</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

function logout() {
  localStorage.removeItem("token");

  router.push('login')
}

</script>


<style scoped>

</style>