import { USER } from '@/datasource/Const'
import type { User } from '@/datasource/Types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useExample08Stroe = defineStore('example08', () => {
  const countS = ref(0)
  const increment = () => countS.value++
  const UserS = ref<User>({ name: 'Li', address: '818', level: 1 })

  //example08-2
  const updateUserA = (UserA: User) => {
    UserS.value.name = UserA.name
    UserS.value.address = UserA.address
  }
  //example08-3
  const countDouble = computed(() => countS.value * 2)
  //基于传入的权限，与state中的用户权限进行动态的计算比较
  const premission = computed(() => (level: number) => UserS.value?.level == level)
  return {
    countS,
    increment,
    UserS,
    updateUserA,
    countDouble,
    premission
  }
})
