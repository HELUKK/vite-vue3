<template>
  <div>
    <h>传参</h>
    <p>
      方法二，单实例。用户未必一定使用子组件，父组件通过v-if延迟加载按钮组件
      子组件为全部模态框，无需隐藏模态框，由父组件控制是否显示，单子组件必修修改父组件的展示数形变量。
      而子组件间无法直接修改父组件的数据。
      <br />
      子组件通过emit（）发出指定的事件通知，父组件注册指定事件通知，调用函数在父组件改变自己的数据
    </p>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>createTime</td>
        <td>operation</td>
      </tr>
      <tr v-for="(c, index) of coursesC" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ c.createTime }}</td>
        <td><button type="button" @click=";(courseEditR, c), (activeR, true)">edit</button></td>
      </tr>
    </table>
    <p>{{ courseEditedNameR }}</p>
    <editbutton2
      v-if="courseEditR"
      v-bind:course="courseEditR"
      @emitClose="activeR = false"
      @emitSubmit="onEditSubmit"
    />
  </div>
</template>
<script setup lang="ts">
import type { Course } from '@/datasource/Types'
import { ref, computed, defineAsyncComponent } from 'vue'
import { useExample09Stroe } from './Example09Store'
import { storeToRefs } from 'pinia'

const editbutton2 = defineAsyncComponent(() => import('./EditButton2.vue'))
const store = useExample09Stroe()
store.listCoursesA()
const coursesC = computed(() => store.coursesS)
const activeR = ref(false)
const courseEditedNameR = ref('')
const courseEditR = ref<Course>({})
const onEditSubmit = (name: string) => {
  activeR.value = false
  courseEditedNameR.value = name
}
</script>
