import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layout/home'),
    children: [
      {
        path: '',
        redirect: 'deviceOverview'
      },
      {
        path: 'deviceOverview',
        component: () => import('_views/deviceOverview')
      },
      {
        path: 'deviceManage',
        component: () => import('_views/deviceManage')
      },
      {
        path: 'policeManage',
        component: () => import('_views/policeManage')
      },
      {
        path: 'authManage',
        component: () => import('_views/authManage')
      },
      {
        path: 'operationLog',
        component: () => import('_views/operationLog')
      },
      {
        path: 'systemLog',
        component: () => import('_views/systemLog')
      },
      {
        path: 'firmwareUpdate',
        component: () => import('_views/firmwareUpdate')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('../layout/login')
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, form, next) => {
  const token = sessionStorage.getItem('token')

  // 除了/login路径，其他路径都需要校验
  if(to.path !== '/login'){
    if(token){
      next()
    }else{
      router.push('/login')
    }
  }

  next()
})

export default  router

