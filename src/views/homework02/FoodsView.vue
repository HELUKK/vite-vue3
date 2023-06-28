<template>
  <div>
    <p>附近的美食</p>
    <div v-for="(shop, index) of shopList" :key="index">
      <router-link :to="`/homework02/shops/${shop.id}`">
        <div>
          <h4>{{ shop.name }}</h4>
          评分：{{ shop.point }}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useH2Store } from './store'
const store = useH2Store()
store.listShopsA()

const shopList = computed(() => store.shopList)
</script>
