<script setup lang="ts">
import { useMeditationsStore } from '@/store/meditation.store';
import { onMounted } from 'vue';
import MeditationCard from './MeditationCard.vue';

const store = useMeditationsStore();

onMounted(() => {
  store.fetchMeditations();
});
</script>
<template>
  <div class="list">
    <MeditationCard v-for="item in store.meditations" :key="item.id" v-bind="item" />
  </div>
</template>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
