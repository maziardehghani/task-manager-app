import {defineStore} from 'pinia';
import {useToast} from 'vue-toastification';
import router from "../router.js";
import axios from "axios";

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
        task: {},
        toaster: useToast(),
        statuses: [],
        errors: [],
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
        async fetchTasks(status = '', search = '', order = '') {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks?status=${status}&text=${search}&order=${order}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem('token')
                            ? `Bearer ${localStorage.getItem('token')}`
                            : '',
                    }
                });

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

        async storeTask(data) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/tasks/store`,
                    {
                        title: data.title,
                        description: data.description,
                        status: data.status,
                        start_date: data.start_date,
                        end_date: data.end_date,
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: localStorage.getItem('token')
                                ? `Bearer ${localStorage.getItem('token')}`
                                : '',
                        }
                    });

                this.tasks.unshift(response.data.data)
                this.toaster.success("task created successfully");

            } catch (error) {
                console.log(error);
                this.validation(error.response.data.errors);
                this.toaster.error(error.response.data.message);
            }
        },
        async updateTask(data, TaskId) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/tasks/update/${TaskId}`,
                    {
                        title: data.title,
                        description: data.description,
                        status: data.status,
                        start_date: data.start_date,
                        end_date: data.end_date,
                        _method: "PUT",
                    }, {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: localStorage.getItem('token')
                                ? `Bearer ${localStorage.getItem('token')}`
                                : '',
                        }
                    });

                this.updateTaskList(response.data.data)
                this.toaster.success('task edited successfully');


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
        updateTaskList(updatedTask) {
            const index = this.tasks.findIndex(task => task.id === updatedTask.id)

            if (index !== -1) {
                this.tasks.splice(index, 1, updatedTask);
            }
        },
    },
});
