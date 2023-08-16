<template>
  <div class="cell" @click="$emit('clickCell')">
    <p :style="{left: `${level * 14}px`}" :class="{with_children: withChildren}">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: ['text', 'level', 'withChildren'],
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

.with_children::before {
  content: '+';
}

</style>
