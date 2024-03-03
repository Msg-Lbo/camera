import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      deviceId: '',
      page: 'camera',
      borderWidth: '0px',
      borderColor: 'red',
      rounded: false
    })
    const undateConfig = () => {}
    return { config, undateConfig }
  },
  {
    persist: true
  }
)
