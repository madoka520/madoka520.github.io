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
const rows ={
  wilful:{
    "名称": "任性",
    "代码":"clara_doll_willful",
    "获取方式": "暂无",
    "作用": "集打怪砍树挖矿的究极无敌工具人",
    "say":"她怒火中烧地走着，喋喋不休：“还在送葬？我不是已经哭完丧了吗？一刻都不想多呆。”这个孩子想要成为特殊的存在。"
  }
}
</script>

<style scoped lang="scss">

</style>