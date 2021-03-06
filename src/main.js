// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import qs from 'qs'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'lib-flexible'
Vue.use(Mint)
Vue.prototype.$qs = qs
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
