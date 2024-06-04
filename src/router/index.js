import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        description: 'This is the home page'
      }
    },
    {
      path: '/about',
      name: 'about',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About',
        description: 'This is the about page'
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue'),
      meta: {
        title: 'Help',
        description: 'This is the help page'
      }
    },
    
    {
      path: '/repopage',
      name: 'repopage',
      component: () => import('@/components/RepoPageList.vue'),
      meta: {
        title: 'repo page',
        description: 'This is the repo page with a list of repos'
      }
    },
        {
          path: '/repopage/:name',
          name: 'RepoSinglePage',
          component: () => import('@/components/RepoSinglePage.vue'),
          meta: {
            title: 'Repo single page',
            description: 'This is the page with the single repo'
      }
    },   
  {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router

