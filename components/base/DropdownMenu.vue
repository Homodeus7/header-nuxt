<template>
  <div
    class="h-full lg:h-[400px] dropdown_menu w-full fixed top-[64px] lg:top-[96px] left-0 bg-[#f5f5f5] lg:bg-[#fff] rounded-b-[64px] duration-300 flex items-center justify-center drop-shadow-xl z-20"
    :class="[{ dropdown_menu_isopen: props.open }]"
  >
    <nav class="flex items-center gap-8">
      <div
        class="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4"
      >
        <div
          v-for="category in app.categories"
          :key="category"
          class="flex items-center appearnce"
        >
          <NuxtLink to="/">
            <div class="flex items-center gap-2 appearnce__child">
              <div class="w-5 h-[2px] bg-[#1c1c1c]"></div>
              <span> {{ category }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { useApp } from "@/store/app";
const app = useApp();

interface menu {
  open?: boolean;
}
const props = defineProps<menu>();
</script>

<style lang="scss" scoped>
.dropdown_menu {
  transform: translateY(-130%);
  &_isopen {
    transform: translateY(0);
  }
}
</style>
