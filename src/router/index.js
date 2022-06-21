import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },      
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, SavedPosition) {
    if (to.hash) {
      const el = window.location.href.split("#")[1];
      if (el.length) {
        const top = document.getElementById(el).getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({ behavior: "smooth", top: top});
      }
    } else if (SavedPosition) {
      return SavedPosition;
    } else {
      document.getElementById("app").scrollIntoView({ behavior: "smooth" });
    }
  },
})
export default router
