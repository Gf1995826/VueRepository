<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@font-face {
  font-family: newFontFamily;
  src: url("./assets/font-family/ownFont.ttf");
}
#app {
  font-family: sans-serif, "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
