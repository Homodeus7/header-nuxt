<template>
  <div
    class="burger w-8 h-8 lg:w-14 lg:h-14 border-2 border-[#3f3f3f] flex items-center justify-center rounded-full cursor-pointer ease-linear duration-200"
  >
    <div
      class="burger_icon w-4 h-2 lg:w-6 lg:h-3 flex flex-col justify-between"
    >
      <span
        class="burger_first w-full h-[2px] bg-[#3f3f3f] ease-linear duration-200"
      ></span>
      <span
        class="burger_second w-full h-[2px] bg-[#3f3f3f] ease-linear duration-200"
      ></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.burger_menu .burger_first {
  transform: translateY(3px) rotate(45deg);
}
.burger_menu .burger_second {
  transform: translateY(-3px) rotate(-45deg);
}
@media (min-width: 1024px) {
  .burger_menu .burger_first {
    transform: translateY(5px) rotate(45deg);
  }
  .burger_menu .burger_second {
    transform: translateY(-5px) rotate(-45deg);
  }
}
.burger_menu .burger {
  width: 30px;
}
@media (min-width: 1024px) {
  .burger:hover {
    transform: scale(1.15);
  }
  .burger:hover .burger_icon {
    animation: appearance 0.2s;
    transform: scale(0.9);
  }
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
