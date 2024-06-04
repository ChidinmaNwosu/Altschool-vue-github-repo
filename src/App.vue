<script setup>
import {RouterLink,RouterView } from 'vue-router'
</script>

<template>
  <nav class="flex items-center justify-between p-5 border-2 border-b-green-100">
    <div class="flex items-center space-x-2">
     <font-awesome-icon icon="fa-brands fa-github" class="h-10 w-10 text-green-300"/> 
      <h1 class="text-3xl font-medium text-green-300">Chidinma's Github.</h1>
    </div>
    <div class="flex space-x-2">
        <RouterLink to="/" active-class="text-black" class="text-green-400 border rounded-md hover:bg-green-100 p-2 bg-white hover:text-green-400">Home</RouterLink>
        <RouterLink to="/about" active-class="text-black" class="text-green-400 border rounded-md hover:bg-green-100 p-2 bg-white hover:text-green-400">About</RouterLink>
        <RouterLink to="/help" active-class="text-black" class="text-green-400 border rounded-md hover:bg-green-100 p-2 bg-white hover:text-green-400">Help</RouterLink>
    </div>
</nav>


<RouterView />
</template>

