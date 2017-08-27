
import home from './components/home.vue';
import life from './components/life.vue';
import girl from './components/girl.vue';
import find from './components/find.vue';
import follow from './components/follow.vue';
import user from './components/user.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';

const routes = [
  {path: '/home', component: home},
  {path: '/life', component: life},
  {path: '/girl', component: girl},
  {path: '/find', component: find},
  {path: '/follow', component: follow},
  {path: '/user', component: user},
  {path: '/login', component: login},
  {path: '/reg', component: reg},
  {path: '/', redirect: '/home'}
];

export default routes;
