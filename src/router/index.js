import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: () =>
      import(/* webpackChunkName: "Inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    redirect: '/',
    component: () =>
      import(/* webpackChunkName: "Inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/sobremi',
    name: 'SobreMi',
    component: () =>
      import(/* webpackChunkName: "SobreMi" */ '../views/SobreMi.vue'),
    alias: ['/acerca']
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () =>
      import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue'),
    alias: ['/contactame']
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "Post" */ '../views/Post.vue'),
    children: [
      {
        path: ':Articulo',
        name: 'Articulo',
        component: () =>
          import(/* webpackChunkName: "Articulo" */ '../views/Articulo.vue')
      }
    ]
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/inicio',
    redirect: '/'
  },
  {
    path: '/portada',
    redirect: '/'
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
