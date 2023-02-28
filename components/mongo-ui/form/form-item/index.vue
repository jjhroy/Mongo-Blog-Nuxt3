<template>
  <div class="flex mb-6 items-center">
    <label
      class="w-[120px] font-semibold mr-4 text-[14px] text-[#606266] inline-flex justify-end items-start"
      v-if="label"
    >
      {{ label }}
    </label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label?: string }>()
</script>

<style scoped></style>
