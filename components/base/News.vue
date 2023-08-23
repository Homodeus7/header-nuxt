<template>
  <div class="w-10 h-10 flex items-end relative">
    <div
      ref="dropdown"
      @click="menu = true"
      :class="{
        'w-10 h-10 absolute top-0 flex items-center justify-center overflow-hidden bg-[#9D283B] rounded-r-full rounded-b-full ease-in lg:duration-300 z-10 cursor-pointer':
          menu === false,
        'w-[300px] h-[400px] absolute top-0 -left-52 lg:left-0 flex items-start justify-end py-6 px-7 bg-white rounded-3xl ease-in lg:duration-300 z-30 drop-shadow-xl':
          menu === true,
      }"
    >
      <div v-if="menu === false" class="flex">
        <div class="h-8 w-2 bg-[#9D283B]"></div>
        <img
          class="h-[30px] -z-10"
          :class="{ swing }"
          src="@/assets/images/bell.png"
        />
        <div class="h-8 w-2 bg-[#9D283B]"></div>
      </div>
      <BaseButtonClose v-if="menu === true" @click.stop="menu = false" />
    </div>
    <div
      v-if="menu === false"
      class="w-3 h-3 bg-[#61B743] rounded-full ml-7 z-20"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const menu = ref(false);
const swing = ref(false);
const dropdown = ref<HTMLElement | null>(null);
onClickOutside(dropdown, () => (menu.value = false));

const ringSwing = () => {
  swing.value = true;
  setTimeout(() => (swing.value = false), 5000);
};
onMounted(() => {
  ringSwing();
});
</script>
<style lang="scss">
.swing {
  animation: swing 2.2s ease-in-out;
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
