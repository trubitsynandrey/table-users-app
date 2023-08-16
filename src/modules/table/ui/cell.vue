<template>
  <div class="cell" @click="$emit('clickCell')">
    <p :style="{left: `${level * 10 + 12}px`}">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: ['text', 'level'],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.cell {
  display: flex;
  gap: 4px;
  padding: 8px;
  text-align: left;
}

.cell > p {
  position: relative;
}

</style>
