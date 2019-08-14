<template>
  <div class="hello">
    <!-- <div class="form-group">
      <label>Name:</label>
      <input type="text"
             class='form-control'
             name='name' />
    </div>
    <div class="form-group">
      <button type="button"
              class='btn btn-primary user-btn'
              name='sumbit'>Submit</button>
    </div> -->
    <div>{{msg}}</div>
    <Computed></Computed>

    <button @click="requestMsg"
            title="I will send a requst and revice a msg">Click Me</button>
    <div ref="successAlert"
         class="alert alert-success">
      <a class="close"
         data-dismiss="alert"
         @click.prevent="closeAlert('successAlert')">&times;</a>
      <strong>成功！</strong>结果是成功的。
    </div>
    <div ref="warningAlert"
         class="alert alert-warning">
      <a class="close"
         data-dismiss="alert"
         @click.prevent="closeAlert('warningAlert')">&times;</a>
      <strong>警告！</strong>结果是有错误的。
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Computed from './parctice/Computed'
import node, { title1 as t1, title2 as t2 } from '../assets/data/node'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    requestMsg () {
      axios.get('nms/console/node_config').then((res) => {
        console.log(res)
        this.msg = res.data
      }).catch(err => {
        console.log(err)
        console.log(t1, t2)
        this.msg = node.allData
      })
    },
    closeAlert (alert) {
      console.log(alert)
      console.log(this.$refs[alert])
    }
  },
  components: {
    Computed
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
.alert {
  font-family: newFontFamily;
}
</style>
