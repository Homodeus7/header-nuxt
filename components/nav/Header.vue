<template>
  <div class="min-h-[96px] flex items-center justify-center bg-[#f5f5f5]">
    <div class="container w-full h-full flex items-center justify-between">
      <div class="flex gap-12">
        <NuxtLink to="/">
          <BaseIconsLogo />
        </NuxtLink>
        <BaseNews />
        <div class="flex items-center gap-2 appearnce px-2">
          <img src="@/assets/images/icons/search.svg" />
          <span class="text-[#3F3F3F] appearnce__child">Поиск</span>
        </div>
      </div>
      <nav class="flex items-center gap-8">
        <div class="flex items-center gap-4">
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
        <BaseBurger
          @click="menu = !menu"
          :class="{ burger_menu: menu === true }"
        />
      </nav>
      <BaseDropdownMenu :open="menu" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useApp } from "@/store/app";

const app = useApp();
const menu = ref(false);
</script>

<style lang="scss" scoped>
.container {
  width: 1680px;
}

.appearnce:hover .appearnce__child {
  animation: appearance 0.2s;
}
@keyframes appearance {
  0% {
    transform: translateY(-6px);
  }
  15% {
    transform: translateY(-10px);
  }
  20% {
    opacity: 0;
  }
  30% {
    transform: translateY(-14px);
  }
  60% {
    opacity: 0;
  }
  70% {
    transform: translateY(14px);
  }
  80% {
    opacity: 0;
  }
  85% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(5px);
  }
}
</style>
