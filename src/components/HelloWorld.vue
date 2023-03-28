<script setup>
import { useStore } from "../store";

defineProps({
  msg: String,
});

const appStore = useStore();
</script>

<template>
  <section>
    <h1>{{ msg }}</h1>
    <p>count is {{ appStore.count }}</p>

    <div class="btn-group">
      <a-button @click="appStore.addCount()" type="primary">addCount</a-button>
      <a-button @click="appStore.delCount()" type="primary">delCount</a-button>
    </div>
  </section>
</template>

<style>
.btn-group .ant-btn:not(:last-child) {
  margin-right: 6px;
}
</style>