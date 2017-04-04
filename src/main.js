import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'

import App from './App'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/js/bootstrap'
//Vue.config.productionTip = false
//Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
