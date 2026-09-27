import fengLei from '../components/fengLei.vue'
import paiHang from '../components/paiHang.vue'
import wangBen from '../components/wangBen.vue'
import loginView from '../views/loginView.vue'
import registerView from '../views/registerView.vue'
import bookContent from '../views/bookContent.vue'
import directoryView from '@/views/directoryView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/indexcontent',
    },
    {
      path: '/personview',
      name: 'personview',
      component: () => import('../views/personView.vue'),
      children: [
        {
          path: 'pList',
          name: 'pList',
          component: () => import('../components/pList.vue'),
        },
        {
          path: 'pf',
          name: 'pf',
          component: () => import('../components/pF.vue'),
        },
        {
          path: 'pb',
          name: 'pb',
          component: () => import('../components/pB.vue'),
        },
        {
          path: 'pp',
          name: 'pp',
          component: () => import('../components/pP.vue'),
        },
        {
          path: 'pz',
          name: 'pz',
          component: () => import('../components/pZ.vue'),
        },
      ],
    },

    {
      path: '/indexcontent',
      name: 'indexContent',
      component: () => import('../views/indexContent.vue'),
    },
    {
      path: '/fenglei',
      name: 'fenglei',
      component: fengLei,
    },
    {
      path: '/paiHang',
      name: 'paiHang',
      component: paiHang,
    },
    {
      path: '/wanben',
      name: 'wanben',
      component: wangBen,
    },
    {
      path: '/writer',
      name: 'writer',
      component: () => import('../views/WriterView.vue'),
      children: [
        {
          path: 'book-manager',
          name: 'book-manager',
          component: () => import('../views/writer/bookManage.vue'),
        },
        {
          path: 'book-data',
          name: 'book-data',
          component: () => import('@/views/writer/bookData.vue'),
        },
        {
          path: 'comment-manager',
          name: 'comment-manager',
          component: () => import('@/views/writer/commentManager.vue'),
        },
        {
          path: 'fans-manager',
          name: 'fans-manager',
          component: () => import('@/views/writer/fansManager.vue'),
        },
        {
          path: 'upbook',
          name: 'upbook',
          component: () => import('@/views/writer/upBook.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
    },
    {
      path: '/register',
      name: 'register',
      component: registerView,
    },
    {
      path: '/bookcontent',
      name: 'bookcontent',
      component: bookContent,
    },
    {
      path: '/directory',
      name: 'directory',
      component: directoryView,
    },
    {
      path: '/read',
      name: 'readView',
      component: import('../views/readView.vue'),
    },
  ],
})

export default router
