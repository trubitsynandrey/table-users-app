<template>
  <div id="app">
    <Table />
  </div>
</template>

<script>
import Table from './modules/Table.vue'

export default {
  name: 'App',
  components: {
    Table
  }
}
</script>

<style>
@import url('./normilize.css');
body {
  margin: 0;
}
#app {
  --accent-color: #8CC0DE;
  --secondary-color: #F1F0E8;
  --border-color: #F1F0E8;
  --form-color: #d8d9da;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--accent-color);
  background-color: #9E9FA5;
  height: 100vh;
  padding: 3vh;
}
</style>
