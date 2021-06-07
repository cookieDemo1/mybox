import Vue from 'vue'
import './assets/css/normalize.css'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'

import * as echarts from 'echarts'
import 'echarts-liquidfill'

Vue.prototype.$echarts = echarts

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

