import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior
  },
  () => {}
)
