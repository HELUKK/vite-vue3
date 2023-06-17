<template>
  <div>
    <h1>组件化设计和传参</h1>
    <p>
      组件粒度过粗包含过多内容，会使组件不利于维护，可将部分内容合理分割设计为独立组件
      <br />
      但组件粒度过细会导致成本增加
    </p>
    <p>
      传入的参数可以是代理对象，父组件改变数据时，子组件响应式改变
      <br />
      <button type="button" @click="changeItemF">changeItem</button>
    </p>
    <item v-for="(c, index) of coursesC" :key="index" :course="c" />
  </div>
</template>
<script setup lang="ts">
import item from './ItemView.vue'
import { storeToRefs } from 'pinia'
import { useExample09Stroe } from './Example09Store'

const store = useExample09Stroe()
store.listCoursesA()
const coursesC = storeToRefs(store).coursesS
const changeItemF = () => {
  store.coursesS?.forEach((c) => (c.name = '响应式改变'))
}
</script>
