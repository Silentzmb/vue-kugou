import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import NewSongs from '@/views/NewSongs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewSongs',
      component: NewSongs
    },
    {
		path: '*', redirect: '/'
	}
  ]
})
