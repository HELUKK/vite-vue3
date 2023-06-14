<template>
  <div>
    <h1>Pinia</h1>
    <img src="https://pinia.vuejs.org/logo.svg" alt="pinia" style="width: 100px" />
    <br />
    https://pinia.vuejs.org/introduction.html
    <br />
    Pinia是代替vuex的下一代状态管理库，更加简洁高效
    <br />
    按官方建议，每一个state数据有一个文件维护，利于构件时打包。
    <hr />
    <h1>States</h1>
    第一个数字没有变化，基本数据类型直接引用为组件变量后，失去响应性。
    <br />
    第二个数字，store是响应式，可以直接绑定到视图
    <br />
    {{ countUnresponsive }}/{{ store.countS }} <br />
    <button type="button" @click="increment">increment</button>
    <hr />
    <h1>storeToRefs</h1>
    可替代computed函数，从store对象中解构出state数据并保持响应式
    <br />
    {{ countRef }}/ {{ countC }}
  </div>
</template>
<script setup lang="ts">
import { useExample08Stroe } from './Example08Store'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

const store = useExample08Stroe()
//store为proxy代理对象，因此stroe为响应式对象
console.log(store)

//获取store中的const数据，非响应式数据
const countUnresponsive = store.countS
//store为响应式数据
console.log(store.countS)

const increment = () => store.countS++

// 可通过storeToRefs()函数将state中数据转为Ref响应式类型
// 解构出
// const { count } = storeToRefs(store)
// 或直接获取
const countRef = storeToRefs(store).countS
//也可以通过计算属性绑定
const countC = computed(() => store.countS)
//Ref类型响应式数据
console.log(countRef)
</script>
