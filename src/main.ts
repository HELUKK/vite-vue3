import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import.meta.env.DEV && (await import('@/mock/index'))

createApp(App).use(router).use(createPinia()).mount('#app')
