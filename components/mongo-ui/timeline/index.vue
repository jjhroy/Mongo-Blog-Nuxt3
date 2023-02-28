<template>
  <div>
    <div class="font-semibold text-[24px] mb-1 text-left">title</div>
    <div class="">
      <ul class="m-0 list-none">
        <li class="relative pb-2" v-for="(item, index) in list" :key="index">
          <div class="absolute left-1 h-full border border-l-2"></div>
          <div
            class="absolute bg-[#E4E7ED] left-[-1px] w-3 h-3 rounded-[50%] box-border flex justify-center items-center">
          </div>
          <div class="ml-4 text-[14px]">2018-04-15</div>
          <div class="ml-4 text-[16px]">Event start</div>
        </li>
      </ul>
    </div>
</div>
</template>

<script setup lang="ts">
const list = [1, 2, 3, 4]
const props = defineProps<{
  time?: string
}>()
</script>

<style scoped lang="scss">
.a-item {
  &::before {
    width: 0.75rem;
    height: 0.75rem;
    top: calc(1rem + 1.5 * 0.85rem / 2 - 0.75rem / 2);
    background: #dbdbdb;
    border-radius: 50%;
    content: '';
    display: block;
    position: absolute;
    left: calc(-0.375rem - 1.5rem - 0.25px);
  }
}
</style>
