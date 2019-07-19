//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由
import routes from './routes'

//
Vue.use(VueRouter)

export default new VueRouter({
    //配置所有路由
    routes
})