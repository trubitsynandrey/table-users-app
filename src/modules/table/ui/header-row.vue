
<script>
import Row from './row.vue'
import Cell from './cell.vue'

export default {
  name: 'HeaderRow',
  props: ['tableItem'],
  components: { Cell, Row },
  methods: {
    handleRowClick (key) {
      this.$emit('sort', key)
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
}

.row>div {
  flex: 1;
  cursor: pointer;
}

.row>div:first-child {
  border-right: 1px solid var(--border-color);
}

.row {
  border-top: 1px solid var(--border-color);
}
</style>

<template>
    <div class="row">
      <Cell :text="tableItem.name" @clickCell="handleRowClick(tableItem.name)" />
      <Cell :text="tableItem.phone" @clickCell="handleRowClick(tableItem.phone)" />
    </div>
</template>
