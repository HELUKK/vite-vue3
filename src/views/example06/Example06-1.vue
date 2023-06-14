<template>
  <div>
    <h1>load lazy Component</h1>
    <p>
      组件的延迟加载，许多组件在用户未操作时无需加载，可编译为单独的组件文件，这种文件代码的拆分可以降低文件的尺寸，提高渲染效率
      <br />
      about组件被编译为单独的组件文件，当符合条件时，浏览器请求下载组件文件，渲染。通过defineAsyncComponent()函数声明延迟加载的组件，函数用时提供延迟时间，过度组件等声明。
    </p>
    <p><button type="button" @click="showAbout = !showAbout">show about Component</button></p>
    <p v-if="showAbout">{{ about }}</p>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
const about = defineAsyncComponent(() => import('@/views/example06/AbuoutVue.vue'))
const showAbout = ref(false)
</script>
