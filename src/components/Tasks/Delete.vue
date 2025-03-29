<template>
  <div class="dropdown">
    <button @click="removeTask" type="button" class="btn btn-dark fs-7 mx-2">
      <i class="bi-trash-fill "></i>
    </button>
  </div>
</template>

<script setup>

import {useTaskStore} from "../../store/Task.js";

const props = defineProps({
  task : Object,
})

const store = useTaskStore()

function removeTask()
{
  store.removeTask(props.task.id)
}



</script>

<style scoped>
.fs-7{
  font-size: 10px;
}
</style>