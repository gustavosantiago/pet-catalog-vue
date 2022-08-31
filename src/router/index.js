import { createRouter, createWebHistory } from 'vue-router'
import PetList from '@/views/PetList.vue'
import PetEdit from '@/views/PetEdit.vue'

const routes = [
  { path: '/', name: 'home', component: PetList },
  { path: '/pets/:id/edit', name: 'pet-edit', component: PetEdit }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router