<template>
  <div>
    <p>{{ point }}/12</p>
    <div class="course">
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="courseSelect" :value="c" />
          {{ c.name }}-{{ c.point }}({{ c.term }})
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of courseSelect" :key="index">
        <label> {{ c.name }}-{{ c.point }}({{ c.term }}) </label>
        <br />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue'
import { type Course, listCourses } from './homework01'

const point = ref(0)
const c2 = listCourses().sort((a, b) => a.term - b.term)
const courses = ref<Course[]>(c2)
const courseSelect = ref<Course[]>([])
watch(courseSelect, () => {
  let count = 0
  courseSelect.value.forEach((c) => {
    count = count + c.point
  })
  point.value = count
  courseSelect.value.sort((a, b) => a.term - b.term)
})
</script>
<style scoped>
.course {
  border: 1px solid red;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>
