<template>
  <div>
    <router-view name="button" />
    <ul>
      <li><router-link to="/example12-1">about</router-link></li>
      <li><router-link to="/example12-1/course">Course</router-link></li>
      <li><RouterLink to="/homework">homework</RouterLink></li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
ul li {
  display: inline-block;
  padding: 5px;
}
</style>
