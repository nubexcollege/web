<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col">
    <Breadcrumbs :links="breadcrumbs" />

    <Underconstruction />
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';
import { capitalize } from '~~/utils/capitalize';

const route = useRoute();
const disciplineName = ref('');

if (route.params?.discipline && typeof route.params.discipline === 'string') {
  const name = route.params?.discipline.replace(/-/g, ' ');
  disciplineName.value = capitalize(name).join(' ');
}

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'Courses', href: '/courses' },
  { name: disciplineName.value },
];
</script>
