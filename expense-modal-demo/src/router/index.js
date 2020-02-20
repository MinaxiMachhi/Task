import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Paginate from 'vuejs-paginate'
Vue.component('paginate', Paginate)

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
/*   {
    path: '/',
    name: 'Home',
    component: Home
  },
 */]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
