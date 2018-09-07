// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFusionCharts from 'vue-fusioncharts'
// import FusionCharts modules and resolve dependency
import FusionCharts from 'fusioncharts/core'
import Pie2D from 'fusioncharts/viz/pie2d'
import Column2D from 'fusioncharts/viz/column2d'

Vue.config.productionTip = false
// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Pie2D, Column2D)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
