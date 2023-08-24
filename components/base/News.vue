<template>
  <div class="w-10 h-10 flex items-end relative lg:pl-0 mt-2 lg:mt-0">
    <div
      ref="dropdown"
      @click="menu = true"
      :class="{
        'w-8 h-8 lg:w-10 lg:h-10 absolute top-0 flex items-center justify-center overflow-hidden bg-[#9D283B] rounded-r-full rounded-b-full ease-in lg:duration-300 z-10 cursor-pointer':
          menu === false,
        'w-[392px] h-[548px] absolute top-0 -left-52 lg:left-0 flex items-start justify-end py-6 px-7 bg-white rounded-3xl ease-in lg:duration-300 z-30 drop-shadow-xl':
          menu === true,
      }"
    >
      <div v-if="menu === false" class="flex items-center">
        <div class="h-8 w-2 bg-[#9D283B] z-10"></div>
        <img
          class="h-6 w-6 lg:h-[30px] lg:w-[26px] swing"
          src="@/assets/images/bell.png"
        />
        <div class="h-8 w-2 bg-[#9D283B] z-10"></div>
      </div>
      <BaseButtonClose v-if="menu === true" @click.stop="menu = false" />
    </div>
    <div
      v-if="menu === false"
      class="w-2 h-2 lg:w-3 lg:h-3 bg-[#61B743] rounded-full ml-[24px] lg:ml-[27px] mb-2 lg:mb-[1px] z-20"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const menu = ref(false);
const dropdown = ref<HTMLElement | null>(null);
onClickOutside(dropdown, () => (menu.value = false));
</script>
<style lang="scss">
.swing {
  animation: swing 2.2s 2s ease-in-out infinite;
  transform-origin: 50% 4px;
}

@keyframes swing {
  0% {
    transform: rotate(0);
  }
  15% {
    transform: rotate(0);
  }
  30% {
    transform: rotate(35deg);
  }
  45% {
    transform: rotate(-45deg);
  }
  60% {
    transform: rotate(15deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  90% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
