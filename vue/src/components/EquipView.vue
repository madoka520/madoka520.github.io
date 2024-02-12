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
  MadokaSchoolDress: {
    "src": "http://wikil.fl.lovetly.top/lib/exe/fetch.php?w=200&tok=79b07e&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E8%A3%85%E5%A4%87:%E6%A0%A1%E6%9C%8D.png",
    "名称": "见泷原校服",
    "代码": "madoka_school_dress",
    "配方": "牛毛x20、蜘蛛网x50、鳞片x2、流星x100",
    "say": "校服自带14个格子而且可以回鲜。"
  },
  RoseBow: {
    "src": "http://wikil.fl.lovetly.top/lib/exe/fetch.php?t=1706269777&w=363&h=146&tok=ee7753&media=02%E8%81%94%E6%9C%BAmod%E5%8C%BA:%E9%B9%BF%E7%9B%AE%E5%9C%86%E9%A6%99:%E8%A3%85%E5%A4%87:%E8%94%B7%E8%96%87%E8%8A%B1%E5%BC%80%E5%BC%93.png",
    "名称": "蔷薇花开弓",
    "代码": "madoka_rose_bow",
    "获取途径": "出生自带",
    "攻击力": "伤害40【默认，可配置】",
    "特殊": "可以拾取掉在地上的流星",
    "升级功能":"武器添加祈愿之羽升一级，上限15级，每级提供4攻击、1%移速、1/60祈愿回复、祈愿上限12",
    "say": ""
  },
  SoulGem: {
    "名称": "灵魂宝石",
    "代码": "madoka_soul_gem",
    "获取途径": "出生自带",
    "作用": "装备后提供光照和20%移动速度与8/min的san值回复",
    "升级功能":"灵魂宝石添加祈愿之羽升一级，上限15级，每级提供1%移速、1/60祈愿回复、祈愿上限12",
    "say": "这是成为魔法少女的证明！"
  }
}

</script>
<style scoped lang="scss">

</style>