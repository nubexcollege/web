<template>
  <section
    class="max-w-5xl w-full flex flex-col justify-center items-center mx-auto h-96 py-80"
  >
    <h1 class="text-2xl mb-2">oops!</h1>
    <h1 class="text-6xl mb-2">404</h1>
    <p class="tracking-wide leading-10">
      Page
      <span class="font-mono bg-orange-100 p-1.5 rounded-md shadow">
        {{ route.fullPath }}
      </span>
      Not Found!
    </p>
    <p class="text-sm text-gray-500 font-thin flex flex-col text-center">
      <span>We can't seem to find the page you are looking for.</span>
      <span> This page either doesn't exist or was removed!</span>
    </p>
    <a class="btn btn-sm mt-4 capitalize font-medium tracking-wider" href="/"
      >Go back home</a
    >
  </section>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
