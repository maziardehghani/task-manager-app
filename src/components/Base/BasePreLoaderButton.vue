<template>
  <button v-if="!loading" class="btn btn-dark" type="submit">
    {{props.mainText}}
  </button>
  <button v-if="loading" class="btn btn-dark" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    {{props.loadingText}}
  </button>
</template>

<script setup>


const props = defineProps({
  mainText: String,
  loadingText: String,
  loading: Boolean
})


</script>

<style scoped>

</style>