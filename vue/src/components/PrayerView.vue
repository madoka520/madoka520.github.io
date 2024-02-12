<template>
  <my-introduce :rows="rows[view]"></my-introduce>
</template>
<script setup lang="ts">
import MyIntroduce from "@/components/vue_components/MyIntroduce.vue";

const props = defineProps({
  view: {
    default: ""
  }
})
const rows = {
  PrayerCure: {
    "src": "http://wikil.fl.lovetly.top/lib/exe/fetch.php?w=200&tok=fc1c2b&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E9%AD%94%E6%B3%95:%E6%95%91%E6%B5%8E%E7%9A%84%E7%A5%88%E6%84%BF.png",
    "名称": "救济的祈愿",
    "代码": "prayer_cure",
    "消耗": "80",
    "解锁": "装备蔷薇花开弓",
    "使用方法": "制作该祈愿后右键地面出现圈圈，然后左键施法",
    "效果":"目标最大生命值的1%加目标最大生命值减目标当前生命值的1%加祈愿值上限的1%"
  },
  PrayerPity:{
    "src":"http://wikil.fl.lovetly.top/lib/exe/fetch.php?w=64&h=64&t=1706270408&tok=5c9b61&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E9%AD%94%E6%B3%95:%E5%9C%86%E7%A5%9E%E7%9A%84%E5%9E%82%E6%80%9C.png",
    "名称":"圆神的垂怜",
    "代码":"prayer_pity",
    "消耗":"10",
    "解锁":"装备蔷薇花开弓",
    "使用方法":"制作该祈愿后右键地面出现圈圈，然后左键施法",
    "效果":"复活区域内所有队友，恢复50血量"
  },

}
</script>
<style scoped lang="scss">

</style>