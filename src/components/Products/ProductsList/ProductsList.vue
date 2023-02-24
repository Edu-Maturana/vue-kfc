<template>
  <div class="loading" v-if="loading">
    <Spinner />
  </div>
  <div class="products-list" v-if="!loading">
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
import Spinner from "@/components/Shared/Spinner/Spinner.vue";
import { getProducts } from "@/api/products";

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  products.value = await getProducts();
  loading.value = false;
});
</script>

<style>
.loading {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}
</style>
