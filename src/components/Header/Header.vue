<script setup>
import { ref } from "vue";

const imgSrc = ref(
  "https://assets.stickpng.com/images/58429977a6515b1e0ad75ade.png"
);
</script>

<template>
  <div class="header">
    <router-link class="link" to="/" active-class="active">Home</router-link>
    <img class="logo" :src="imgSrc" />
    <router-link class="link" to="/cart" active-class="active"
      >Cart</router-link
    >
  </div>
</template>

<style scoped>
.header {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.logo {
  width: 50px;
  margin: 0 20px;
}

.link {
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.2s;
}

.link:hover {
  color: #a2080c;
}

.active {
  color: #a2080c;
}
</style>
