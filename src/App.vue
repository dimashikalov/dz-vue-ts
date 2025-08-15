<script setup lang="ts">
import { onMounted } from 'vue';
import { useMeditationsStore } from './store/meditation.store';
import MeditationList from './components/MeditationList.vue';
</script>

<template>
  <h1>Приложение для медитации</h1>
  <MeditationList />
</template>

<style scoped></style>
