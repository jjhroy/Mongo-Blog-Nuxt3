<template>
  <div class="w-20 h-20">
    <img :src="src" class="w-full h-full" :class="{ 'rounded-[50%]': round }" />
  </div>
</template>

<script setup lang="ts">
const size = ref();
const props = withDefaults(
  defineProps<{
    src: string;
    size?: number | string;
    round?: boolean;
  }>(),
  {}
);

if (typeof props.size === "string") {
  console.log("string");
}
</script>

<style scoped></style>
