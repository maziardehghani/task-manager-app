<template>
  <div class="col-md-2 mb-4">
    <h6>
      Order By
    </h6>

    <select v-model="order" @change="orderBy" class="form-select form-select-sm">
      <option value="asc">newest</option>
      <option value="desc">latest</option>
    </select>

  </div>
</template>

<script setup>

import {useTaskStore} from "../../store/Task.js";
import {ref} from "vue";

const store = useTaskStore();
const order = ref('')

function orderBy()
{
  store.fetchTasks('','',order.value)
}

</script>

<style scoped>

</style>