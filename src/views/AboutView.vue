<template>
  <div class="flex flex-col items-center justify-center font-light">
    <h1 class="mt-10 mb-2 p-2 font-medium">About Our Application</h1>
    <p class="text-wrap text-justify ml-60 mr-60">This application is designed to help users browse through repositories on Github. You can view 
      a list of repositories, paginate through them, and click on them to get details about each 
      repository. You can also search for a specific repository using the search bar.
    </p>
   
    <h2 class="mt-10 mb-2 p-2 font-medium">How to use</h2>
      <ol>
        <li>Click on the <RouterLink to="/" class="hover:text-green-300 underline">View Repositories</RouterLink> to view a list of repositories,</li>
        <li>Paginate through the list of repositories by clicking on the next and prev button,</li>
        <li>Click on a repository(name) to view detailed information about each repository,</li>
        <li>Type in the search bar to search for a specific repository.</li>
      </ol>
  </div>
</template>

