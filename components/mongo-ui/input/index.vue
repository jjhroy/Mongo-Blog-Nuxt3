<template>
  <div
    :class="`relative flex items-center bg-[#fff] 
    w-[${width}px]
    rounded-[${rounded ? '24px' : ''}] 
    h-[${resolveSize(size)}px] ${border ? 'border' : ''} border-[#E0E0E6]`"
  >
    <div v-if="prefix" class="pl-2">
      <slot name="prefix">
        <font-awesome-icon :icon="prefix" />
      </slot>
    </div>
    <input
      :type="
        type === 'password' ? (isShowPassword ? 'text' : 'password') : 'text'
      "
      :placeholder="placeholder"
      :class="`
      w-full
      rounded-[${rounded ? '24px' : ''}] 
      h-[30px]
      text-base tracking-wider outline-none px-2`"
      :value="value"
      @input="inputHandler"
    />
    <div
      v-if="suffix || type === 'password'"
      @click="showPassword"
      class="cursor-pointer pr-2"
    >
      <slot name="suffix">
        <font-awesome-icon
          :icon="
            type === 'password'
              ? isShowPassword
                ? 'eye'
                : 'eye-slash'
              : suffix
          "
        />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value?: string
    prefix?: string
    suffix?: string
    rounded?: boolean
    width?: number
    placeholder?: string
    size?: string
    type?: string
    border?: boolean
  }>(),
  {
    value: '',
    width: 240,
    rounded: false,
    prefix: '',
    suffix: '',
    placeholder: '请输入',
    size: 'default',
    type: 'text',
    border: true,
  }
)
const emits = defineEmits(['update:value'])
const isShowPassword = ref(false)
const inputHandler = (e: any) => {
  //更新输入值
  emits('update:value', e.target.value)
}
const showPassword = () => {
  isShowPassword.value = !isShowPassword.value
}
enum Size {
  small = 'small',
  default = 'default',
  lager = 'lager',
}

const SizeMap = {
  [Size.small]: 28,
  [Size.default]: 34,
  [Size.lager]: 40,
}
//@ts-ignore
const resolveSize = (size: string) => `${SizeMap[size]}`
</script>

<style scoped></style>
