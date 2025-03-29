<template>

  <div>
    <div v-if="preLoader" class="container mt-5">
      <div class="row flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="container mt-5 mb-5">
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
            <div class="card-body bg-light">
              <h5 class="card-title">
                <div class="d-flex justify-content-between">
                  <div class="text-start">
                    <small class="text-muted">{{task.title}}</small>
                  </div>
                  <div class="text-end">

                    <small class="text-black fw-bold">{{task.status}}</small>

                  </div>
                </div>
              </h5>
              <p class="card-text">{{task.description}}</p>
              <div class="card-footer mt-auto p-2 bg-transparent border-top-0">
                <div class="d-flex justify-content-between">
                  <div class="text-start">
                    <small class="text-muted">end date: {{ task.endDate }}</small>
                  </div>
                  <div class="text-end">
                    <small class="text-muted">start date: {{ task.startDate }}</small>
                  </div>
                </div>
              </div>

              <div class="card-body">

               <div>
                 <Edit :task="task"  />
               </div>


              </div>

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
import BasePreLoaderButton from "../../components/Base/BasePreLoaderButton.vue";
import Edit from "../../components/Tasks/Edit.vue";

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