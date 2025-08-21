<script setup lang="ts">
import IconRectMood from '@/icons/IconRectMood.vue';
import Button from './Button.vue';
import IconRelaxMood from '@/icons/IconRelaxMood.vue';
import IconFocusMood from '@/icons/IconFocusMood.vue';
import IconAxiousMood from '@/icons/IconAxiousMood.vue';
</script>

<template>
  <div class="profile-avatar">
    <div class="profile-image">
      <img src="../assets/avatar.png" alt="Изображение пользователя" class="profile-avatar__img" />
    </div>

    <div class="profile-text">
      <h4>Добро пожаловать, Дмитрий!</h4>
      <p>Как вы сегодня себя чувствуете?</p>
    </div>

    <div class="profile-buttons">
      <div class="profile-buttons-content">
        <Button custom-class="profile-buttons-icon">
          <IconRectMood />
        </Button>
        <span>Спокойно</span>
      </div>
      <div class="profile-buttons-content">
        <Button custom-class="profile-buttons-icon">
          <IconRelaxMood />
        </Button>
        <span>Расслаблено</span>
      </div>
      <div class="profile-buttons-content">
        <Button custom-class="profile-buttons-icon">
          <IconFocusMood />
        </Button>
        <span>Фокусировано</span>
      </div>
      <div class="profile-buttons-content">
        <Button custom-class="profile-buttons-icon">
          <IconAxiousMood />
        </Button>
        <span>Тревожно</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-avatar {
  display: flex;
  flex-direction: column;
  width: 370px;
}
.profile-image {
  width: 129px;
  height: 129px;
  margin-bottom: 30px;
}
.profile-text {
  width: 370px;
  color: var(--color-primary);
  margin-bottom: 40px;
}
.profile-text h4 {
  font-weight: 500;
  font-size: 30px;
}
.profile-text p {
  font-weight: 400;
  font-size: 22px;
  color: var(--color-inactive);
}
.profile-buttons {
  display: flex;
  gap: 22px;
}
.profile-buttons-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 12px;
  gap: 5px;
}

.profile-buttons-icon {
  width: 62px;
  height: 65px;
  background: var(--color-primary);
  border-radius: 20px;
}
.profile-buttons-icon:hover {
  background: var(--color-button-mood-hover);
}
</style>
