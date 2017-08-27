import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
Vue.use(VueRouter);
Vue.prototype.$http = axios;//绑定到原型

import './assets/js/jquery-1.7.2';//全局引入


import routes from './routes.config';
//路由实例
const router = new VueRouter({
  routes: routes,
  mode: 'history' //默认hash  修改为history
});


//引入状态管理
import store from './store/index';

//导入animate.css
import 'animate.css';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
