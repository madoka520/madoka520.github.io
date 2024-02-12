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
  CauseEffect: {
    "src":"http://wikil.fl.lovetly.top/lib/exe/fetch.php?w=200&tok=b23562&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E9%81%93%E5%85%B7:%E5%9B%A0%E6%9E%9C.png",
    "名称": "因果",
    "代码":"cause_effect",
    "获取方式": "Boss掉落",
    "作用": "相关物品合成所需素材"
  },
  MadokaPrayerMeteor:{
    "src":"http://wikil.fl.lovetly.top/lib/exe/fetch.php?w=200&tok=0e06a2&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E9%81%93%E5%85%B7:l%E6%B5%81%E6%98%9F.png",
    "名称": "流星",
    "代码":"madoka_prayer_meteor",
    "获取方式": "击杀生物",
    "作用": "可用流星放入灵魂宝石回复祈愿值，作为一些专属的合成材料",
  },
  prayer_feather:{
    "src":"http://wiki.flapi.cn/lib/exe/fetch.php?t=1707327712&w=64&h=64&tok=cf483b&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E7%A5%88%E6%84%BF%E4%B9%8B%E7%BE%BD.png",
    "名称": "祈愿之羽",
    "代码":"item_prayer_feather",
    "合成配方": "100祈愿值、3因果、100流星",
    "作用": "升级武器"

}
}
</script>

<style scoped lang="scss">

</style>