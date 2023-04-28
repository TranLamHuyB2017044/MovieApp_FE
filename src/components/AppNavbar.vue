<template>
    <div class="navbar d-none d-lg-flex">
        <router-link :to = "{name: 'home'}" @click="scrollToTop" class="nav-link">
            <i class="fa-solid fas fa-house"> <a href="#home"></a></i>
            <span class="nav-link-title"> Home</span>
        </router-link>
        <router-link class="nav-link" :to = "{name: 'add'}" v-if="useUser.user.admin">
            <i class="fa-regular fas fa-square-plus"></i>
            <span class="nav-link-title"> Create</span>
        </router-link>
        <router-link :to = "{name: 'favorite'}" class="nav-link">
            <i class="fa-solid fas fa-heart"></i>
            <span class="nav-link-title"> Favorites</span>
        </router-link>
        <router-link :to = "{name: 'movie'}" class="nav-link">
            <i class="fa-solid fas fa-tv"></i>
            <span class="nav-link-title"> Movies</span>
        </router-link>
    </div>
</template>
<script>
import { useUsersStore } from '../stores/user';
export default{
    setup() {
        const useUser = useUsersStore()
        return {useUser}
    },
    methods: { 
        scrollToTop() {
            window.scrollTo(0,0);
        },

    },
}
</script>
<style scoped>
.navbar{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
    display: flex;
    flex-direction: column;
    row-gap: 2.1rem;
}
.nav-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue !important;
}
.nav-link:hover,
.nav-active{
    color: #0088a9 !important;
    transition: 0.3s all linear;
    transform: scale(1.1);
}

.nav-link .fas{
    font-size: 1.6rem;
}

.nav-link-title{
    font-size: 0.7rem;
}
</style>