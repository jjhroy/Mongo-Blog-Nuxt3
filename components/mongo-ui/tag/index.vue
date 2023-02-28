<template>
  <div class="inline-block px-2 py-1 mx-[2px] bg-[#FAFAFC] text-[12px]">
    <span class="flex items-center">
      <slot></slot>
      <font-awesome-icon
        v-if="close"
        @click="deleteTag"
        icon="xmark"
        class="ml-2 cursor-pointer rounded-[50%] text-[12px]"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  close?: boolean
}>()

const emits = defineEmits(['onDelete'])

const deleteTag = () => {
  emits('onDelete')
}
</script>

<style scoped></style>
