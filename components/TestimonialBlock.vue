<template>
  <div class="flex flex-col mt-4">
    <div class="p-1 w-full text-center">
      <img
        :alt="name"
        :src="imageSrc"
        width="95"
        class="bg-blue-300 rounded-full mx-auto"
      />
    </div>
    <p class="text-center text-sm text-gray-400">{{ name }} | {{ location }}</p>
    <p
      class="text-gray-700 font-thin tracking-wider text-center my-6 mx-4 relative p-2"
    >
      <IconQuoteLeft class="absolute -top-4 -left-4 text-gray-400" />
      <span>
        {{ message }}
      </span>
      <IconQuoteRight class="absolute -bottom-4 -right-4 text-gray-400" />
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  imageSrc: string;
  name: string;
  location: string;
  message: string;
}>();
</script>
