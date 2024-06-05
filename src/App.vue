<script setup>
import {RouterLink,RouterView } from 'vue-router'
import {ref} from 'vue'

const isNavOpen = ref(false)
</script>

<template>
  <nav class="flex items-center justify-between p-5 border-2 border-b-green-100">
    <div class="flex items-center space-x-2">
     <font-awesome-icon icon="fa-brands fa-github" class="h-10 w-10 text-green-300"/> 
      <h1 class="text-3xl font-medium text-green-300">Chidinma's Github.</h1>
    </div>
    <div class=" hidden space-x-2 sm:flex">
        <RouterLink to="/" active-class="text-black" class="text-green-400 border rounded-md hover:bg-green-100 p-2 bg-white hover:text-green-400">Home</RouterLink>
        <RouterLink to="/about" active-class="text-black" class="text-green-400 border rounded-md hover:bg-green-100 p-2 bg-white hover:text-green-400">About</RouterLink>
        <RouterLink to="/help" active-class="text-black" class="text-green-400 border rounded-md hover:bg-green-100 p-2 bg-white hover:text-green-400">Help</RouterLink>
    </div>
    <div class=" relative sm:hidden">
     <button @click="isNavOpen =!isNavOpen">
      <font-awesome-icon icon="fa-solid fa-bars" class="h-6 w-6 text-green-300"/>
    </button>
    <div v-show="isNavOpen" class="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50" role="menu">
      <RouterLink to="/" active-class="text-black" class="block px-4 py-2 text-sm text-green-400 hover:bg-green-100" role="menuitem">Home</RouterLink>
      <RouterLink to="/about" active-class="text-black" class=" block px-4 py-2 text-sm text-green-400 hover:bg-green-100" role="menuitem">About</RouterLink>
      <RouterLink to="/help" active-class="text-black" class=" block px-4 py-2 text-sm text-green-400 hover:bg-green-100 " role="menuitem">Help</RouterLink>
    </div>
    </div>
</nav>


<RouterView />
</template>

