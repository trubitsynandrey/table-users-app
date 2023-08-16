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
  --accent-color: #8cc0de;
  --secondary-color: #f1f0e8;
  --border-color: #f1f0e8;
  --form-color: #d8d9da;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--accent-color);
  background-color: #9e9fa5;
  height: 100vh;
  padding: 3vh;
}
</style>
