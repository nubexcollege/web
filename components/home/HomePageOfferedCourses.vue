<template>
  <div class="w-full max-w-5xl mx-auto">
    <h1 class="text-center text-3xl">Courses offered at Nubex</h1>
    <p class="text-center text-gray-600 font-light mt-1.5">
      Our quality training will help you achieve solid expertise in leadership
      and management.
    </p>
    <div class="flex flex-row justify-center mt-8 space-x-6">
      <div class="card w-[27rem] bg-base-100 shadow-xl image-full">
        <figure>
          <img src="~/assets/management.jpg" alt="Business and Management" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Business and Management</h2>
          <p>Earn and Enhance your leadership and skills</p>
          <div class="card-actions justify-end">
            <button
              type="button"
              @click="show = true"
              class="btn bg-gradient-to-r from-[#c12f1d] to-[#e84142] text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <WaitingAproval
    v-model="show"
    title="Waiting for approval for our application for VET registration."
    @confirm="show = false"
    confirm-btn-text="Close"
  />
</template>

<script lang="ts" setup>
const show = ref(false);
</script>
