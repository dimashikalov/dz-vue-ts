<script setup lang="ts">
import MeditationList from '@/components/MeditationList.vue';
import Profile from '@/components/Profile.vue';
</script>

<template>
  <div class="wrapper">
    <Profile />
    <MeditationList />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  gap: 100px;
}
</style>
