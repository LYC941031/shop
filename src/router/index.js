import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import HomePage from '@/components/home/homePage/HomePage'
import Classify from '@/components/home/classify/Classify'
import ShopCart from '@/components/home/shopCart/ShopCart'
import Mine from '@/components/home/mine/Mine'
import Register from '@/components/login/register/Register'
import Logins from '@/components/login/logins/Logins'
import Details from '@/components/details/Details'
import Top from '@/components/details/top/Top'
import Evaluate from '@/components/details/evaluate/Evaluate'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/homePage'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'homePage',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: 'classify',
          name: 'Classify',
          component: Classify,
        },
        {
          path: 'shopCart',
          name: 'ShopCart',
          component: ShopCart,
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine,
        },
        
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/logins',
      name: 'Logins',
      component: Logins
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details,
      children: [
        {
          path: 'top',
          name: 'Top',
          component: Top,
        },
        {
          path: 'evaluate',
          name: 'Evaluate',
          component: Evaluate,
        }
      ]
    }  
  ]
})
