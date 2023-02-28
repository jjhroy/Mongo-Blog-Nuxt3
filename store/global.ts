import { GLOBAL_STORE } from '~/configs/store'
import { storeToRefs } from 'pinia'

export const globalStore = defineStore(GLOBAL_STORE, () => {
    const userExtraData = ref({ username: 'jjh' })
    const rename = () => {
        console.log('rename');

        userExtraData.value.username = 'roy'
    }
    return { userExtraData, rename }

}, {
    persist: {
        storage: persistedState.sessionStorage
    }
})

export const useGlobalStore = () => storeToRefs(globalStore())
