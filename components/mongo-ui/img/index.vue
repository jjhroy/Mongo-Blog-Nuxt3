<template>
  <div :class="`w-[${width}] h-[${height}]`">
    <img
      v-if="!loadFail"
      ref="imgRef"
      class="w-full h-full"
      :src="src"
      :onerror="imgLoadFail"
    />
    <div v-else class="flex w-full h-full bg-[#f5f7fa]">
      <font-awesome-icon icon="image" class="m-auto text-[24px]" />
    </div>
  </div>
</template>

<script setup lang="ts">
const loadFail = ref(false)
const props = withDefaults(
  defineProps<{
    src: string
    width?: string
    height?: string
  }>(),
  {
    width: '300px',
    height: '200px',
  }
)
const imgRef = ref()
const imgLoadFail = () => {
  console.log(imgRef.value.src)
  loadFail.value = true
  imgRef.value.onerror = null //解绑onerror事件
  console.log('error')
}

const imgLoad = (value: any) => {
  console.log(value)
}
</script>

<style scoped></style>
