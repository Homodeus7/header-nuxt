<template>
  <div class="w-full flex flex-col">
    <NavHeader />
    <slot> </slot>
    <NavFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
  display: grid;
  grid-template-rows: 1fr max-content fr 1fr;
}
</style>
