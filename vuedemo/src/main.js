// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import all components from mint-ui
import 'mint-ui/lib/style.css'
import { Switch, Header, Button, Tabbar, TabItem } from 'mint-ui'
Vue.component('my-header', Header)
Vue.component('my-swith', Switch)
Vue.component('my-button', Button)
Vue.component('my-tabbar', Tabbar)
Vue.component('my-tabitem', TabItem)

Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://localhost:8888/'
Vue.use(VueAxios, axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
