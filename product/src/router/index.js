import Vue from 'vue'
import VueRouter from 'vue-router'
import product from '@/components/addProduct.vue'
import displayProduct from '@/components/displayProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/product',
    name: 'product',
    component: product,displayProduct,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
