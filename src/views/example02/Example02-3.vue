<template>
  <div>
    <h1>reactive()</h1>
    <p>
      reactive()函数，将对象转为响应式对象，不支持基本数据类型，number/boolean等。
      <br />
      {{ user.name }} / {{ user.insertTime }} / {{ user.address }}
      <br />
      按钮绑定的执行函数，在setup()中返回
      <br />
      userReact为代理对象，封装的user对象为响应式。但是，直接改变userReact引用的对象是无效的。
      <br />
      <button @click="changeUserWrong">changeUser not work</button>
      <br />
      刷新页面重新点击。只能修改user对象中的属性，且默认无法添加新属性，即无法获取新的address属性值
      <br />
      <button type="button" @click="changeUserRight">changeUserReact</button>

      <br />
      {{ userReact?.name }} / {{ userReact?.insertTime }} /
      {{ userReact?.address }}
    </p>
  </div>
</template>
<script setup lang="ts">
import type { User } from '@/datasource/Types'
import { reactive } from 'vue'
const user: User = {
  name: 'Li',
  insertTime: '2032-09-02T11:04:23'
}
const userAsync: User = {
  name: 'Chi',
  insertTime: '2032-09-02T11:04:23',
  address: '956'
}

let userReact = reactive(user)
console.log(userReact)
//修改对象引用的函数，在视图执行

//修改无效，改变对象的引用无法被跟踪
const changeUserWrong = () => {
  setTimeout(() => {
    userReact = userAsync
  }, 1000)
}

//修改对象的属性值，有效
const changeUserRight = () => {
  setTimeout(() => {
    userReact.name = userAsync.name
    userReact.address = userAsync.address
  }, 1000)
}
</script>
