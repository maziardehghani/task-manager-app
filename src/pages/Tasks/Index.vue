<template>

  <div class="container mt-5">
    <div class="row g-3">
      <div v-for="task in tasks" class="col-md-4">
        <div class="card">
          <div class="card-body">
            {{task.title}}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

import {useTaskStore} from "../../store/Task.js";
import {computed, ref} from "vue";

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