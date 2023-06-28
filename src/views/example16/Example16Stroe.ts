import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExample16Store = defineStore('example16', () => {
  //模拟绑定。切换权限值设置
  const roles = ref('')
  const changeRoleA = () => {
    roles.value = roles.value == USER ? ADMIN : USER
  }
  return {
    roles,
    changeRoleA
  }
})
//默认权限值
export const USER = 'pe2f6'
export const ADMIN = '5gd9'
