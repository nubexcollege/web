<template>
  <div>
    <section
      class="py-2 px-4 border-b flex flex-1 justify-between items-center bg-[#004990]"
    >
      <div>&nbsp;</div>
      <div class="flex space-x-3">
        <button
          type="button"
          @click="show = true"
          target="_blank"
          class="border-r px-2 tracking-wide font-mono text-xs hover:underline hover:underline-offset-2 inline-flex items-center text-gray-50"
        >
          <span>eSpace</span>
        </button>
        <button
          type="button"
          @click="show = true"
          target="_blank"
          class="border-r px-2 tracking-wide font-mono text-xs hover:underline hover:underline-offset-2 inline-flex items-center text-gray-50"
        >
          <span>Didasko</span>
        </button>
        <button
          type="button"
          @click="show = true"
          target="_blank"
          class="border-r px-2 tracking-wide font-mono text-xs hover:underline hover:underline-offset-2 inline-flex items-center text-gray-50"
        >
          <span>Portal Login</span>
        </button>
        <button
          type="button"
          @click="show = true"
          target="_blank"
          class="px-3 py-0.5 tracking-wide rounded-xl font-mono text-xs hover:underline hover:underline-offset-2 inline-flex space-x-0.5 items-center text-gray-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        >
          <span>Apply Now</span>
          <IconCursorClick class="h-6 w-6 -mt-1 animate-bounce" />
        </button>
        <div class="px-8"></div>
      </div>
    </section>
    <WaitingAproval
      v-model="show"
      title="Waiting for approval for our application for VET registration."
      @confirm="show = false"
      confirm-btn-text="Close"
    />
  </div>
</template>

<script setup lang="ts">
const show = ref(false);
</script>
