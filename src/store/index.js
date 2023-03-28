import Vue from "vue";
import { createPinia } from "pinia";

const pinia = createPinia();

Vue.use(pinia);

export { useStore } from "./app";
export default pinia;
