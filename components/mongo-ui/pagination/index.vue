<template>
  <div class="flex items-center">
    <button v-if="arrow" :class="`mr-4 ${isFirstPage() ? 'cursor-not-allowed' : 'cursor-pointer'
      } `" :disabled="isFirstPage()" @click="pageChange(1)">
      <font-awesome-icon icon="angle-left" />
    </button>
    <div v-if="Math.ceil(props.total / props.pageSize) <= 6" class="flex">
      <div v-for="i in Math.ceil(props.total / props.pageSize)" :key="i" :class="`w-[30px] h-[30px] mx-1 text-center cursor-pointer rounded-sm ${isCurrent(
        i
      )}`" @click="pageChange(3, i)">
        <span class="leading-[30px]">{{ i }}</span>
      </div>
    </div>
    <div v-else class="flex">
      <div v-for="i in Math.ceil(props.total / props.pageSize)" :key="i" :class="`w-[30px] h-[30px] mx-1 text-center cursor-pointer rounded-sm ${isCurrent(
        i
      )}`" @click="pageChange(3, i)">
        <span v-if="i === Math.ceil(props.total / props.pageSize) - 1">.....</span>
        <span v-else class="leading-[30px]">{{ i }}</span>
      </div>
    </div>
    <button v-if="arrow" :class="`ml-4 ${isLastPage() ? 'cursor-not-allowed' : 'cursor-pointer'} `" @click="pageChange(2)"
      :disabled="isLastPage()">
      <font-awesome-icon icon="angle-right" />
    </button>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['page-change', 'update:currentPage'])
const props = defineProps<{
  total: number
  pageSize: number
  currentPage: number
  arrow?: boolean
}>()
const isCurrent = (index: number) =>
  props.currentPage === index
    ? 'bg-[#3273DC] text-[#FFF]'
    : 'bg-[#FFF] text-[#555]'
const isFirstPage = () => (props.currentPage === 1 ? true : false)
const isLastPage = () =>
  props.currentPage === Math.ceil(props.total / props.pageSize) ? true : false
const preOrNext = (type: number) =>
  type == 1 ? props.currentPage - 1 : props.currentPage + 1
const pageChange = (type: number, page?: number) => {
  if (type === 3) {
    emits('page-change', page)
    emits('update:currentPage', page)
  } else {
    emits('page-change', preOrNext(type))
    emits('update:currentPage', preOrNext(type))
  }
}
</script>

<style scoped></style>
