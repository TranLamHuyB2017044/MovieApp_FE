<template>
  <div class="container" id="popular">
    <div class="row">
      <Splide :options="options" class="d-lg-flex d-none" aria-label="My Favorite Images">
        <SplideSlide class="Moives-box" v-for="card in cards" :key="card.id">
          <img  :src="card.img" class="movie-box-img" />
          <router-link @click="scrollToTop" :to="{ name: 'detail', params: { slug: card.slug }}">
            <section class="box-text">
              <a href="#" class="watch-btn">
                <i class="bx fa-solid fa-play"></i>
              </a>
            </section>
          </router-link>
        </SplideSlide>
      </Splide>
      <Splide :options="optionIpad" class="d-lg-none d-md-block d-sm-none d-none" aria-label="My Favorite Images">
        <SplideSlide class="Moives-box" v-for="card in cards" :key="card.id">
          <img  :src="card.img" class="movie-box-img" />
          <router-link @click="scrollToTop" :to="{ name: 'detail', params: { slug: card.slug }}">
            <section class="box-text">
              <a href="#" class="watch-btn">
                <i class="bx fa-solid fa-play"></i>
              </a>
            </section>
          </router-link>
        </SplideSlide>
      </Splide>
      <Splide :options="optionMobile" class="d-md-none d-flex" aria-label="My Favorite Images">
        <SplideSlide class="Moives-box" v-for="card in cards" :key="card.id">
          <img  :src="card.img" class="movie-box-img" />
          <router-link @click="scrollToTop" :to="{ name: 'detail', params: { slug: card.slug }}">
            <section class="box-text">
              <a href="#" class="watch-btn">
                <i class="bx fa-solid fa-play"></i>
              </a>
            </section>
          </router-link>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
      autoplay: true,
      type: "loop",
      pauOnFocus: false,
      perPage: 6,
      arrows: false,
    };
    const optionIpad = {
      rewind: true,
      gap: "1rem",
      autoplay: true,
      type: "loop",
      pauOnFocus: false,
      perPage: 3,
      arrows: false,
    };
    const optionMobile = {
      rewind: true,
      gap: "1rem",
      autoplay: true,
      type: "loop",
      pauOnFocus: false,
      perPage: 1,
      arrows: false,
    };
    return { options, optionMobile, optionIpad };
  },
  // async created() {
  //   this.posts = await MovieService.getAll();
  // },
  data() {
    return {
      // posts:{},
      cards: [
        {
          id: 1,
          img: "../assets/arcane.jpg",
          slug: "arcane",
        },
        {
          id: 2,
          img: "../assets/aquaman.jpg",
          slug: "aquaman",
        },
        {
          id: 3,
          img: "../assets/joker.jpg",
          slug: "joker",
        },
        {
          id: 4,
          img: "../assets/ant-man_4.jpg",
          slug: "ant-man",
        },
        {
          id: 5,
          img: "../assets/endgame.jpg",
          slug: "avengers-endgame",
        },
        {
          id: 6,
          img: "../assets/godzilla.jpg",
          slug: "godzilla",
        },
        {
          id: 7,
          img: "../assets/bumblebee.jpg",
          slug: "bumblebee",
        },
        {
          id: 8,
          img: "../assets/tenet.jpg",
          slug: "tenet",
        },
        {
          id: 9,
          img: "../assets/jumanji.jpg",
          slug: "jumanji",
        },
        {
          id: 10,
          img: "../assets/thienmenhanhhung.jpg",
          slug: "thien-menh-anh-hung",
        },
        {
          id: 11,
          img: "../assets/dragontrain.jpg",
          slug: "ht-train-your-dragon",
        },
        {
          id: 12,
          img: "../assets/glass.jpg",
          slug: "glass",
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },


  },
});
</script>

<style scoped>
.Moives-box {
  position: relative;
  font-size: 16px;
  width: 100%;
  height: 380px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.movie-box-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-top: -55px;
  opacity: 0.8;
}

.Moives-box .box-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px;
  background: linear-gradient(
    8deg,
    hsl(240 17% 14% / 74%),
    14%,
    hsl(240 17% 14% / 14%),
    44%
  );
  overflow: hidden;
  text-shadow: -1px -1px 50px rgba(0, 0, 0, 1);
}

.bx {
  background: #0088a9;
  padding: 16px;
  color: white;
  border-radius: 48%;
  position: absolute;
  top: 47%;
  right: 40%;
}

.bx:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>
