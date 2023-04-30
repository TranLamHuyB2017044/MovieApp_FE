<template>
  <div class="container">
    <div class="row">
      <sidebar-home />
      <!-- Popular -->
      <section class="popular container mt-5" ref="popular">
        <div class="heading">
          <h2 class="heading-title">Popular Movies</h2>
        </div>
        <div class="popular-content">
          <popular-moives />
        </div>
      </section>
      <section class="moives container mt-5" id="movies">
        <div class="heading">
          <h2 class="heading-title">Movies And Show</h2>
        </div>
      </section>
      <section
        class="col-md-4 col-lg-3 mt-5 d-flex col-lg-3 col-12 col-sm-6 d-flex justify-content-around"
        v-for="post in posts"
        :key="post._id"
      >
        <router-link
          @click="scrollToTop"
          class="card-movies"
          :to="{ name: 'detail', params: { slug: post.slug } }"
        >
          <div class="moive">
            <img
              :src="`https://i.ytimg.com/vi/${post.videoId}/maxresdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-p51NBQHBICMaXtlW6-2-F5h5Q`"
              class="card-img-top movie-img"
              :alt="post.name"
            />
            <!-- <div class="moive-title">
              <h5 v-if="post.name.length > 10">{{ post.name.substring(0, 10)+ "..." }}</h5>
              <h5 v-else>{{ post.name}}</h5>
              <i class="fa-solid fa-clock"> {{ post.Time }}</i>
            </div> -->
          </div>
        </router-link>
      </section>
    </div>
  </div>
</template>
<script>
// import MovieService from "../services/movie.service";
import { useFilmStore } from "../stores/film";
import SidebarHome from "../components/SidebarHome.vue";
import PopularMoives from "../components/PopularMoives.vue";

export default {
  components: {
    SidebarHome,
    PopularMoives,
  },
  data() {
    return {
      posts: [],
    };
  },
  setup(){
    const useFilm = useFilmStore()
    return {useFilm}
  },
  async  mounted() {
    this.posts = await this.useFilm.getAllFilms()
    this.posts= this.useFilm.films;
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  
};
</script>
<style scoped>
* {
  scroll-behavior: smooth;
  color: white;
  text-decoration: none;

}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333335;
  padding: 8px 14px;
  border: 1px solid hsl(200 100% 99% / 5%);
  margin-top: -10px;
}
.heading-title {
  font-size: 1.2rem;
  font-weight: 500;
}

.card-movies:hover {
  transform: scale(1.1);
  transition: 0.5s;
}
/* .moive {
  border-radius: 10px;
  width: 100%;
  padding: 0px 0 10px 0px;
  margin: auto;
  
}
.movie-img {
  height: 100%;
  padding: 0px 0px 30px 0px;
}
.moive-title {
  display: flex;
  justify-content: space-around;
  padding-bottom: 5px;
}
h5 {
  margin-top: -5px;
} */



</style>
