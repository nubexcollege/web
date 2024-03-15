<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col">
    <Breadcrumbs :links="breadcrumbs" />

    <div class="font-thin mt-4">
      <h1 class="text-2xl font-medium mb-4">Course Fees</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Title</th>
              <th>Tuition</th>
              <th v-if="false"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="false">
              <th>ICT50220</th>
              <td>Diploma of Information Technology</td>
              <td>A$10,000</td>
              <td>
                <a
                  href="#"
                  class="text-sm font-semibold text-[#bead01] tracking-wide"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr v-if="false">
              <th>ICT60220</th>
              <td>Advanced Diploma of Information Technology</td>
              <td>A$6,000</td>
              <td>
                <a
                  href="#"
                  class="text-sm font-semibold text-[#bead01] tracking-wide"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <th>BSB50420</th>
              <td>Diploma of Leadership and Management</td>
              <td>A$7,200</td>
              <td>
                <a
                  v-if="false"
                  href="#"
                  class="text-sm font-semibold text-[#bead01] tracking-wide"
                >
                  Read more
                </a>
              </td>
            </tr>
            <tr>
              <th>BSB60420</th>
              <td>Advanced Diploma of Leadership and Management</td>
              <td>A$6,000</td>
              <td v-if="false">
                <a
                  href="#"
                  class="text-sm font-semibold text-[#bead01] tracking-wide"
                >
                  Read more
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h1 class="text-2xl font-medium mt-8 mb-4">Administrative Fees</h1>
      <p class="mb-4">
        These are fees for services we provide to students in addition to
        tuition fees (GST Inclusive)
      </p>

      <div class="flex flex-row space-x-6 mb-8">
        <div class="overflow-x-auto w-1/3">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="font-medium">Application Fee (Enrollment Fee)</th>
                <td>A$200</td>
              </tr>
              <tr>
                <th class="font-medium">Overdue tuition Fee</th>
                <td>A$200</td>
              </tr>
              <tr>
                <th class="font-medium">Re-enrollment fee</th>
                <td>A$500</td>
              </tr>
              <tr>
                <th class="font-medium">Credit transfer fee</th>
                <td>A$100</td>
              </tr>
              <tr>
                <th class="font-medium">RPL fee per unit</th>
                <td>A$250</td>
              </tr>
              <tr>
                <th class="font-medium">Course variation fee</th>
                <td>A$150</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="overflow-x-auto w-1/3">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="font-medium">Materials Fee (per term)</th>
                <td>A$50</td>
              </tr>
              <tr>
                <th class="font-medium">Reassessment fee (per assessment)</th>
                <td>A$20</td>
              </tr>
              <tr>
                <th class="font-medium">Interim academic transcript</th>
                <td>A$20</td>
              </tr>
              <tr>
                <th class="font-medium">Interim attendance letter</th>
                <td>A$10</td>
              </tr>
              <tr>
                <th class="font-medium">Re-issue of final documents</th>
                <td>A$50</td>
              </tr>
              <tr>
                <th class="font-medium">Reference letter</th>
                <td>A$10</td>
              </tr>
              <tr>
                <th class="font-medium">Refund processing fee</th>
                <td>A$250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'Admissions', href: '/admissions' },
  { name: 'Fees' },
];
</script>
