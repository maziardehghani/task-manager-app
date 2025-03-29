<template>

    <div class="col-md-2 mb-4">
      <h6>
        Search Tasks
      </h6>

      <input v-model="search" class="form-control" type="text" placeholder="search ...">

    </div>

</template>

<script setup>

import {ref, watch} from "vue";
import {useTaskStore} from "../../store/Task.js";

const search = ref('')
const store = useTaskStore();

function searchTask(search)
{
  store.fetchTasks('',search)
}


let timeoutId = null;

const debouncedEmit = (newValue) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    searchTask(newValue)
  }, 3000);
};

watch(search, (newValue) => {
  debouncedEmit(newValue);
});

</script>

<style scoped>

</style>