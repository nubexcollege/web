<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col">
    <Breadcrumbs :links="breadcrumbs" />

    <div class="px-4 py-2">
      <h1 class="mb-2 font-semibold text-2xl tracking-wide text-gray-700">
        Course Overview
      </h1>
      <div class="grid grid-cols-3">
        <div class="col-span-2">
          <CourseDescription :courseName="courseName" />
        </div>
      </div>
      <div class="grid grid-cols-3 mt-10">
        <div class="col-span-2">
          <CourseKeyInformation />
        </div>
      </div>
      <div class="grid grid-cols-3 mt-10">
        <div class="col-span-2">
          <CourseStructure />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

const route = useRoute();
const courseName = ref('');

if (route.params?.course && typeof route.params.course === 'string') {
  const name = route.params?.course.replace(/-/g, ' ');
  courseName.value = capitalize(name).join(' ');
}

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'Courses', href: '/courses' },
  { name: courseName.value },
];
</script>
