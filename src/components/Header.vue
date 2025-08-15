<script setup lang="ts">
import IconLogoSmall from '@/icons/IconLogoSmall.vue';
</script>
<template>
  <div class="header_wrapper">
    <div class="header_logo">
      <IconLogoSmall />
    </div>
    <div class="header_links">
      <div>
        <RouterLink to="/main">Медитация</RouterLink>
      </div>
      <div class="divider"></div>
      <div>
        <RouterLink to="/main/stat">Статистика</RouterLink>
      </div>
      <div class="divider"></div>
      <div>Выход</div>
    </div>
  </div>
</template>
<style scoped>
.header_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;
  color: var(--color-inactive);
}
.header_links {
  display: flex;
  gap: 50px;
  align-items: center;
}

.divider {
  width: 0;
  height: 92px;
  border-left: 3px solid var(--color-divider);
  opacity: 0.5;
}
</style>
