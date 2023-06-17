import type { Course } from '@/datasource/Types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import { listCourses } from '@/datasource/DataSource'

export const useExample09Stroe = defineStore('example09', () => {
  const coursesS = ref<Course[]>([])
  const listCoursesA = () => {
    const listCoursesB = listCourses()
    coursesS.value = listCoursesB
  }
  return { coursesS, listCoursesA }
})
