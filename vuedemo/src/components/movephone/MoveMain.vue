<template>
  <div>
    <router-view></router-view>
    <my-tabbar v-model="selected">
      <my-tabitem id="外卖">
        <router-link to='/movemain/first'>外卖</router-link>
      </my-tabitem>
      <my-tabitem id="订单">
        <router-link to='/movemain/second'>订单</router-link>
      </my-tabitem>
      <my-tabitem id="发现">
        <router-link to='/movemain/third'>发现</router-link>
      </my-tabitem>
      <my-tabitem id="我的">
        <router-link to='/movemain/fourth'>我的</router-link>
      </my-tabitem>
    </my-tabbar>
  </div>
</template>
<script>

export default {
  name: 'movemain',
  data () {
    return {
      selected: '外卖'
    }
  }
}
</script>
<style lang="scss">
</style>
