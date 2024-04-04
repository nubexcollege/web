<template>
  <div
    class="w-full max-w-7xl mx-auto border-4 rounded-xl bg-slate-50 border-[#004990] hover:border-pink-600 p-8"
  >
    <span
      class="text-2xl mb-3 inline-block border-b-4 border-opacity-60 border-[#bead01]"
    >
      2023-2024 Intake Date:
    </span>

    <p class="my-5">
      Dates will be published on approval of our application for VET
      registration.
    </p>

    <div class="grid grid-cols-4" v-if="false">
      <div class="col-span-1 text-sm" v-for="i in 4" :key="i">
        <p class="text-gray-700 leading-6">Term {{ i }}</p>
        <p class="font-normal leading-6 text-gray-500">
          10 Jan 2022 - 13 Mar 2022
        </p>
        <table class="mt-2">
          <tbody>
            <tr class="mb-1.5 tracking-wide">
              <td class="text-gray-700 pr-2">Start Date:</td>
              <td class="font-light">04 Oct 2021</td>
            </tr>
            <tr class="mb-1.5 tracking-wide">
              <td class="text-gray-700 pr-2">Mid Term:</td>
              <td class="font-light">25 Nov 2021</td>
            </tr>
            <tr class="mb-1.5 tracking-wide">
              <td class="text-gray-700 pr-2">End Date:</td>
              <td class="font-light">12 Dec 2021</td>
            </tr>
            <tr class="mb-1.5 tracking-wide">
              <td class="text-gray-700 pr-2">Holiday:</td>
              <td class="font-light">13 Dec 2021 - 02 Jan 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
