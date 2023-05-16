<template>
    <div class="play-container" v-if="post">
        <div class="play ">
            <iframe class="movie-img" :src="`https://www.youtube-nocookie.com/embed/${post.videoId}`" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <div class="rate">
                <p>5.0 / 2 vote</p>
                <div class="progress" style="height: 3px;">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>                </div>
            </div>
            <div class="rate-btn">
                <button type="button" class="mx-2 btn btn-primary"><i class="fa-solid fa-thumbs-up"></i> Like</button>
                <button type="button" class="mx-2 btn btn-secondary"><i class="fa-solid fa-thumbs-down"></i> Dislike</button>
            </div>
            <div class="play-text">
                <h2>{{ post.name }}</h2>
                <h2 >Author: {{ post.author }}</h2>
                <p class="my-4" style="max-width: 48.125rem">{{ post.description }}</p>
                <p>Released: 2023-03-02</p>
                <p>Genre: Action, Drama, Horror, Science Fiction, Thriller</p>
                <p>Casts: Chloe Guidry, Nhedrick Jabier, Carmina Garay, Billy Slaughter, Carli McIntyre</p>
                <p>Country: United States of America</p>
                <p>Duration: {{ post.Time }}inute</p>
                <div class="d-flex justify-end justify-around" v-if="useUser.user.admin">
                    <button @click="
                        $router.push({ name: 'edit-post', params: { slug: post.slug } })
                        " type="button" class=" btn btn-success">
                        Edit
                    </button>
                    <button @click="deletePost(post.slug)" type="button" class="btn btn-danger mx-2" >
                        Delete
                    </button>
                </div>
                <button @click="changeFavorite" v-if="!this.post.favorite" class="btn-favorite d-none d-lg-block"><i class="fa-solid fa-plus"></i> Add to favorite</button>
                <button @click="changeFavorite" v-else class="btn-favorite d-none d-lg-block"><i class="fa-solid fa-trash-can"></i> Remove from favorite</button>
                <button @click="changeFavorite" v-if="!this.post.favorite" class="btn-favorite  d-lg-none"><i class="fa-solid fa-plus"></i></button>
                <button @click="changeFavorite" v-else class="btn-favorite  d-lg-none"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
import MovieService from "../services/movie.service";
import MyAlert from "../services/MyAlert";
import { useUsersStore } from "../stores/user";
export default {
    props: { slug: { type: String, required: true } },
    setup() {
        const useUser = useUsersStore()
        return {useUser}
    },
    data() {
        return {
            post: {},
        };
    },

    async created() {
        const response = await MovieService.getOnePost(this.$route.params.slug);
        this.post = response;
    },
    methods: {
        async deletePost(slug) {
            var Confirm = await MyAlert.Confirm("Delete post", 'info', 'Are you sure to delete this post ?', 'yes')
            if (Confirm) {
                await MovieService.deletePost(slug);
                MyAlert.Alert('success', "Post deleted successfully!!");
                this.$router.push({ name: "home" });
            } else {
                return false;
            }
        },
        async changeFavorite(){
            this.post.favorite = !this.post.favorite
            if(this.post.favorite==true) {
                MyAlert.Alert('success', 'Added favorite successfully !!')
                await MovieService.updatePost(this.$route.params.slug, {'favorite': this.post.favorite})
            }else{
                MyAlert.Alert('success', 'Remove favorite successfully !!')
                await MovieService.updatePost(this.$route.params.slug, {'favorite': this.post.favorite})
            }
        }

    },

};
</script>

<style scoped>


.play{
    display: flex;
    border: 1px solid #252424;
    margin-top: 80px;
    background: rgb(86,76,139);
background: radial-gradient(circle, rgba(86,76,139,1) 0%, rgba(31,34,55,1) 0%);
}
.play-text{
    margin: 50px;
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    position: relative;
}
.rate-btn{
    position: absolute;
    bottom: 120px;
    left: 150px;
}
.rate{
    position: absolute;
    bottom: 200px;
    width: 16%;
    left: 150px;
}
.movie-img {
    margin: 50px 30px 50px auto;
    border-radius: 10px;
    width: 500px;
    height: 300px;
}

.btn-favorite{
    padding: 5px 15px;
    border-radius: 50px;
    position: absolute;
    right: 0;
    top : 0;
    background-color: #ccc;
}

h4{
    margin-top: 160px;
    margin-left: 150px;
    color: #fff !important;
}
.btn-favorite:hover{
    opacity: 0.8;

}
@media (max-width: 992px) {
    .movie-img {
        width: 100%;
        height: 350px;
        margin-left: -0.65rem;
        border-radius: 10px;
        margin-bottom: 2rem;
        
    }
    .play-text{
        margin-top: 10rem;
    }
    .play {
        flex-direction: column;
    }
    .rate{
        width: 30%;
        position: relative;
        top: 10px;
        left: 10px;
    }
    .rate-btn{
        position: relative;
        top: 40px;
        left: 0;
    }

}
@media (max-width: 767px){
    p{
        width: 200px;
    }
    .rate{
        width: 40%;
    }
}
</style>