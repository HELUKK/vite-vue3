<template>
  <div>
    <h1>defineExpose()</h1>
    <p>父组件通过ref属性绑定获取子组件的引用，但仅能使用子组件暴露的类型</p>
    <p><button @click="exposeR?.stopLoop">执行子组件暴露出的函数</button></p>
    <p>{{ exposeR?.userR?.name }}</p>
    <editbutton3 ref="exposeR" />
    <hr />
    <p>
      父组件可以双向绑定自组件暴露的属性
      <br />
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import editbutton3 from '@/views/example09/EditButton3.vue'

//声明绑定的类型与组件暴露的类型相同
const exposeR = ref<{ userR?: { name: '' }; stopLoop?: () => void }>({})
</script>
