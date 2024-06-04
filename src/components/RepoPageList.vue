<script setup>
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'

const repos = ref([])
const isLoading = ref(false)
const error = ref(null)
//Ref for my pagination
const page = ref(1)
const perPage = 4

const prevPage = () => {
  if (page.value > 1) {
    page.value--
    fetchRepo(page.value, perPage)
  }
}

const nextPage = () => {
  page.value++
  fetchRepo(page.value, perPage)
}

const fetchRepo =(page, perPage) => {
  isLoading.value = true
  fetch(`https://api.github.com/users/ChidinmaNwosu/repos?page=${page}&per_page=${perPage}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch repositories')
      }
      return res.json()
    })
    .then((data) => {
      console.log(data)
      repos.value = data
    })
    .catch((err) => {
      error.value = err.message
    })
    .finally(() => {
      isLoading.value = false
    })
}

onMounted(() => {
  fetchRepo(page.value, perPage)
})

//Ref for search bar
const search = ref('')

const filteredRepos = computed(() => {
  if (search.value) {
    return repos.value.filter((repo) => repo.name.includes(search.value))
  } else {
    return repos.value
  }
})
</script>

<template>
  <div class="font-light">
    <input
      v-model="search"
      type="text"
      placeholder="Search repositories..."
      class="my-4 mx-32 border-2 rounded-md focus:outline-none border-green-300 p-2 w-[50%]"
    />
  </div>
  <!--To give my repo page a spinner when it is still loading-->
  <div v-if="isLoading" class="flex justify-center items-center h-[100vh]">
    <div class="spinner">
      <font-awesome-icon icon="fa-solid fa-spinner" spin size="10x" style="color: #63e6be" />
    </div>
  </div>

  <div v-else class="flex flex-col mx-auto items-center w-[80%] h-full border-2 mt-10 bg-slate-200 font-light">
    <div class="h-[50%] w-[50%] bg-white border-8 border-green-300 mt-10 mb-10 py-5 px-5 break-words" v-for="repo in filteredRepos" :key="repo.id">
      <RouterLink :to="`/repopage/${repo.name}`" class="py-3 font-bold hover:underline">{{repo.name}}</RouterLink>
      <p class="">language: {{ repo.language }}</p>
      <p class="mt-2">Date & Time: {{ repo.created_at }}</p>
      <p class="mt-2">Visibility: {{ repo.visibility }}</p>
    </div>
  </div>

  <!--My next and prev button-->
  <div class="text-center font-light">
    <button
      class="border-2 rounded-md border-green-300 p-2"
      @click="prevPage"
      type="button"
      :disabled="page === 1"
    >
      Prev
    </button>
    <button class="border-2 rounded-md border-green-300 p-2 m-2" @click="nextPage" type="button">
      Next
    </button>
  </div>
</template>
