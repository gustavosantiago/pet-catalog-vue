import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: ()=> import('@/views/PetList.vue') },
  { path: '/pets/:id/edit', name: 'pet-edit', component: ()=> import('@/views/PetEdit.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router