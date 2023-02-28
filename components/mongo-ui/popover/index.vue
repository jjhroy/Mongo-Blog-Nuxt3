<template>
  <div class="relative flex flex-col mt-2">
    <!-- <blog-button @click="isShow = !isShow">popover</blog-button> -->
    <slot name="default"></slot>
    <div
      v-show="props.visible"
      class="absolute top-[37px] left-[50%] transform translate-x-[-50%]"
    >
      <div class="overflow-hidden">
        <div
          class="bg-[#fff] h-4 w-4 transform rotate-45 mx-auto translate-y-2 arrow"
        ></div>
      </div>
      <div class="bg-[#fff] h-full min-w-[300px] p-2 rounded-md shadow-lg">
        <slot name="content"></slot>
      </div>
    </div>

    <!-- <div class="relative popover mt-2 w-100 z-1000" v-show="isShow">
      <div
        class="absolute top-auto right-0 left-0 bottom-full h-[10px] flex overflow-hidden w-100"
      >
        <div
          class="bg-[#fff] h-4 w-4 transform rotate-45 mx-auto translate-y-1 arrow"
        ></div>
      </div>
      <div class="bg-[#fff] h-full w-full p-2">sss</div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import BlogButton from '../button/index.vue'
const props = defineProps<{ visible: boolean }>()
const isShow = ref(false)
</script>

<style scoped>
.popover {
  animation: popoverShow 0.2s ease-in;
}
.arrow {
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 12%);
}
@keyframes popoverShow {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>
