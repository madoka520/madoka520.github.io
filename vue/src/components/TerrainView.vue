<template>
  <SilverCourtyard v-if="view==='SilverCourtyard'"></SilverCourtyard>

</template>
<script setup lang="ts">

import SilverCourtyard from "@/components/terrain/SilverCourtyard.vue";
const props = defineProps({
  view:{
    default:""
  }
})
</script>
<style scoped lang="scss">

</style>