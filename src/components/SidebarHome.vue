<template>
    <div class="container">
        <Splide :options="options" aria-label="My Favorite Images">
            <SplideSlide>
                <router-link :to="{ name: 'detail', params: { slug: 'fast-and-furious'}}"><img src="../assets/fast.jpg" alt="Sample 1"></router-link>
                <section class="slide-text">
                    <h1 class="slide-title">Fast & Furious <br/> Hobbs & Shaw</h1>
                    <p>Releasing 10 April</p>
                    <a href="#" class="watch-btn">
                        <i class="bx fa-solid fa-play"></i>
                        <span>Watch the trailer</span>
                    </a>
                </section>
            </SplideSlide>
            <SplideSlide>
                <router-link :to="{ name: 'detail', params: { slug: 'alita'}}"><img src="../assets/Alita_poster.jpg" alt="Sample 2"></router-link>
                <section class="slide-text">
                    <h1 class="slide-title">Alita <br/> Battle Angel</h1>
                    <p>Releasing 15 Feb</p>
                    <a href="#" class="watch-btn">
                        <i class="bx fa-solid fa-play"></i>
                        <span>Watch the trailer</span>
                    </a>
                </section>
            </SplideSlide>
            <SplideSlide>
                <router-link :to="{ name: 'detail', params: { slug: 'avengers-age-of-ultron'}}"><img src="../assets/avengers.jpg" alt="Sample 3"></router-link>
                <section class="slide-text">
                    <h1 class="slide-title">Avengers <br/>Age of Ultron</h1>
                    <p>Releasing 12 May</p>
                    <a href="#" class="watch-btn">
                        <i class="bx fa-solid fa-play"></i>
                        <span>Watch the trailer</span>
                    </a>
                </section>
            </SplideSlide>
        </Splide>
    </div>
</template>
<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Splide,
        SplideSlide,
    },
    setup() {
        const options = {
            rewind: true,
            gap: '1rem',
            autoplay: true,
            type   : 'loop',
            pauOnFocus: false,
        }
        return { options }
    }
});
</script>
<style scoped>
.splide__slide img {
    margin-top: 60px;
    object-fit: cover;
    vertical-align: bottom;
    width: 100%;
    height: 500px;
    border-radius: 10px;
    z-index: -1;
    
}

.slide-text{
    position: absolute;
    padding-left: 40px;
    top: 45%;
    text-shadow: -1px -1px 50px rgba(0,0,0,1);
}
.slide-title{
    font-size: 2.5rem;
    font-weight: 600;
}
.slide-text p{
    font-size: 1rem;
    color: white;
}
.watch-btn{
    display: flex;
    align-items: center;
    column-gap: 0.8rem;
    color: white;
    text-decoration: none;
}

.watch-btn:hover{
    color: #0088a9;
}
</style>