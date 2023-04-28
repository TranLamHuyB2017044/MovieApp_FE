import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import DetailPost from "../views/DetailPost.vue";
import EditPost from "../views/EditPost.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DetailProfile from "../views/DetailProfile.vue";
import Movie from "../views/Movie.vue";
import SearchFilm from "../views/SearchFilm.vue";
import Favorite from "../views/Favorite.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/AddPost",
    name: "add",
    component: AddPost,
  },
  {
    path: "/detail/:slug",
    name: "detail",
    component: DetailPost,
    props: true,
  },
  {
    path: "/movie",
    name: "movie",
    component: Movie,
    props: true,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: Favorite,
    props: true,
  },
  {
    path: "/editPost/:slug",
    name: "edit-post",
    component: EditPost,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/editProfile/:id",
    name: "edit-profile",
    component: DetailProfile,
    props: true,
  },
  {
    path: "/search/:searchText",
    name: "search",
    component: SearchFilm,
    props:true
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("../views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const localID = localStorage.getItem('id');
  if (!localID && to.name !== "login" && to.name !== "register") {
      next({name: 'login'});
  }else if(localID && to.name == 'login'){
      next({name: 'home'})
  }
  else next();

});

export default router;
