<template>
  <div class="dropdown">
    <button type="button" class="btn btn-dark fs-7 mx-2" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
      <i class="bi-pencil-fill "></i>
    </button>
    <div class="dropdown-menu">
      <form @submit.prevent="editTask">
        <div class="row p-2 g-2">
          <div class="col-md-12">
            <input v-model="form.title" type="text" class="form-control" placeholder="title">
          </div>

          <div class="col-md-12">
            <input v-model="form.description" type="text" class="form-control" placeholder="description">
          </div>

          <div class="col-md-12">
            <select v-model="form.status" class="form-select form-select-sm">
              <option value="">status</option>
              <option value="done">done</option>
              <option value="doing">doing</option>
              <option value="todo">todo</option>
            </select>
          </div>

          <div class="col-md-12">
            <input v-model="form.start_date"  type="text" class="form-control" placeholder="start date">
          </div>

          <div class="col-md-12">
            <input v-model="form.end_date" type="text" class="form-control" placeholder="end date">
          </div>

          <div class="col-md-12">
            <BasePreLoaderButton
                :main-text="'edit'"
                :loading-text="'Loading...'"
                :loading="preLoader"
            />
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script setup>

import {reactive, ref} from "vue";
import {useTaskStore} from "../../store/Task.js";
import BasePreLoaderButton from "../Base/BasePreLoaderButton.vue";


const props = defineProps({
  task : Object,
})

const preLoader = ref(false)
const store = useTaskStore()

const form = reactive({
  title: props.task.title,
  description: props.task.description,
  status: props.task.status,
  start_date: props.task.startDate,
  end_date: props.task.endDate,
})

function editTask()
{
  preLoader.value = true
  store.updateTask(form, props.task.id)
  preLoader.value = false

}



</script>

<style scoped>
.fs-7{
  font-size: 10px;
}
</style>