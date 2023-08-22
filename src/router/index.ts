import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Acceuil",
    component: () => import("@/views/AcceuilView.vue"),
  },
  {
    path: "/about",
    name: "about",
    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/vehicules/reservation",
    name: "reservation",
    component: () =>  import(/* webpackChunkName: "about" */ "../views/ResevationViews.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
