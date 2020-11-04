import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:username',
    name: 'User',
    component: () => import("../views/User.vue"),
    props: true,
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import("../views/post/Post.vue"),
  },
  {
    path: '/post/:postId',
    name: 'Post-Details',
    component: () => import("../views/post/PostDetail.vue"),
    props: true,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: import('../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: import('../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(store.state.isLoggedIn," BEFORE ROUTE LOAD");
  const { isLoggedIn } = store.state;
  // const isLoggedIn = localStorage.getItem("flag"); 
  // console.log("called", to, from );
  // if(to.fullPath === "/login"){
  //   next()
  // } else {
  //   next("/login");
  // }

  if(to.fullPath === "/login" && isLoggedIn){
    next("/");
  } else if(to.fullPath !== "/login" && !isLoggedIn) {
    next("/login");
  } else {
    next();
  }
})


export default router
