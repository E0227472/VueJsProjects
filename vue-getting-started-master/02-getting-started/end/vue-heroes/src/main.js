import Vue from 'vue';
import App from '@/app';

Vue.config.productionTip = false;


// this component acts to link up the app component with the main index.html 
new Vue({
  render: h => h(App),
}).$mount('#app');
