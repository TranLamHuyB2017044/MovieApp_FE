<template>
  <div class="container film-container" :key="this.$route.params.searchText" >
    <div class="row">
      <div
        class="col-md-4 col-lg-3 mt-5 d-flex col-12 col-sm-6 d-flex justify-content-around"
        v-for="post in this.searchFilm"
        :key="post._id"
      >
        <Router-link
          class="card-movies"
          :to="{ name: 'detail', params: { slug: post.slug } }"
          @click.native="scrollToTop"
        >
          <div class="moive">
            <img
              :src="`https://i.ytimg.com/vi/${post.videoId}/maxresdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-p51NBQHBICMaXtlW6-2-F5h5Q`"
              class="card-img-top movie-img"
              :alt="post.name"
            />
            <!-- <div class="moive-title">
              <h5 v-if="post.name.length > 10">
                {{ post.name.substring(0, 10) + "..." }}
              </h5>
              <h5 v-else>{{ post.name }}</h5>
              <i class="fa-solid fa-clock"> {{ post.Time }}</i>
            </div> -->
          </div>
        </Router-link>
      </div>
    </div>
  </div>
</template>
  <script>
import { useFilmStore } from "../stores/film";
import MovieService from "../services/movie.service";
export default {
  setup() {
    const filmStore = useFilmStore();
    return { filmStore };
  },
  data() {
    return {
      posts: [],
      searchFilm: [],
      searchText: "",
    };
  },
  async created() {
    this.posts = await MovieService.getAll();
  },
  async mounted() {
    this.searchText = await this.$route.params.searchText;
    await this.filmStore.getSearchFilm(this.searchText);
    this.searchFilm = await this.filmStore.searchFilm;
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

}
.film-container{
  margin: 70px auto;
}
.card-movies:hover {
  transform: scale(1.1);
  transition: 0.5s;
}

</style>
  