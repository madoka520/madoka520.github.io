<template>
  <NutcrackerWitch v-if="view==='NutcrackerWitch'"></NutcrackerWitch>
</template>
<script setup lang="ts">

import NutcrackerWitch from "@/components/Boss/NutcrackerWitch.vue";
const props = defineProps({
  view:{
    default:""
  }
})
</script>
<style scoped lang="scss">

</style>