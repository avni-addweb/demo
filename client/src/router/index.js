import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-book',
    name: 'add-book',
    component: () => import(/* webpackChunkName: "addbook" */ '../views/AddBook.vue')
  },
  {
    path: '/:id',
    name: 'book',
    component: () => import(/* webpackChunkName: "book" */ '../views/Book.vue')
  },
  {
    path: '/:id',
    name: 'edit-book',
    component: () => import(/* webpackChunkName: "editbook" */ '../views/EditBook.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
