
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Maps from '@/components/Maps'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps
    },
    // {
    //     path: '/',
    //     name: 'app',
    //     component: App
    // }
  ],
  mode: 'history'
});


