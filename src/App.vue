<template>
  <div id="app" >
    <AppHeader v-if="this.UsersStore.user" />
    <AppNavbar v-if="this.UsersStore.user" />
    <RouterView  :key="this.$route.path"></RouterView>
    <AppFooter v-if="this.UsersStore.user" />
  </div>
</template>

<script>
import { useUsersStore } from "./stores/user";
import AppHeader from "./components/AppHeader.vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppFooter,
    AppNavbar,
    AppHeader,
  },
  setup() {
    const UsersStore = useUsersStore();
    return { UsersStore };
  },
  async mounted() {
    const userID = localStorage.getItem("id");
    await this.UsersStore.getById(userID);
  },
};
</script>

<style>

#app{
  background-color: #18191a;
}
p,
h2,
title,
label {
  color: white;
}

html::-webkit-scrollbar {
  width: 0.5rem;
  background: transparent;
  background: #24252a;
}

html::-webkit-scrollbar-thumb {
  background: #0088a9;
  border-radius: 10px;
}
</style>
