import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import Homee from '../aa'
//  console.log(Homee.a,Homee.b,);
//  Homee.c();
// 1、
// 直接单个暴露按需引入
// import { addNum,reduceNum } from './aa'
// console.log(addNum(),reduceNum());


// 直接单个暴露的引入方式
import * as types from './aa'
 console.log(types.addNum())
// Vue.use(VueRouter)

// 2、
// 工厂模式暴露的引入方式
 import { eventObj } from './bb'
// console.log(eventObj);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
