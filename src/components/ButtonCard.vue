<script setup lang="ts"></script>
<template>
  <button class="button-card">
    <slot />
  </button>
</template>
<style scoped>
.button-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  width: 111px;
  height: 39px;
  background: var(--color-bg);
  color: var(--color-primary);
  gap: 10px;
  font-size: 15px;
  padding: 10px 18px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.button-card:hover {
  background-color: var(--color-fg-hover);
}
</style>
