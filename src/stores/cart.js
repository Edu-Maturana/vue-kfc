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

    cartItems: (state) => {
      return state.items;
    },
  },

  actions: {
    addItem(item) {
      const existingItem = this.items.find((i) => i.title === item.title);

      if (!existingItem) {
        this.items.push({ ...item, quantity: 1 });
      }
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
