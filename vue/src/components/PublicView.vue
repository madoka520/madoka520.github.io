<template>
<!--  角色-->
  <role-view v-if="viewKey==='role'" :view="view"></role-view>
<!--  装备-->
  <equip-view v-else-if="viewKey==='equip'" :view="view"></equip-view>
<!--  祈愿-->
  <prayer-view v-else-if="viewKey==='prayer'" :view="view"></prayer-view>
<!--  道具-->
  <prop-view v-else-if="viewKey==='prop'" :view="view"></prop-view>
<!--  Boss-->
  <boss-view v-else-if="viewKey==='boss'" :view="view"></boss-view>
<!--  地形-->
  <terrain-view v-else-if="viewKey==='terrain'" :view="view"></terrain-view>
<!--  建筑-->
  <build-view v-else-if="viewKey==='build'" :view="view"></build-view>
<!--  召唤物-->
  <clara-doll-view v-else-if="viewKey==='summons'" :view="view"></clara-doll-view>
<!--  素材-->
  <material-view v-else-if="viewKey==='material'" :view="view"></material-view>

</template>
<script setup lang="ts">


import RoleView from "@/components/RoleView.vue";
import BossView from "@/components/BossView.vue";
import TerrainView from "@/components/TerrainView.vue";
import BuildView from "@/components/BuildView.vue";
import EquipView from "@/components/EquipView.vue";
import PropView from "@/components/PropView.vue";
import PrayerView from "@/components/PrayerView.vue";
import ClaraDollView from "@/components/ClaraDollView.vue";
import MaterialView from "@/components/MaterialView.vue";

const props = defineProps({
  view:{
    default:""
  },
  viewKey:{
    default:""
  }
})

</script>
<style scoped lang="scss">

</style>