<template>
  <button @click="$emit('emitClick')" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style scoped>
.button {
  background: none;
  color: var(--secondary-color);
  border: none;
  padding: 8px 16px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background-color: var(--accent-color);
  border-radius: 8px;
}
</style>
