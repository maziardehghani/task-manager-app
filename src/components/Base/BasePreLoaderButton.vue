<template>
  <button v-if="!loading" id="kt_sign_in_submit" class="btn btn-primary">
    {{props.mainText}}
  </button>
  <button v-if="loading" class="btn btn-primary" type="button" disabled>
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