<template>
  <div class="text-36px flex mt-50">
    <div
      @click="rename"
      class="mx-auto hover:(text-[red] text-46px font-semibold) flex items-center cursor-pointer"
    >
      <Icon name="mdi:alpha-f-box" class="m-4" />{{ userExtraData.username }}
    </div>
    <div class="mx-auto mt-20">
      <MongoUiAvatar
        src="https://upload.linkstarted.top/config/a9dd4d08d9a0f4ddc269f4f4290e8ec0.jpg"
      ></MongoUiAvatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore, globalStore } from "~/store/global";

const { userExtraData } = useGlobalStore();
const { rename } = globalStore();
definePageMeta({
  colorMode: "dark",
});
</script>

<style scoped></style>
