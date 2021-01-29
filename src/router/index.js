import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard1',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      breadcrumb: "Home"
    },
    children: [
      {path: 'dashboard1',
        component: () => import('../views/Dashboard.vue'),
        meta: {
          breadcrumb: "Dashboard_One"
        }
    },
    {path: 'dashboard2',
        component: () => import('../views/Dashboard.vue'),
        meta: {
          breadcrumb: "Dashboard_Two"
        }
    }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
