<script setup lang="ts">
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push('/');
}
</script>
<template>
  <div class="not-found">
    <h1 class="not-found-title">404</h1>
    <div><Button customClass="button-class" @click="redirectToMain">На главную</Button></div>
  </div>
</template>
<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 52px;
}
.not-found-title {
  font-weight: 700;
  font-size: 128px;
  color: var(--color-primary);
}

.button-class {
  width: 320px;
  height: 61px;
  padding: 15px 50px;
  background: var(--color-button);
}
</style>
