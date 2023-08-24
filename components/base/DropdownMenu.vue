<template>
  <div
    class="dropdown_menu w-full h-[90vh] absolute top-[63px] lg:top-[96px] bg-[#fff] lg:rounded-b-[64px] duration-300 flex items-center justify-center drop-shadow-xl z-20"
    :class="[{ dropdown_menu_isopen: props.open }]"
  >
    <nav class="flex">
      <div
        class="flex flex-col items-start justify-center lg:items-center lg:flex-row gap-4"
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

<script setup>
import { useApp } from "@/store/app";
const app = useApp();
const props = defineProps({
  open: { type: Boolean },
});
</script>

<style lang="scss" scoped>
.dropdown_menu {
  transform: translateY(-130%);
  &_isopen {
    transform: translateY(0);
  }
}
</style>
