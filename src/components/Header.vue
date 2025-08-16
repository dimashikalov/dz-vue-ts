<script setup lang="ts">
import IconLogoSmall from '@/icons/IconLogoSmall.vue';
import IconPlayHeader from '@/icons/IconPlayHeader.vue';
import IconStatHeader from '@/icons/IconStatHeader.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
  () => ({
    alias: route.params.alias,
  }),
  (data) => {
    console.log('alias', route.params.alias);
  },
);
</script>
<template>
  <header class="header_wrapper">
    <div class="header_logo">
      <IconLogoSmall />
    </div>
    <div class="header_links">
      <div class="link-item">
        <RouterLink to="/main" exact-active-class="active-link" v-slot="{ isExactActive }">
          <div class="link-inner">
            <IconPlayHeader
              :color="isExactActive ? 'var(--color-primary)' : 'var(--color-inactive)'"
            />
            <span>Медитация</span>
          </div>
        </RouterLink>
      </div>
      <div class="divider"></div>
      <div class="link-item">
        <RouterLink to="/main/stat" exact-active-class="active-link" v-slot="{ isExactActive }">
          <div class="link-inner">
            <IconStatHeader
              :color="isExactActive ? 'var(--color-primary)' : 'var(--color-inactive)'"
            />
            <span>Статистика</span>
          </div>
        </RouterLink>
      </div>
      <div class="divider"></div>
      <div class="link-item">
        <RouterLink to="/"> Выход </RouterLink>
      </div>
    </div>
  </header>
</template>
<style scoped>
.header_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 60px;
  color: var(--color-inactive);
}

.header_logo {
  display: flex;
  align-items: center;
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

.link-item {
  list-style: none;
}
.link-item a {
  text-decoration: none;
  transition: all 0.5s;
  color: var(--color-fg);
}

.link-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-item a:hover,
.link-item a.active-link {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-primary);
}
</style>
