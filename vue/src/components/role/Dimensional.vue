<template>
  <a-table :pagination="false" local-storage-key="dimensional" :columns="Table.columns" :data-source="Table.dataSource"></a-table>
  <div>鹿目圆出生自带蔷薇花开弓，灵魂宝石，小圆具有祈愿值机制，目前有一个回血技能，持续祈愿中

    与晓美焰有联动，小圆靠近晓美焰时 双方获得san回复，小圆获得祈愿值回复</div>
</template>
<script setup lang="ts">

import {reactive} from "vue";

const Table = (()=> {
  const s = reactive({
    columns:[
      {
        title:"属性名称",
        dataIndex:"attribute"
      },
      {
        title: "基础属性",
        dataIndex: "baseAttribute"
      }
    ],
    dataSource:[
      {
        id:1,
        attribute:"饥饿值",
        baseAttribute:"100"
      },
      {
        id:2,
        attribute: "精神值",
        baseAttribute: "100"
      },
      {
        id:3,
        attribute: "精神回复",
        baseAttribute: "0"
      },
      {
        id:4,
        attribute: "生命值",
        baseAttribute: "75"
      },
      {
        id: 5,
        attribute: "攻击系数",
        baseAttribute: "1"
      }
    ]
  })
  return s
})()

</script>
<style scoped lang="scss">

</style>