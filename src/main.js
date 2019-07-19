import Vue from 'vue'
import App from './App.vue'
//引入路由器
import router from './router'
// import store from './vuex/store'
import 'lib-flexible/flexible' 

import Footer from './components/Footer/Footer.vue'
import Header from './components/Header/Header.vue'

Vue.config.productionTip = false

//注册全局组件
Vue.component('Footer',Footer);
Vue.component('Header',Header)

new Vue({
  el:'#app',
  render: h => h(App), //<App />
  router//配置路由器
  

})
