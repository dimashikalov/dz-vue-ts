<script setup lang="ts">
import IconPlaySmall from '@/icons/IconPlaySmall.vue';
import type { IMeditation } from '@/interfaces/meditation.interface';
import Button from './Button.vue';

const props = defineProps<IMeditation>();
</script>
<template>
  <div class="card">
    <div>{{ props.title }}</div>
    <div>{{ props.description }}</div>
    <div class="card-footer">
      <Button> <span>Начать</span> <IconPlaySmall /> </Button>
      <div>{{ props.duration_min }} мин</div>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 340px;
  height: 170px;
  background: var(--color-bg-card);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
}
</style>
