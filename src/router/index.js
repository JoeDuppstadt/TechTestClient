import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import viewrecord from '@/components/viewrecord'
import addrecord from '@/components/addrecord'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/viewRecord/:id',
      name: 'viewRecord',
      component: addrecord
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/CreateNewRecord',
      name: 'CreateNewRecord',
      component: addrecord
    },

  ]
})
