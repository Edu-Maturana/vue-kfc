import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),

  getters: {
    total: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },

    itemsCount: (state) => {
      return state.items.length;
    },
  },

  actions: {
    addItem(item) {
      const existingItem = this.items.find((i) => i.title === item.title);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }

      console.log(this.items);
    },

    removeItem(item) {
      const existingItem = this.items.find((i) => i.id === item.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        this.items = this.items.filter((i) => i.id !== item.id);
      }
    },

    clear() {
      this.items = [];
    },
  },
});
