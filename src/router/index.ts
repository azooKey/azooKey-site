import type { RouteRecordRaw, RouterScrollBehavior } from 'vue-router'

// Keep route paths and component mappings unchanged
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/PrivacyPolicy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/TermsOfService',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfService.vue')
  },
  {
    path: '/CustomTabs',
    name: 'CustomTabs',
    component: () => import('../views/CustomTabs.vue')
  },
  {
    path: '/macOS',
    name: 'Desktop',
    component: () => import('../views/Desktop.vue')
  },
  {
    path: '/OpenSource',
    name: 'OpenSource',
    component: () => import('../views/OpenSource.vue')
  },
  {
    path: '/QA',
    name: 'QA',
    component: () => import('../views/QA.vue')
  }
]

export const scrollBehavior: RouterScrollBehavior = () => ({ top: 0 })
