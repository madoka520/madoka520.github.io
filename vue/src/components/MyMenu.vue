<!--这是菜单页面-->
<template>
  <div class="c__menu">
    <div class="tree">
      <a-collapse v-model:activeKey="init.activeKey" ghost style="width: 200px; background: transparent">
        <a-collapse-panel v-for="(item, index) in init.menu" style="text-align: center" :key="item.key" :header="item.name">
          <div v-for="(it, index) in item.child">
            <simple-button style="width: 180px; margin-bottom: 5px" :title="it.name" @click="init.showModal(it, item.key)"> </simple-button>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <div class="content">
<!--      下一个页面-->
      <public-view v-if="init.open" :view-key="init.currentKey" :view="init.currentView"></public-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import PublicView from "@/components/PublicView.vue";
import SimpleButton from "@/components/vue_components/button/SimpleButton.vue";

const handleOk = (e: MouseEvent) => {
  console.log(e);
  init.open = false;
};
const init = (() => {
  const showModal = async (it, key) => {
    s.currentView = it.viewName;
    s.currentName = it.name;
    s.currentKey = key;
    s.open = true;
  };
  const s = reactive({
    //菜单填这里
    menu: [
      {
        key: "role",
        name: "人物属性",
        child: [
          //这是子列表
          {
            viewName: "Dimensional", //这是英文翻译
            name: "三维", //这是中文名
          },
          {
            viewName: "MadokaPrayer",
            name: "祈愿值",
          },
        ],
      },
      {
        key: "equip",
        name: "装备",
        child: [
          {
            viewName: "SoulGem",
            name: "灵魂宝石",
          },
          {
            viewName: "RoseBow",
            name: "蔷薇花开弓",
          },
          {
            viewName: "MadokaSchoolDress",
            name: "见泷原校服",
          },
        ],
      },
      {
        key: "prop",
        name: "道具",
        child: [
          {
            viewName: "PrayerPeriRadiance",
            name: "妖精的光辉",
          },
        ],
      },
      {
        key: "prayer",
        name: "祈愿",
        child: [
          {
            viewName: "PrayerCure",
            name: "救济的祈愿",
          },
          {
            viewName: "PrayerPity",
            name: "圆神的垂怜",
          },

        ],
      },
      {
        key: "boss",
        name: "Boss",
        child: [
          {
            viewName: "NutcrackerWitch",
            name: "胡桃夹子魔女",
          },
        ],
      },
      {
        key: "terrain",
        name: "地形",
        child: [
          {
            viewName: "SilverCourtyard",
            name: "银庭",
          },
        ],
      },
      {
        key: "build",
        name: "建筑",
        child: [
          {
            viewName: "none",
            name: "暂无",
          },
        ],
      },
      {
        key:"summons",
        name:"召唤物",
        child:[
          {
            viewName: "wilful",
            name:"任性"
          }
        ]

      },
      {
        key:"material",
        name:"素材",
        child:[
          {
            viewName: "MadokaPrayerMeteor",
            name: "流星",
          },
          {
            viewName: "CauseEffect",
            name: "因果",
          },
          {
            viewName: "prayer_feather",
            name: "祈愿之羽",

          }
        ]
      }
    ],

    currentKey: "",
    currentView: "",
    currentName: "",
    activeKey: ["role"],
    open: false,
    showModal,
  });
  return s;
})();
</script>
<style scoped lang="scss">
.c__menu {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 14px;
  margin-top: 30px;
  overflow: hidden;
}
.tree {
  width: 230px;
  overflow-x: hidden;
  overflow-y: auto;
}
.content {
  padding: 30px;
  --angle: 0deg;
  border-bottom: 1px solid;
  border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
  animation: 3s rotate9234 linear infinite;
  overflow-x: hidden;
  overflow-y: auto;
}

@keyframes rotate9234 {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
</style>
