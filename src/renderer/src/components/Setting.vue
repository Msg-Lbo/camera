<template>
  <main class="bg-[#2c3e50] w-screen h-screen">
    <div class="p-5">
      <h2
        class="text-gray-50 mt-5 mb-2 text-center text-sm leading-[20px] h-[20px] opacity-7 title"
      >
        参数设置
      </h2>
      <div class="flex flex-col gap-3">
        <el-select v-model="config.deviceId" placeholder="请选择摄像头">
          <el-option
            v-for="camera in cameras"
            :key="camera.deviceId"
            :label="camera.label"
            :value="camera.deviceId"
          ></el-option>
        </el-select>
        <el-input v-model="config.borderWidth" placeholder="边框宽度" clearable></el-input>
        <el-input v-model="config.borderColor" placeholder="边框颜色" clearable></el-input>
      </div>
      <a
        href="https://space.bilibili.com/39806072"
        target="_blank"
        class="text-center absolute bottom-[20px] opacity-70 text-xs text-teal-100 hover:text-yellow-400"
      >
        绕远路的出租车司机
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter((device) => device.kind === 'videoinput')
import { useConfigStore } from '@renderer/stores/useConfigStore'
const { config } = useConfigStore()
</script>

<style lang="scss" scoped></style>
