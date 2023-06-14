<template>
  <div>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交。即，等于2项时未选checkboxes变为不可用状态，已选仍为可用状态；不同意，全部为不可用状态。
    </p>
    <p>
      每一个checkbox的可用状态，由当前是否选中/已选数量/是否同意决定，因此必须动态获取checkbox元素对象本身。
      <br />
      HTML元素通过ref属性绑定数组，将HTML元素存入。
    </p>
    <form>
      <lable>
        <input type="checkbox" v-model="agreeRef" />
        同意条款
      </lable>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" ref="checkboxs" v-model="sCoursesRef" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br /><button type="button" :disabled="!agreeRef || sCoursesRef.length < amount">
        submit
      </button>
      <p>{{ sCoursesRef }}</p>
    </form>
  </div>
</template>
<script setup lang="ts">
import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/datasource/Types'
import { onMounted, ref, watch } from 'vue'

//模拟曾经选过的数据
const selectedCourse: Course[] = [{ id: 7 }]
//将所有动态创建的checkbox元素装入数组
const checkboxboxs: HTMLInputElement[] = []
//模拟总数
const amount = 2
//将拉取的曾选中的数据转为响应式
const sCoursesRef = ref<Course[]>(selectedCourse)
//同意
const agreeRef = ref(false)
//仅渲染，无需响应式
const courses = listCourses()
//在挂载到DOM节点后监听，确保checkbox已绑定ref属性
onMounted(() => {
  //支持同时监听多个响应式数据
  watch(
    [agreeRef, sCoursesRef],
    () => {
      checkboxboxs.forEach(
        (c) => (c.disabled = !agreeRef.value || (sCoursesRef.value.length >= amount && !c.checked))
      )
    },
    { immediate: true }
  )
})
</script>
