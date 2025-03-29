<template>
  <div class="col-md-2 mb-4">
    <h6>
      Filter By Statuses
    </h6>


    <select v-model="status" @change="filterTask" class="form-select form-select-sm">
      <option value="">all</option>
      <option value="done">done</option>
      <option value="doing">doing</option>
      <option value="todo">todo</option>
    </select>

  </div>

</template>

<script setup>

import {useTaskStore} from "../../store/Task.js";
import {ref} from "vue";

const store = useTaskStore();
const status = ref('')

function filterTask()
{
  store.fetchTasks(status.value)
}

</script>

<style scoped>

</style>