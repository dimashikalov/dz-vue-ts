<script setup lang="ts">
import { useRouter } from 'vue-router';
import IconLogoBig from '@/icons/IconLogoBig.vue';
import Button from '@/components/Button.vue';
import { useAuthStore } from '@/store/auth.store';

const router = useRouter();
const authStore = useAuthStore();
function redirectToMain() {
  authStore.getToken
    ? router.push({
        name: 'main',
      })
    : router.push({
        name: 'login',
      });
}
</script>
<template>
  <div class="auth-wrap">
    <div class="auth-logo">
      <IconLogoBig />
    </div>

    <div class="auth-text">
      <h1 class="auth-title">Добро пожаловать!</h1>
      <p class="auth-decription">Медитируй и оставайся в фокусе, чтобы быть счастливым.</p>
    </div>
    <div class="auth-button">
      <Button class="button-class" customClass="button-class" @click="redirectToMain"
        >Войти в приложение</Button
      >
    </div>
  </div>
</template>
<style scoped>
.button-class {
  width: 320px;
  height: 61px;
  padding: 15px 50px;
  background: var(--color-button);
}
.auth-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url('../../public/auth-bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: var(--color-primary);
}
.auth-title {
  font-weight: 700;
  font-size: 34px;
}
.auth-decription {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
}
.auth-logo {
  margin-bottom: -50px;
}
.auth-text {
  text-align: center;
  margin-bottom: 50px;
}
</style>
