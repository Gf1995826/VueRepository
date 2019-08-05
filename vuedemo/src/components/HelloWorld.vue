<template>
  <div class="hello">
    <div class="form-group">
      <label>Name:</label>
      <input type="text"
             class='form-control'
             name='name' />
    </div>
    <div class="form-group">
      <button type="button"
              class='btn btn-primary user-btn'
              name='sumbit'>Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-control {
  .user-btn {
    outline-color: none;
    &:active,
    &:hover,
    &::after {
      outline: none;
      box-shadow: none;
    }
  }
}
</style>
