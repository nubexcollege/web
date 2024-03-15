<template>
  <section class="text-gray-800">
    <h4 id="course-name" class="font-semibold pt-2 pb-2.5">
      {{ courseName }}
    </h4>
    <label for="course-name">Course Description :</label>
    <table class="mt-2">
      <tbody class="flex flex-col space-y-2">
        <tr class="flex flex-row">
          <td class="pl-4 pr-3 pt-2.5 flex items-start">
            <span
              class="w-3 h-[3px] bg-[#bead01] inline-flex items-start"
            ></span>
          </td>
          <td class="text-gray-600 text-sm">
            This qualification reflects the role of individuals who apply
            knowledge, practical skills and experience in leadership and
            management across a range of enterprise and industry contexts.
          </td>
        </tr>
        <tr class="flex flex-row">
          <td class="pl-4 pr-3 pt-2.5 flex items-start">
            <span
              class="w-3 h-[3px] bg-[#bead01] inline-flex items-start"
            ></span>
          </td>
          <td class="text-gray-600 text-sm">
            Individuals at this level display initiative and judgement in
            planning, organising, implementing and monitoring their own workload
            and the workload of others. They use communication skills to support
            individuals and teams to meet organisational or enterprise
            requirements.
          </td>
        </tr>
        <tr class="flex flex-row">
          <td class="pl-4 pr-3 pt-2.5 flex items-start">
            <span
              class="w-3 h-[3px] bg-[#bead01] inline-flex items-start"
            ></span>
          </td>
          <td class="text-gray-600 text-sm">
            They may plan, design, apply and evaluate solutions to unpredictable
            problems, and identify, analyse and synthesise information from a
            variety of source.
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  courseName: string;
}>();
</script>
