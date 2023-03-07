<template>
  <div class="product-card">
    <img class="product-card__image" :src="product.image" />
    <div class="product-card__info">
      <h3 class="product-card__title">{{ product.title }}</h3>
      <p class="product-card__price">${{ product.price }}</p>
    </div>
    <button class="product-card__button" @click="addToCart">Add</button>
  </div>
</template>

<script setup>
import { h } from "vue";
import { ElNotification } from "element-plus";

import { useCartStore } from "../../../stores/cart";

const { product } = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();

const alertProductIsAlreadyInCart = () => {
  ElNotification({
    title: "Info",
    message: h(
      "p",
      { style: "color: teal" },
      "This product is already in your cart"
    ),
    duration: 0,
  });
};

const addToCart = () => {
  const productIsAlreadyInCart = cartStore.cartItems.some(
    (cartItem) => cartItem.title === product.title
  );

  if (productIsAlreadyInCart) {
    alertProductIsAlreadyInCart();
    return;
  }

  cartStore.addItem(product);
};
</script>

<style>
.product-card {
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
}

.product-card__image {
  width: 100%;
  min-height: 250px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.product-card__info {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.product-card__title {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
}

.product-card__price {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}

.product-card__button {
  width: calc(100% - 20px);
  height: 200px;
  border: none;
  background-color: #a2080c;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
}

.product-card__button:hover {
  opacity: 0.8;
}
</style>
