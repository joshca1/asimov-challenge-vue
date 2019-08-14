import Vue from 'vue'
import App from './App.vue'
import buefy from './plugins/buefy'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
