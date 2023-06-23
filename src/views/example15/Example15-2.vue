<template>
  <div>
    <p>
      基于component标签，或者v-if指令判断。在父组件发出请求，绑定数据，判断组件是否返回，渲染不同组件。
      可以与具体逻辑决定是否使用store中的缓存数据，或将数据传入子组件。
    </p>
    <div>
      <component :is="active ? coursesView2 : loadingVue" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import { useExample15Store } from './Example15Store'
const coursesView2 = defineAsyncComponent(() => import('@/views/example15/CoursesView2.vue'))
const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))

const store = useExample15Store()
const active = ref(false)
store.listCourse2().then((r) => (active.value = r))
</script>
