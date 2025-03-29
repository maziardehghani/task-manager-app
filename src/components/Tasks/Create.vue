<template>
  <div class="row">
    <div class="col-md-12 mb-4">
      <h4>Create Task : </h4>
      <form class="row" @submit.prevent="createTask">
        <div class="col-md-2">
          <input v-model="form.title" type="text" class="form-control" placeholder="title">
        </div>
        <div class="col-md-2">
          <input v-model="form.description" type="text" class="form-control" placeholder="description">
        </div>
        <div class="col-md-2">
          <select v-model="form.status" class="form-select form-select-sm">
            <option value="">status</option>
            <option value="done">done</option>
            <option value="doing">doing</option>
            <option value="todo">todo</option>
          </select>
        </div>
        <div class="col-md-2">
          <input v-model="form.start_date" type="text" class="form-control" placeholder="2025/6/2">
        </div>
        <div class="col-md-2">
          <input v-model="form.end_date" type="text" class="form-control" placeholder="2025/6/2">
        </div>
        <div class="col-md-2">
          <BasePreLoaderButton
              :main-text="'Create'"
              :loading-text="'Loading...'"
              :loading="preLoader"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

import {reactive, ref} from "vue";
import {useTaskStore} from "../../store/Task.js";
import BasePreLoaderButton from "../Base/BasePreLoaderButton.vue";


const preLoader = ref(false)
const store = useTaskStore()
const form = reactive({
  title: '',
  description: '',
  status: '',
  start_date: '',
  end_date: '',
})

function createTask()
{
  preLoader.value = true
  store.storeTask(form)
  preLoader.value = false

}


</script>

<style scoped>

</style>