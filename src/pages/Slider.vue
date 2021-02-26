<template>
  <div class="w-full flex flex-wrap relative">
    <div
      v-for="(slider, index) in sliders"
      :key="slider"
      class="w-full absolute"
    >
      <transition name="fade">
        <div
          v-if="currentSlide == index"
          :class="slider"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="absolute w-full" style="height: 340px">
      <div class="absolute bottom-0 flex justify-center w-full">
        <div
          v-for="(item, index) in sliders"
          :key="item"
          class="w-4 h-4 rounded-full mx-2 cursor-pointer"
          :class="currentSlide == index ? 'bg-green-900' : 'bg-green-300'"
          @click="makeActive(index)"
        ></div>
      </div>
    </div>
    <!-- <div class="my-10 flex w-full">
      <div class="m-auto">
        <transition name="fade">
          <h1 v-if="isTitleShow">Slider Carousel</h1>
        </transition>

        <button @click="isTitleShow = !isTitleShow" class="px-2 rounded border">
          Toggle Text
        </button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-red-600"],
      interval: "",
      isTitleShow: true,
    };
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>