<template>
  <div>
    <ul>
      <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useExample15Store } from './Example15Store'

const store = useExample15Store()
const coursesR = storeToRefs(store).coursesS
</script>
