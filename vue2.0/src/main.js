import Vue from 'vue'
import Layout from './components/layout';

import axios from 'axios'

Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(Layout);
new Vue({
  el:"#app",
  render: h => h(Layout),
})
