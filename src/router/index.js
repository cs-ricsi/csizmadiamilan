import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '', overflowHidden: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () =>
      import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    meta: { title: 'Contact' }
  },
  {
    path: '/photography/automotive',
    name: 'Automotive',
    component: () =>
      import(
        /* webpackChunkName: "automotive" */ '../views/photographyViews/Automotive.vue'
      ),
    meta: { title: 'Automotive', subMenuOf: 'Photography' }
  },
  {
    path: '/photography/portrait-lifestyle',
    name: 'Portrait/Lifestyle',
    component: () =>
      import(
        /* webpackChunkName: "portrait-lifestyle" */ '../views/photographyViews/Portrait.vue'
      ),
    meta: { title: 'Portrait/Lifestyle', subMenuOf: 'Photography' }
  },
  {
    path: '/photography/sports',
    name: 'Sports',
    component: () =>
      import(
        /* webpackChunkName: "sports" */ '../views/photographyViews/Sports.vue'
      ),
    meta: { title: 'Sports', subMenuOf: 'Photography' }
  },
  {
    path: '/photography/food-catering',
    name: 'Food',
    component: () =>
      import(
        /* webpackChunkName: "sports" */ '../views/photographyViews/Food.vue'
      ),
    meta: { title: 'Food/Catering', subMenuOf: 'Photography' }
  }
  // {
  //   path: '/videography',
  //   name: 'Videography',
  //   component: () =>
  //     import(/* webpackChunkName: "videography" */ '../views/Videography.vue'),
  //   meta: { title: 'Videography' }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  duplicateNavigationPolicy: 'ignore',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
