<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: true
    }
  }
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
