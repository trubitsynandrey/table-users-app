<script>
import Cell from './cell.vue'
import Row from './row.vue'

export default {
  name: 'Row',
  props: ['tableItem', 'isHeader'],
  components: { Cell, Row },
  data () {
    return {
      showChildren: false
    }
  },
  computed: {
    withChildren () {
      return this.tableItem.students && this.tableItem.students.length > 0
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}

.row > div {
  flex: 1;
}

.row > div:first-child {
  border-right: 1px solid var(--border-color);
}

.row {
  border-top: 1px solid var(--border-color);
}

.not_show {
  display: none;
}

.show {
  display: block;
}
</style>

<template>
  <div>
    <div class="row" @click="showChildren = !showChildren">
      <Cell :text="tableItem.name" :withChildren="withChildren" :level="tableItem.level" />
      <Cell :text="tableItem.phone" />
    </div>
    <Row
      :class="{ not_show: !showChildren, show: showChildren }"
      v-for="student of tableItem.students"
      :key="student.id"
      :tableItem="student"
    />
  </div>
</template>
