<template>
  <div>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useExample15Store } from './Example15Store'

const store = useExample15Store()
//预支持Suspense，必须包含awit函数，异步加载组件
//可基于具体逻辑决定是否使用store中的对象
const courses = await store.listCourse1()
</script>
