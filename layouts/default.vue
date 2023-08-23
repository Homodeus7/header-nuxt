<template>
  <div class="page">
    <NavHeader />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}
</style>
