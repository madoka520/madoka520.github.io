<template>
  <dimensional v-if="view==='Dimensional'"></dimensional> <!--三维-->
  <MadokaPrayer v-else-if="view==='MadokaPrayer'"></MadokaPrayer> <!--祈愿-->
</template>
<script setup lang="ts">

import MadokaPrayer from "@/components/role/MadokaPrayer.vue";
import Dimensional from "@/components/role/Dimensional.vue";
const props = defineProps({
  view:{
    default:""
  }
})
</script>
<style scoped lang="scss">

</style>