import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/dashboard1',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      breadcrumb: "Home"
    },
    children: [
      {path: '',
      name: 'welcome-page',
        component: () => import('../views/WelcomePage.vue'),
    },
      {path: 'dashboard1',
      name: 'dashboard1',
        component: () => import('../views/Dashboard.vue'),
        meta: {
          breadcrumb: "Inflation"
        }
    },
    {path: 'dashboard2',
    name: 'dashboard2',
        component: () => import('../views/Dashboard.vue'),
        meta: {
          breadcrumb: "Inflation-Single"
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
