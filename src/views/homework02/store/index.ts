import { defineStore } from 'pinia'
import { listShops, getShop, type Order, type Shop } from '../data/homework02'
import { ref } from 'vue'

export const useH2Store = defineStore('h2', () => {
  const shopList = ref<Shop[]>([])
  const shopCsches = ref<Shop[]>([])
  const orderS = ref<Order[]>([])
  const listShopsA = async () => {
    if (shopList.value.length == 0) {
      setTimeout(() => {
        shopList.value = listShops()
      }, 1000)
    }
  }
  const getShopA = async (sid: number) => {
    setTimeout(() => {
      const shop = getShop(sid)
      shop && shopCsches.value.push(shop)
    }, 1000)
  }

  return {
    shopList,
    shopCsches,
    orderS,
    listShopsA,
    getShopA
  }
})
