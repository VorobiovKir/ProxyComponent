import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { dynamicEvents } from './directives/dynamicEvents';

Vue.config.productionTip = false

Vue.directive('dynamicEvents', dynamicEvents);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
