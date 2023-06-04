<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBarView from './views/SideBarView.vue'
</script>

<template>
  <div id="row">
    <SideBarView id="sidebar" />
    <RouterView id="router" />
  </div>
</template>

<style>
#app {
  width: 960px;
  margin: 10px auto;
}
#row {
  display: flex;
}
#sidebar {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
</style>
