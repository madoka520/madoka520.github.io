<template>
  <div>
    <div v-if="rows.src">
      <img :src="rows.src" alt="" />
    </div>
    <table class="table">
      <tr v-for="item in tableKeys">
        <td>
          <strong>{{ item }}</strong>
        </td>
        <td>
          <span>{{ rows[item] }}</span>
        </td>
      </tr>
    </table>
    <h4 v-if="rows.say">{{ rows.say }}</h4>

  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

interface IRow {
  [key: string]: string;
}

const props = defineProps({
  rows: {
    default: () => ({}) as IRow,
  },
});

const specialKeys = ["src", "say"];

const listKeys = computed(() => {
  return Object.keys(props.rows);
});

const tableKeys = computed(() => {
  return listKeys.value.filter((item) => !specialKeys.includes(item));
});
</script>
<style scoped lang="scss">
.table {
  border-collapse: collapse;
  margin-top: 0.5em;
}
td {
  padding: 0.5em;
  border: solid 1px #e7d;
}

.introduce-grid {
  display: inline-grid;
  justify-content: center;
  place-items: center;
  padding: 5px;
  border: 1px solid;
}
</style>
