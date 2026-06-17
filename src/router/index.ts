import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio.vue'
import AiGallery from '@/views/AiGallery.vue'
import WorkDetail from '@/views/WorkDetail.vue'
import AiDetail from '@/views/AiDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/ai-gallery', name: 'AiGallery', component: AiGallery },
  { path: '/work/:id', name: 'WorkDetail', component: WorkDetail },
  { path: '/ai/:id', name: 'AiDetail', component: AiDetail }
]

const router = createRouter({
  history: createWebHistory('/zuopinguanlixitongWZ/'),
  routes
})

export default router
