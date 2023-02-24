<template>
  <div class="products-list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

import ProductCard from "../ProductCard/ProductCard.vue";
import { getProducts } from "@/api/products";

const products = ref([]);

onMounted(async () => {
  products.value = await getProducts();
});
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
