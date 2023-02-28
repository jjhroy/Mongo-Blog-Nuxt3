<template>
  <m-popover :visible="visible">
    <template #default>
      <div
        ref="inputRef"
        :class="`border border-[#E0E0E6] py-[3px] px-[2px] text-left w-[300px] bg-[#fff]`"
        @click="onclick"
      >
        <m-tag
          v-for="(tag, index) in tagList"
          close
          @on-delete="deleteTag(index)"
          >{{ tag }}</m-tag
        >
        <input
          v-model="inputValue"
          type="text"
          class="border-none outline-none text-[12px] ml-2"
          @focus="onfocus"
          @blur="onblur"
          @keyup.enter="addTag"
        />
      </div>
    </template>
    <template #content>
      <m-tag
        v-for="(tag, index) in tagList"
        close
        @on-delete="deleteTag(index)"
        >{{ tag }}</m-tag
      >
    </template>
  </m-popover>
</template>

<script setup lang="ts">
import MTag from '@/components/mongo-ui/tag/index.vue'
import MPopover from '@/components/mongo-ui/popover/index.vue'

const inputRef = ref()
const inputValue = ref('')
const tagList = ref([] as string[])
const visible = ref(false)

const onclick = () => {
  //console.log(inputRef)
}

const onfocus = () => {
  inputRef.value.className =
    'border border-[#409eff] py-[3px] px-[2px] text-left w-[300px] bg-[#fff]'
  visible.value = true
}

const onblur = () => {
  inputRef.value.className =
    'border border-[#E0E0E6] py-[3px] px-[2px] text-left w-[300px] bg-[#fff]'
  visible.value = false
}

const addTag = () => {
  console.log(inputValue.value)
  if (
    tagList.value.indexOf(inputValue.value) === -1 ||
    tagList.value.length === 0
  ) {
    tagList.value.push(inputValue.value)
    console.log('pish')
  }
  inputValue.value = ''
}

const deleteTag = (index: number) => {
  tagList.value.splice(index, 1)
}
</script>

<style scoped></style>
