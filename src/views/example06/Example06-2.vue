<template>
  <div>
    <h1>Component Dynamic</h1>
    <p>通过component标签：is属性。动态绑定组件</p>
    <h1>keep-alive</h1>
    <p>
      keep-alive 标签，支持在组件在DOM中移除后缓存组件实例，再次加载时直接使用原实例，保存在元素中
    </p>
    <button type="button" @click="changeS = !changeS">切换</button>
    <br />
    <keep-alive>
      <component :is="changeS ? EmailLogin : NameLogin"></component>
    </keep-alive>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import NameLogin from './NameLogin.vue'
import EmailLogin from './EmailLogin.vue'

const changeS = ref(false)
</script>
