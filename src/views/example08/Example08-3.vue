<template>
  <div>
    <h1>Getters</h1>
    <p>
      count+1, 但是声明的doubleCount属性计算count*2
      <br />
      <button @click="store.countS++">countS++</button>
      <br />
      {{ dCount }}/{{ store.countDouble }}
    </p>
    <p>
      getter绑定。声明组件所需要的组件，与state中保存的用户权限比较，确定是否显示
      <br />
      <button @click="changePre">changePre</button>
      <br />
      <span v-if="premission(1)">权限为一的用户</span>
      <span v-if="premission(2)">权限为2的用户</span>
    </p>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useExample08Stroe } from './Example08Store'

const store = useExample08Stroe()
console.log(store)

// 可引入为组件变量
// 返回的计算属性的结果，由于数据值为基本数据类型，需保证响应式
const dCount = storeToRefs(store).countDouble
console.log(dCount)

// 自动封装为组件计算属性
const premission = storeToRefs(store).premission
console.log(premission)

const changePre = () => (store.UserS.level = store.UserS.level == 1 ? 2 : 1)
</script>
