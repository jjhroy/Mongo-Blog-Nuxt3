<template>
  <!-- 遮罩层-->
  <div
    v-if="visible"
    @click="closeModal(true)"
    class="fixed top-0 left-0 h-full w-full"
    style="background: rgba(0, 0, 0, 0.5)"
    ref="maskRef"
  ></div>
  <!--MODAL-->
  <transition name="fade">
    <div
      v-show="visible"
      @click.stop
      :class="`${
        paddingHide ? '' : 'p-4'
      } fixed top-0 bottom-0 left-0 right-0 m-auto 
    w-[600px]
    h-[${height}px]
    bg-white rounded-md flex flex-col`"
    >
      <slot name="header" v-if="header">
        <div class="flex">
          <span class="font-semibold text-lg">{{ props.title }}</span>
          <font-awesome-icon
            icon="xmark"
            class="ml-auto text-lg cursor-pointer"
            @click="closeModal"
          />
        </div>
      </slot>
      <slot name="body"> this is a message </slot>

      <slot name="footer" v-if="footer">
        <div class="flex mt-auto">
          <div class="ml-auto">
            <blog-button>取消</blog-button>
            <blog-button class="ml-2" type="primary">确认</blog-button>
          </div>
        </div>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import BlogButton from '../button/index.vue'

const maskRef = ref()
const emits = defineEmits(['update:visible'])
const props = withDefaults(
  defineProps<{
    title?: string
    visible: boolean
    header?: boolean
    footer?: boolean
    maskClose?: boolean
    paddingHide?: boolean
    width?: number
    height?: number
  }>(),
  {
    title: 'Title',
    visible: false,
    header: true,
    footer: true,
    maskClose: true,
    paddingHide: false,
    width: 600,
    height: 400,
  }
)
const closeModal = (allow: boolean) => {
  if (allow) {
    emits('update:visible', false)
  }
}

const stopHandler = (event: any) => {
  console.log(event)
}

watch(props, () => {
  if (props.visible) {
    document.body.setAttribute('style', 'overflow-x:hidden;overflow-y:hidden;')
  } else {
    document.body.setAttribute('style', 'overflow-x:auto;overflow-y:auto;')
  }
})
</script>

<style scoped lang="scss">
.modal {
  animation: fadeIn 0.4s linear;
}
.modal-out {
  animation: fadeOut 0.4s linear;
}

.fade-enter-active,
.fade-leave-active {
  animation: fadeIn 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  animation: fadeOut 0.5s linear;
}

@keyframes fadeIn {
  0% {
    transform: translateX(60px);
    opacity: 0.7;
  }
  25% {
    transform: translateX(40px);
    opacity: 0.8;
  }
  50% {
    transform: translateX(20px);
    opacity: 0.9;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  25% {
    transform: translateX(-20px);
    opacity: 0.5;
  }
  50% {
    transform: translateX(-40px);
    opacity: 0.25;
  }
  100% {
    transform: translateX(-60px);
    opacity: 0;
  }
}
</style>
