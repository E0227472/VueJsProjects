import Vue from 'vue'
import App from './App.vue'


/* Using react as comparison, main.js is similar to index.js in a react project.
App.vue is similar to app.js (main component), since these are single page frameworks */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
