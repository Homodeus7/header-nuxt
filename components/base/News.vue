<template>
  <div class="w-10 h-10 flex items-end relative">
    <div
      ref="dropdown"
      @click="menu = true"
      :class="{
        'absolute top-0 w-10 h-10 flex items-center justify-center overflow-hidden bg-[#9D283B] rounded-r-full rounded-b-full ease-in duration-200 z-20':
          menu === false,
        'absolute top-0 w-[300px] h-[400px] flex items-start justify-end py-6 px-7 bg-white rounded-3xl ease-in duration-200 z-20 drop-shadow-xl':
          menu === true,
      }"
    >
      <div v-if="menu === false">
        <img src="@/assets/images/bell.png" />
      </div>
      <BaseButtonClose v-if="menu === true" @click.stop="menu = false">
      </BaseButtonClose>
    </div>
    <div
      v-if="menu === false"
      class="w-3 h-3 bg-[#61B743] rounded-full ml-7 duration-500 z-20"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const menu = ref(false);
const dropdown = ref<HTMLElement | null>(null);
onClickOutside(dropdown, () => (menu.value = false));
</script>
