<template>
  <blog-button type="circle" @click="backTop" v-show="btnFlag">
    <font-awesome-icon icon="angle-up" />
  </blog-button>
</template>

<script setup lang="ts">
import BlogButton from '../button/index.vue'

const scrollTop = ref(0)
const btnFlag = ref(false)
const backTop = () => {
  let timer = setInterval(() => {
    let moveSpeed = Math.floor(-scrollTop.value / 5)
    document.documentElement.scrollTop = document.body.scrollTop =
      scrollTop.value + moveSpeed
    if (scrollTop.value === 0) {
      clearInterval(timer)
    }
  }, 16)
}

// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
const scrollToTop = () => {
  scrollTop.value =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  if (scrollTop.value > 0) {
    btnFlag.value = true
  } else {
    btnFlag.value = false
  }
}

window.addEventListener('scroll', scrollToTop)
</script>

<style scoped lang="scss"></style>
