<script setup>
// auto import ref
const message = ref("Hello vite");
</script>

<template>
  <main class="app-main">
    <h1>{{ message }}</h1>

    <nav class="app-nav">
      <router-link to="/"> Home </router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/users/eduardo"> eduardo </router-link>
      <router-link to="/users/eduardo/posts"> posts </router-link>
      <router-link to="/users/eduardo/profile"> profile </router-link>
    </nav>

    <router-view />
  </main>
</template>

<style lang="scss" scoped>
$theme: cornflowerblue;

.app-main {
  padding: 16px;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-nav {
  display: flex;

  a {
    padding: 4px 12px;
    border: 1px solid $theme;

    &:not(:last-child) {
      border-right: 0;
    }

    &:hover,
    &:active {
      color: #fff;
      background-color: $theme;
    }
  }
}

.router-link-exact-active {
  color: #fff;
  background-color: $theme;
}
</style>
