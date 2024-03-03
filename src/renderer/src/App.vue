<template>
  <Suspense>
    <main class="group relative" @contextmenu="quit">
      <section>
        <SettingIcon
          v-if="config.page == 'camear'"
          theme="outline"
          size="24"
          class="absolute top-[10px] left-[50%] -translate-x-[50%] text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="config.page = 'setting'"
        />

        <CameraFive
          v-else
          theme="outline"
          size="24"
          class="absolute top-[10px] left-[50%] -translate-x-[50%] text-white opacity-80 cursor-pointer z-10"
          @click="config.page = 'camear'"
        />

        <InnerShadowTopLeft
          v-if="config.page == 'camear'"
          theme="outline"
          size="24"
          class="absolute bottom-[10px] left-[50%] -translate-x-[50%] text-white opacity-80 cursor-pointer z-10 hidden group-hover:block"
          @click="changeRound"
        />
      </section>
      <section>
        <Transition name="fade">
          <template v-if="config.page == 'camear'">
            <Camera />
          </template>
          <template v-else>
            <Setting />
          </template>
        </Transition>
      </section>
    </main>
  </Suspense>
</template>
<script setup lang="ts">
import Setting from './components/Setting.vue'
import Camera from './components/Camera.vue'
import { Setting as SettingIcon, CameraFive, InnerShadowTopLeft } from '@icon-park/vue-next'
import { useConfigStore } from '@renderer/stores/useConfigStore'
import useDrag from './composables/useDrag'

// 拖拽窗口
const { drag } = useDrag()
drag.run()
const { config } = useConfigStore()
const quit = () => {
  window.api.quit()
}
const changeRound = () => {
  config.rounded = !config.rounded
  if (config.rounded) {
    window.api.setWindowSize({ aspectRatio: 1, width: 300, height: 300 })
  } else {
    window.api.setWindowSize({ aspectRatio: 16 / 9, width: 500, height: 280 })
  }
  location.reload()
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
