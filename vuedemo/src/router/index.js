// import ** from ** ; from es6
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MoveMain from '../components/movephone/MoveMain'
import MoveRouter from '../components/movephone/router'
Vue.use(Router)

export default new Router({
  routes: [
    // This is my test component
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      redirect: '/movemain'
    },
    {
      path: '/movemain',
      name: 'movemain',
      component: MoveMain,
      children: MoveRouter.routes
    }
  ]
})
