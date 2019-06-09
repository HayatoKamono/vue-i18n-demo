import Vue from "vue";
import Router from "vue-router";
import Home from "./components/pages/Home/";
import About from "./components/pages/About/";
import Contact from "./components/pages/Contact/";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
