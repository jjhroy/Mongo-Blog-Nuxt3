<template>
  <div v-if="visible" ref="messageRef"
    class="mongo-message shadow-around  absolute min-w-[120px] max-w-max h-[40px] bg-white top-8 left-[50%] transform translate-x-[-50%] p-1 l flex items-center  justify-center rounded-lg">
    <font-awesome-icon v-if="type === 'success'" icon="check" class="mr-2 text-[#50a14f]" />
    <font-awesome-icon v-else icon="xmark" class="mr-2 text-[#c91243]" />
    <span> {{ msg }}</span>
  </div>
</template>

<script setup lang="ts">
const messageRef = ref()
const visible = ref(true)
const show = ref(false)
defineProps<{ type: string, msg?: string }>()
onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, 2000)
})


</script>

<style scoped lang="scss">
.mongo-message {
  animation: message-out ease-in-out 2s;
}


@keyframes message-out {
  0% {
    opacity: 1;
  }

  20% {
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  60% {
    opacity: 0.9;
  }

  80% {
    opacity: 0.4;
  }

  100% {
    opacity: 0;
  }
}
</style>
