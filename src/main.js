// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'
import axios from 'axios'
import store from './vuex'
import 'lib-flexible'
import 'mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/css/style.css'

Vue.use(mint)

Vue.config.productionTip = false
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
