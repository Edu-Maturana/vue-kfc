<template>
  <div class="products-list">
    <ProductCard
      v-for="product in kfcProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script setup>
import ProductCard from "../ProductCard/ProductCard.vue";
import { kfcProducts } from "../../../assets/products";
</script>

<style>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
</style>
