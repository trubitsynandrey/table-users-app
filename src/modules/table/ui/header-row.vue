<template>
  <div class="row">
    <cell :text="tableItem.name" @clickCell="handleRowClick(tableItem.name)" />
    <cell :text="tableItem.phone" @clickCell="handleRowClick(tableItem.phone)" />
  </div>
</template>

<script>
import Cell from './cell.vue'
import Row from './row.vue'

export default {
  name: 'HeaderRow',
  props: ['tableItem'],
  components: { Cell, Row },
  methods: {
    handleRowClick(key) {
      this.$emit('sort', key)
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
  cursor: pointer;
}

.row > div:first-child {
  border-right: 1px solid var(--border-color);
}

.row {
  border-top: 1px solid var(--border-color);
}
</style>
