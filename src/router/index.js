import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Charge from "../views/Charge.vue";
import Course from "../views/Course.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "/home/charge",
        name: "home",
        component: Charge,
      },
      {
        path: "/home/cursos",
        name: "cursos",
        component: Course,
      },
    ],
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
