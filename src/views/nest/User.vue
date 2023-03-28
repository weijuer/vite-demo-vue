<script setup>
const route = useRoute();
const router = useRouter();

console.log("route", route.params.username);
console.log("router", router);
</script>

<template>
  <div class="user">
    <h2>User {{ $route.params.username }}</h2>
    <router-view></router-view>
  </div>
</template>