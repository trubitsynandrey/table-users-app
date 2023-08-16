<template>
  <div id="app">
    <table-component />
  </div>
</template>

<script>
import TableComponent from './modules/table-component.vue'

export default {
  name: 'App',
  components: {
    TableComponent
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
  color: var(--accent-color);
  background-color: #9e9fa5;
  height: 100vh;
  padding: 3vh;
}
</style>
