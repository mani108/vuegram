import Vue from 'vue';
import VueDragscroll from 'vue-dragscroll';
import App from './App.vue';


Vue.use(VueDragscroll);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
