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
        path: ':articulo',
        name: 'Articulo',
        component: () =>
          import(/* webpackChunkName: "Articulo" */ '../views/Articulo.vue')
      }
    ]
  },
  {
    path: '/home',
    redirect: { name: 'Root' }
  },
  {
    path: '/inicio',
    redirect: { name: 'Root' }
  },
  {
    path: '/portada',
    redirect: { name: 'Root' }
  },
  {
    path: '/administrador',
    name: 'Administrador',
    component: () =>
      import(
        /* webpackChunkName: "Administrador" */ '../views/Administrador.vue'
      ),
    children: [
      {
        path: '/administrador/simple',
        name: 'AdministradorSimple',
        component: () =>
          import(
            /* webpackChunkName: "AdministradorSimple" */ '../views/AdministradorSimple.vue'
          )
      },
      {
        path: '/administrador/avanzado',
        name: 'AdministradorAvanzado',
        component: () =>
          import(
            /* webpackChunkName: "AdministradorAvanzado" */ '../views/AdministradorAvanzado.vue'
          )
      }
    ]
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
