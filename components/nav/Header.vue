<template>
  <div
    class="min-h-[64px] lg:min-h-[96px] flex items-center justify-center bg-[#f5f5f5] relative"
    :class="{ 'bg-white': dropdownMenu === true }"
  >
    <div class="container w-full h-full flex items-center justify-between">
      <div
        class="w-full flex items-center justify-between lg:justify-start lg:gap-12"
      >
        <NuxtLink to="/">
          <BaseIconsLogo />
        </NuxtLink>
        <BaseNews class="order-1 lg:order-none lg:ml-1" />
        <div class="flex items-center pl-2 lg:pl-0 lg:gap-1 lg:px-2">
          <img
            class="lg:hidden"
            src="@/assets/images/icons/search-mobile.svg"
          />
          <img class="hidden lg:block" src="@/assets/images/icons/search.svg" />
          <div class="swappin text-[#3F3F3F]" data-replace="Поиск">
            <span class="hidden lg:inline-block text-[#3F3F3F] swappin__child">
              Поиск
            </span>
          </div>
        </div>
        <BaseBurger
          class="lg:hidden order-2"
          @click="dropdownMenu = !dropdownMenu"
          :class="{ burger_menu: dropdownMenu === true }"
        />
      </div>
      <nav class="hidden lg:flex items-center gap-11">
        <div class="flex items-center gap-10">
          <div
            v-for="category in app.categories"
            :key="category"
            class="flex items-center swappin"
            :data-replace="category"
          >
            <NuxtLink to="/">
              <div class="min-w-max flex items-center gap-2 pb-2">
                <span class="w-5 h-[2px] bg-[#1C1C1C]"></span>
                <span class="text-base swappin__child">
                  {{ category }}
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <BaseBurger
          @click="dropdownMenu = !dropdownMenu"
          :class="{ burger_menu: dropdownMenu === true }"
        />
      </nav>
    </div>
    <BaseDropdownMenu :open="dropdownMenu" />
  </div>
</template>
<script setup>
import { useApp } from "@/store/app";
const app = useApp();
const dropdownMenu = ref(false);
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20px 0 16px;
  @media (min-width: 1024px) {
    padding: 0;
    min-width: 1680px;
  }
}
.swappin {
  overflow: hidden;
  position: relative;
}
.swappin::after {
  content: "";
  position: absolute;
  right: 0;
}
.swappin::after {
  content: attr(data-replace);
  height: 100%;
  top: 0;
  transform-origin: 100% 50%;
  transform: translate3d(0, 200%, 0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}
.swappin__child::before {
  content: "";
  height: 2px;
  width: 20px;
  top: 0;
  background: #1c1c1c;
}
.swappin:hover::after {
  transform: translate3d(0, 0, 0);
}
.swappin__child {
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}
.swappin:hover .swappin__child {
  transform: translate3d(0, -200%, 0);
}
// .appearance:hover .appearance__child {
//   animation: appearance 0.2s;
// }

// @keyframes appearance {
//   0% {
//     transform: translateY(-6px);
//   }
//   15% {
//     transform: translateY(-10px);
//   }
//   30% {
//     transform: translateY(-14px);
//   }
//   60% {
//     transform: translateY(-16px);
//   }
//   65% {
//     opacity: 0;
//   }
//   75% {
//     opacity: 0;
//   }
//   80% {
//     transform: translateY(14px);
//   }
//   85% {
//     transform: translateY(10px);
//   }
//   100% {
//     transform: translateY(5px);
//   }
// }
</style>
