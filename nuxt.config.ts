// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/color-mode',
        'nuxt-windicss',
        'nuxt-icon',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    // 自动引入 `usePinia()`
                    'defineStore',
                    // 自动引入 `usePinia()` 并重命名为 `usePiniaStore()`
                    ['defineStore', 'definePiniaStore'],
                ],
            },
        ],
        '@pinia-plugin-persistedstate/nuxt'
    ]
})
