import Vue from 'vue'
import Router from 'vue-router'
import dialogBox from '@/components/dialogBox'
import music from '@/components/music'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'dialogBox',
      component: dialogBox
    },
    {
       path:'/music',
       component:music 
    }
  ]
})
