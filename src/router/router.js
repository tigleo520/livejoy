import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Project from "../views/Project.vue";
import Project_info from "../views/Project_info.vue";
import MyProject from "../views/MyProject.vue";
import User_info from "../views/User_info.vue";
import About from "../views/About.vue";
import Protocol from "../views/Protocol.vue";
import Contactus from "../views/Contactus.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/project",
      name: "project",
      component: Project
    },
    {
      path: "/project_info/:id",
      name: "project_info",
      component: Project_info,
      props: true
    },
    {
      path: "/my_project",
      name: "my_project",
      component: MyProject
    },
    {
      path: "/services",
      name: "services",
      component: Services
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/user_info",
      name: "user_info",
      component: User_info
    },
    {
      path: "/contact",
      component: () => import("../views/Contact.vue"),
      children: [
        {
          path: "",
          redirect: "about"
        },
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "protocol",
          name: "protocol",
          component: Protocol
        },
        {
          path: "contactus",
          name: "contactus",
          component: Contactus
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

export default router;
