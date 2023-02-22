<script setup>
import { ref } from "vue";

const imgSrc = ref(
  "https://assets.stickpng.com/images/58429977a6515b1e0ad75ade.png"
);
</script>

<template>
  <div class="header">
    <img class="logo" :src="imgSrc" />
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
}
</style>
