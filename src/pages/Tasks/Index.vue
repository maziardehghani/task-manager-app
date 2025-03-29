<template>

  <div>
    <div v-if="preLoader" class="container mt-5">
      <div class="row flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <Create/>
      <hr>
      <div class="row">

        <Search/>
        <Filter/>
        <OrderBy/>

      </div>
      <div class="row g-3">
        <div v-for="task in tasks" class="col-md-4">
          <div class="card">
            <div class="card-body">
              {{ task.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>

import {useTaskStore} from "../../store/Task.js";
import {computed, ref} from "vue";
import Filter from "../../components/Tasks/Filter.vue";
import Search from "../../components/Tasks/Search.vue";
import OrderBy from "../../components/Tasks/OrderBy.vue";
import Create from "../../components/Tasks/Create.vue";

const store = useTaskStore();
const tasks = computed(() => store.allTasks)
const preLoader = ref(false)

async function fetchTasks() {
  preLoader.value = true
  await store.fetchTasks()
  preLoader.value = false
}

fetchTasks()

</script>

<style scoped>

</style>