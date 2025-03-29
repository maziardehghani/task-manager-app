<template>
  <Header v-if="!$route.meta.hideHeader" />
  <router-view></router-view>
</template>


<script setup>
import Header from './components/Header.vue'

</script>

<style>

</style>
