import Home from './views/Home.vue'
import Information from './views/Information.vue'
import Summary from './views/Summary.vue'
import Error from './views/Error.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/information', component: Information, meta: { title: 'Information' }},
  { path: '/summary', component: Summary, meta: { title: 'Summary' }},
  { path: '/:pathMatch(.*)*', component: Error, meta: { title: 'Page not found' }},
]
