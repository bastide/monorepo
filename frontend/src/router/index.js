import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Countries from '@/views/Countries.vue'
import About from '@/views/About.vue'
import Ajax  from "@/views/Ajax.vue";
import CountryAdd  from "@/views/CountryAdd.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    // Associe des chemins d'accès au composant vue à afficher
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/countries',
      name: 'countries',
      component: Countries
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: Ajax
    },
    {
      path: '/ajoutePays',
      name: 'ajoutePays',
      component: CountryAdd
    },    
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
