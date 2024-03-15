<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col">
    <Breadcrumbs :links="breadcrumbs" />

    <Underconstruction />
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'Admissions', href: '/admissions' },
  { name: 'Academic Calendar' },
];
</script>
