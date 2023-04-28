<template>
  <div class="page">
    <div class="notfound-container">
      <img
        class="img-notfound"
        src="../assets/strongest-champion-in-lol-teemo.jpg"
        alt=""
      />
      <h1>404</h1>
      <p>
        Oops, Some thing went wrong , back to
        <router-link to="/" style="text-decoration: none">home.</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.page{

background: linear-gradient(90deg, rgb(3, 40, 49) 0%, rgba(255,255,255,1) 30%);
}
.notfound-container{
  margin-left: 450px;
}
.img-notfound {
  margin-top: 100px;
  width: 500px;
  height: 300px;
  
}
p{
  font-size: 24px;
  color: #000;
}
</style>