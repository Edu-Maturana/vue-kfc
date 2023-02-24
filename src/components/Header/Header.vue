<template>
  <div class="header">
    <router-link class="link" to="/" active-class="active">Home</router-link>
    <img class="logo" :src="imgSrc" />
    <router-link class="link" to="/cart" active-class="active">
      <p v-if="cartItemsCount > 0" class="cart-items-count">
        {{ cartItemsCount }}
      </p>
      Cart</router-link
    >
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useCartStore } from "../../stores/cart";

const imgSrc = ref(
  "https://d3j72de684fey1.cloudfront.net/resized/f2b80f86e2983cfffba72af798fd466928f91b57.PjI1NngyNTY.png"
);

const cartStore = useCartStore();
const cartItemsCount = ref(cartStore.itemsCount);

watch(
  () => cartStore.itemsCount,
  (newVal) => {
    cartItemsCount.value = newVal;
  }
);
</script>

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

.cart-items-count {
  position: absolute;
  top: 10;
  right: 10;
  background-color: #a2080c;
  color: #fff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}
</style>
