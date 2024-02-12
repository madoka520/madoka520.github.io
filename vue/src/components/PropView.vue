<template>
  <my-introduce :rows="rows[view]"></my-introduce>
</template>
<script setup lang="ts">

import MyIntroduce from "@/components/vue_components/MyIntroduce.vue";

const props = defineProps({
  view:{
    default:""
  }
})

const rows = {
  PrayerPeriRadiance:{
    "src":"http://wikil.fl.lovetly.top/lib/exe/fetch.php?w=200&tok=612751&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E9%AD%94%E6%B3%95:%E5%A6%96%E7%B2%BE.png",
    "名称":"妖精的光辉",
    "代码":"prayer_peri_radiance",
    "消耗":"15%",
    "解锁":"装备蔷薇花开弓",
    "使用方法":"放入道具栏",
    "效果":"施法范围内生物扣除200+15%已损失血量的真伤",
    "say":"曾今在某个地方发生了这样一件事，有一位英雄使用了鬼索与妖精，成功的K到了队友的人头"
  },

}
</script>
<style scoped lang="scss">

</style>