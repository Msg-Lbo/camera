<template>
  <main>
    <!-- <div class="move-body absolute w-screen h-[50px]"></div> -->
    <div
      class="s-screen h-screen overflow-hidden"
      :style="`border: solid ${config.borderWidth} ${config.borderColor}`"
    >
      <video
        class="object-cover h-full"
        :class="{ 'rounded-full': config.rounded, 'bg-slate-500': noSource }"
      ></video>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
const noSource = ref(false)
const init = () => {
  const constraints = {
    audio: false,
    video: {
      deviceId: config.deviceId,
      width: config.rounded ? 300 : 500,
      height: config.rounded ? 300 : 280
    }
  } as MediaStreamConstraints
  const video = document.querySelector('video')!
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      video.srcObject = stream
      video.play()
    })
    .catch((_err) => {
      noSource.value = true
    })
}
onMounted(() => {
  init()
})
</script>

<style lang="scss" scoped>
</style>
