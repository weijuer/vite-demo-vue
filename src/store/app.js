import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "app",
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  actions: {
    addCount() {
      this.count++;
    },
    delCount() {
      this.count--;
    },
  },
});
