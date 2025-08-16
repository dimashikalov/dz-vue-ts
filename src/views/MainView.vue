<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="app">
    <Header />

    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 140px);
  max-width: 1450px;
  margin: 0 50px 0 60px;
}
</style>
