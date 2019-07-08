import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Home from '@/pages/home.vue'
import Artists from '@/pages/artists.vue'
import Listcate from '@/pages/listcate.vue'
import Search from '@/pages/search.vue'
import Ucenter from '@/pages/ucenter.vue'
import King from '@/pages/musiclist/king.vue'
import Hot from '@/pages/musiclist/hot.vue'
import Newsong from '@/pages/musiclist/new_songlist.vue'
import Morelist from '@/pages/morelist'
import Musicplay from '@/pages/musicplay'
import ArtistsDetails from '@/pages/artistsDetails/artistsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/musicplay',
      name: 'musicplay',
      component: Musicplay
    },
    {
      path: '/',
      redirect: '/home',
      name: 'index',
      component: Index,
      children:[
        {
          path: 'home',
          redirect: 'home/hot',
          name: 'home',
          component: Home,
          children:[
            {
              path: 'king',
              name: 'king',
              component: King
            },
            {
              path: 'hot',
              name: 'hot',
              component: Hot
            },
            {
              path: 'newsong',
              name: 'newsong',
              component: Newsong
            },
          ]
        },
        {
          path: 'artists',
          name: 'artists',
          component: Artists
        },
        {
          path: 'listcate',
          name: 'listcate',
          component: Listcate
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path: 'ucenter',
          name: 'ucenter',
          component: Ucenter
        },
        {
          path: 'morelist',
          name: 'morelist',
          component: Morelist
        },
        {
          path:"artistsDetails",
          name:"ArtistsDetails",
          component: ArtistsDetails
        }
      ]
    }
  ]
})
