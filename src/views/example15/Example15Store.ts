import { defineStore } from 'pinia'
import type { Course, ResultVO } from '@/datasource/Types'
import axios from '@/axios'
import { ref } from 'vue'

export const useExample15Store = defineStore('example15', () => {
  //预支持Suspense，异步加载组件必须包含awit阻塞函数
  //async函数自动将结果封装在Promise对象并且返回
  const listCourse1 = async () => {
    //mock请求延迟两秒
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>('courses')
    //返回子类型推导
    return resp.data.data.courses
  }
  //数据具体置于states还是返回组件，基于需求改变
  const coursesS = ref<Course[]>([])
  const listCourse2 = async () => {
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>('courses')
    coursesS.value = resp.data.data.courses
    return true
  }

  return {
    coursesS,
    listCourse1,
    listCourse2
  }
})
