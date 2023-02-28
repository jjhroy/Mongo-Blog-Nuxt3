<template>
  <div
    class="w-10 p-0.5 rounded-full h-5 flex items-center relative cursor-pointer"
    :class="{
      'bg-[#409eff]': props.type === 'reverse' ? !isEnable : !!isEnable,
      'bg-gray-300': props.type === 'reverse' ? !!isEnable : !isEnable,
    }"
    @click="onClick()"
  >
    <div
      class="w-4 h-4 rounded-full bg-white absolute"
      :class="{
        enable: props.type === 'reverse' ? !isEnable : !!isEnable,
        disabled: props.type === 'reverse' ? !!isEnable : !isEnable,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { isBoolean, isNumber } from 'lodash-es'

const props = defineProps<{
  isEnable: boolean | number
  type?: 'default' | 'reverse' // default 为 0 false 不亮  1 true 亮 ，， reverse相反
}>()

const emits = defineEmits(['update:isEnable'])
const onClick = () => {
  let value: boolean | number = false
  if (isNumber(props.isEnable)) {
    props.isEnable === 0 ? (value = 1) : (value = 0)
  } else if (isBoolean(props.isEnable)) value = !props.isEnable
  emits('update:isEnable', value)
}
</script>

<style lang="scss" scoped>
@keyframes show {
  from {
    left: 3px;
  }

  to {
    left: 50%;
  }
}

@keyframes reverseShow {
  from {
    left: 50%;
  }

  to {
    left: 3px;
  }
}

.enable {
  animation-duration: 0.3s;
  animation-name: show;
  animation-iteration-count: 1;
  animation-direction: alternate;
  right: 3px;
}

.disabled {
  animation-duration: 0.3s;
  animation-name: reverseShow;
  animation-iteration-count: 1;
  animation-direction: alternate;
  left: 3px;
}
</style>
