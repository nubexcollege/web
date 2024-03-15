<template>
  <div class="flex flex-row justify-between p-6 mt-4">
    <img
      class="rounded-2xl"
      src="~/assets/female.jpg"
      height="500"
      width="350"
      alt="Student"
    />
    <div class="flex flex-col justify-center">
      <div class="text-4xl mb-6">
        Build your <span class="text-[#bead01]">future career </span>
        <p class="">with us!</p>
      </div>
      <p class="text-gray-600 text-sm leading-6 font-thin">
        Nubex will be sure to help you achieve solid expertise in your field of
        study
      </p>
      <p class="text-gray-600 text-sm leading-6 font-thin">
        with pathways into degrees offered at Australian universities
      </p>

      <div class="flex flex-row space-x-5 mt-6">
        <button
          type="button"
          @click="show = true"
          class="rounded-3xl px-4 py-2 text-[14px] border border-transparent bg-gradient-to-r from-[#c12f1d] to-[#e84142] text-white"
        >
          Diploma
        </button>
        <button
          type="button"
          @click="show = true"
          class="rounded-3xl px-4 py-2 text-[14px] border border-[#e84142] hover:bg-gradient-to-r from-[#c12f1d] to-[#e84142] text-[#e84142] hover:text-white"
        >
          Advance Diploma
        </button>
      </div>
    </div>
  </div>
  <WaitingAproval
    v-model="show"
    title="Waiting for approval!"
    @confirm="show = false"
    confirm-btn-text="Close"
  />
</template>

<script lang="ts" setup>
const show = ref(false);
</script>
