<template>
  <div>
    <h1>v-if</h1>
    <p v-if="userRef.level && userRef.level >= 4">此内容仅level >=4 可见</p>
    <p>vue3.0，input组件默认不会被复用了</p>
    <button type="button" v-on:click="changeInput">切换</button>
    <br />
    <template v-if="userNameLoginRef">
      <input placeholder="Enter your username" />
      <br />
      <input type="password" placeholder="Enter your password" />
    </template>
    <template v-else>
      <input placeholder="Enter your KEY" />
    </template>
    <hr />
    <h1>v-show</h1>
    <button type="button" v-on:click="changeClose">切换</button>
    <p v-show="closeRef">此内容仅close为TRUE可见</p>
  </div>
</template>
<script setup lang="ts">
import type { User } from '@/datasource/Types'
import { ref } from 'vue'
const userRef = ref<User>({ name: 'Li', level: 5 })
const closeRef = ref(true)
const userNameLoginRef = ref(true)
const changeInput = () => {
  userNameLoginRef.value = !userNameLoginRef.value
}
const changeClose = () => {
  closeRef.value = !closeRef.value
}
</script>
