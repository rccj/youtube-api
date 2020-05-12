import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Collect from '@/components/Collect'
import PlayVideo from '@/components/PlayVideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:product_id?',
      name: 'page',
      component: Page
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/video/:vidoe_id',
      name: 'play-video',
      component: PlayVideo
    }
  ]
})
