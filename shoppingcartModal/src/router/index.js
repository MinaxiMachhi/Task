import Vue from 'vue'
import VueRouter from 'vue-router'
import fruits from '@/components/fruits.vue'
import watch from '@/components/watch.vue'
import cube from '@/components/cube.vue'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    // component:
  },
  {
    path: '/fruits',
    name: 'fruits',
    component: fruits
  },
  {
    path: '/watch',
    name: 'watch',
    component: watch
  },
  {
    path: '/cube',
    name: 'cube',
    component: cube
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
