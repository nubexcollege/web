<template>
  <div class="text-sm breadcrumbs py-3 px-4">
    <ul>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li v-for="link in links" :key="link.name">
        <template v-if="link?.href">
          <NuxtLink :to="link.href">{{ link.name }}</NuxtLink>
        </template>
        <template v-else>
          <span>{{ link.name }}</span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

defineProps<{
  links: Array<IBreadcrumbLink>;
}>();
</script>
