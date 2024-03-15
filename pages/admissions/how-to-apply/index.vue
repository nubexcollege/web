<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col pb-8">
    <Breadcrumbs :links="breadcrumbs" />

    <p class="font-thin my-4">
      At Nubex College, we aim to provide you with the best facilities, trainers
      and support services and high quality courses to ensure that your learning
      experience meets and exceeds your expectations as an international student
      studying in Australia. Our Admissions Process is straightforward,
      completely online and can be done in 6 easy steps.
    </p>

    <ul class="steps steps-vertical">
      <li class="step">
        <div
          class="card w-8/12 min-h-[68px] mb-4 items-center flex flex-row justify-center bg-base-100 shadow border px-4 py-2 -z-10"
        >
          <p class="font-thin">
            Apply online and upload a certified copy of your passport, academic
            qualification and evidence of your English Language proficiency.
          </p>
        </div>
      </li>
      <li class="step">
        <div
          class="card w-8/12 min-h-[68px] mb-4 items-center flex flex-row justify-center bg-base-100 shadow border px-4 py-2 -z-10"
        >
          <p class="font-thin">
            Nubex College will assess your application. You may be asked to
            complete an eligibility checklist and the Nubex Placement test.
          </p>
        </div>
      </li>
      <li class="step">
        <div
          class="card w-8/12 min-h-[68px] mb-4 items-center flex flex-row justify-center bg-base-100 shadow border px-4"
        >
          <p class="font-thin">
            Nubex College will issue with a letter of offer/student agreement
          </p>
        </div>
      </li>
      <li class="step">
        <div
          class="card w-8/12 min-h-[68px] mb-4 items-center flex flex-row justify-center bg-base-100 shadow border px-4 py-2"
        >
          <p class="font-thin">
            Read and Sign the Letter of Offer/student agreement and return to
            Nubex College
          </p>
        </div>
      </li>
      <li class="step">
        <div
          class="card w-8/12 min-h-[68px] mb-4 items-center flex flex-row justify-center bg-base-100 shadow border px-4 py-2"
        >
          <p class="font-thin">
            Make Payment by bank Transfer and Send a copy of your Payment
            receipt to Nubex College. Visa, MasterCard and EFTPOS payment are
            also accepted.
          </p>
        </div>
      </li>
      <li class="step">
        <div
          class="card w-8/12 min-h-[68px] mb-4 items-center flex flex-row justify-center bg-base-100 shadow border px-4 py-2"
        >
          <p class="font-thin">
            Nubex College will issue your Confirmation of Enrollment (COE). You
            are now ready to apply for your student visa
          </p>
        </div>
      </li>
    </ul>

    <p class="font-thin mt-4">
      Before you get started its important that you've read our International
      Student Handbook and all the information on our website. You'll also want
      to learn about the Australian student visa program including your
      eligibility status and how to apply, at
      <a
        href="http://www.homeaffairs.gov.au"
        target="_blank"
        rel="noopener noreferrer"
        class="text-[#bead01]"
      >
        www.homeaffairs.gov.au
      </a>
    </p>
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'Admissions', href: '/admissions' },
  { name: 'How to Apply' },
];
</script>
