//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'

import Setting from '../components/Setting.vue'
import About from '../components/About.vue'

//路由懒加载
const Home = () => import('../components/Home.vue')
const News = () => import('../components/News.vue')
const Message = () => import('../components/Message.vue')

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path: '',
    //重定向
    redirect: "/home",
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect:'news',
        component:News
      },
      {
        //path不需要加‘/’
        path: 'news',
        component:News
      },
      {
        path: 'message',
        component:Message
      }
    ]
  },
  {
    path: '/setting',
    component: Setting,
    meta:{
      title: '设置'
    },
  },
  {
    path: '/about',
    component: About,
    meta:{
      title: '关于'
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      console.log('About beforeEnter')
      //next必须调用
      next()
    }
  },
  {
    path: '/user/:userId',
    //路由懒加载
    component: () => import('../components/User.vue'),
    meta:{
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: () => import('../components/Profile.vue'),
    meta:{
      title: '档案'
    },
  }
    
]

const router = new VueRouter({
  //配置路由和组件之间的映射关系,注意名字一定是routes
  routes,
  //默认是使用hash模式
  mode: 'history',
  //修改class名字
  linkActiveClass: 'active'
})

//路由跳转之前回调(全局守卫函数)
router.beforeEach((to,from,next)=>{
  // console.log('beforeEach')
  // console.log('from:'+from.fullPath)
  // console.log('to:'+to.fullPath)
  document.title =to.matched[0].meta.title
  //next必须调用
  next()
})

//路由跳转后回调(全局守卫函数)
router.afterEach((to,from)=>{
  //console.log('afterEach')
})

//3.将router对象传入到Vue实例
export default router
