<template>
    <div class="container mt-5">
      <div class="row"> 
        <h2>Favorite Movie</h2>
        <div
          class=" col-md-4 col-lg-3  d-flex col-12 col-sm-6 d-flex justify-content-around"
          v-for="post in posts"
          :key="post._id"
        >
          <Router-link
            class=" card-movies mt-3"
            :to="{ name: 'detail', params: { slug: post.slug}}"
            @click.native="scrollToTop"
          >
            <div class="moive">
              <img
                :src="`https://i.ytimg.com/vi/${post.videoId}/maxresdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-p51NBQHBICMaXtlW6-2-F5h5Q`"
                class="card-img-top movie-img"
                :alt="post.name"
              >
              <!-- <div class="moive-title">
                <h5 v-if="post.name.length > 10">{{ post.name.substring(0, 10)+ "..." }}</h5>
                <h5 v-else>{{ post.name}}</h5>
                <i class="fa-solid fa-clock"> {{ post.Time }}</i>
            </div> -->
            </div>
          </Router-link>
        </div>
      </div>
    </div>
  </template>
  <script>
import MovieService from "../services/movie.service";
  export default {
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      this.posts = await MovieService.getAllFavorites();
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
  
  .card-movies:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

  </style>