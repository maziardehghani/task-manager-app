import { defineStore } from 'pinia';
import { useToast } from 'vue-toastification';
import {api} from "../states/api.js";
import router from "../router.js";

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        task: {},
        toaster: useToast(),
        statuses: [],
        errors: [

        ],
    }),
    getters: {
        allTasks(state) {
            return state.tasks;
        },
        allTask(state) {
            return state.task;
        },
        getStatuses(state) {
            return state.statuses;
        },
        getErrors(state) {
            return state.errors;
        },
    },
    actions: {
        async fetchTasks() {
            try {
                const response = await api.get(`tasks`);
                this.tasks = response.data.data;

            } catch (error) {
                this.toaster.error("error while receive tasks");
            }
        },

        async fetchTask(taskId) {
            try {
                const response = await api.get(`tasks/${taskId}`);
                this.task = response.data.data;

            } catch (error) {
                this.toaster.error("error while receive tasks");
            }
        },

        async fetchStatuses() {
            try {
                const response = await api.get(`statuses`);
                this.statuses = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async storeTask(data, image) {
            try {
                const response = await api.post(`tasks/store`, {
                    title: data.title,
                    description: data.description,
                    status: data.status,
                    start_date: data.start_date,
                    end_date: data.end_date,
                });

                this.toaster.success("task updated successfully");
                this.goBack();
            } catch (error) {
                console.log(error);
                this.validation(error.response.data.errors);
                this.toaster.error(error.response.data.message);
            }
        },
        async updateTask(data, image, TaskId) {
            try {
                const response = await api.put(`tasks/${TaskId}`, {
                    title: data.title,
                    description: data.description,
                    status: data.status,
                    start_date: data.start_date,
                    end_date: data.end_date,
                });

                this.toaster.success("task updated successfully");
                this.goBack();
            } catch (error) {
                console.log(error);
                this.validation(error.response.data.errors);
                this.toaster.error(error.response.data.message);
            }
        },
        async removeTask(taskId) {
            try {
                await api.delete(`tasks/${taskId}`);
                this.deleteTask(taskId);
                this.toaster.success("task removed successfully");
            } catch (error) {
                console.log(error);
                this.toaster.error("error while receive tasks");
            }
        },
        goBack() {
            router.push('/tasks');
        },
        validation(errors) {
            for (const [key, value] of Object.entries(this.errors)) {
                this.errors[key] = "";
            }
            if (errors) {
                for (const [key, value] of Object.entries(errors)) {
                    this.errors[key] = value.at(0);
                }
            }
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
    },
});
