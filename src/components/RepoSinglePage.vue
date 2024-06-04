<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const singleRepo = ref({})
const isLoading = ref(false)
const error = ref(null)

onMounted(() => {
  isLoading.value = true;
  fetch(`https://api.github.com/repos/ChidinmaNwosu/${route.params.name}`)
    .then((res) =>{ 
      if(!res.ok){
        throw new Error('Failed to fetch repository')
      }
      return res.json()
})
    .then((data) => {
      console.log(data)
      singleRepo.value = data
    })
    .catch((err) => {
      error.value = err.message
    })
    .finally(() => {
      isLoading.value = false;
    })
})
</script>

<template>
  <div class="h-[70%] w-[30%] border-8 rounded-lg border-green-100 mx-auto mt-40 font-light">
    <div :key="singleRepo.id" class="flex flex-col p-4 gap-3">
      <h2 class="font-bold">{{ singleRepo.name }}</h2>

      <p><font-awesome-icon icon="fa-solid fa-code-fork" class="text-green-400"/> Forks: {{ singleRepo.forks }}</p>

      <p><font-awesome-icon icon="fa-solid fa-star" class="text-green-400"/> Stars: {{ singleRepo.stargazers_count }}</p>

      <p><font-awesome-icon icon="fa-solid fa-code-branch" class="text-green-400" /> Branch: {{ singleRepo.branch }}</p>

     <p><font-awesome-icon icon="fa-regular fa-eye" class="text-green-400"/> Watchers: {{ singleRepo.watchers }}</p>
     </div>
     <div>
    <a target="_blank" :href="singleRepo.html_url" class="p-5 mb-2 hover:text-green-400 hover:font-small" >Open on GitHub</a>
  </div>
  </div>
</template>
