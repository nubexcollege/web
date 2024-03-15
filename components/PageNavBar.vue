<template>
  <section class="py-2 w-full px-4 shadow-sm">
    <div
      class="max-w-5xl w-full flex flex-row justify-between items-center mx-auto"
    >
      <img src="~/assets/nubex_logo.png" :width="90" alt="Nubex College" />
      <div class="flex flex-row">
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li
              v-for="(menu, mIndex) in menus"
              :key="`m${mIndex}`"
              class="z-50"
            >
              <NuxtLink
                :to="menu.href"
                class="active:bg-[#e84142] focus:bg-[#e84142] focus:text-white flex flex-row gap-0.5 items-center"
              >
                {{ menu.name }}
                <template v-if="menu?.submenus"><IconArrowDown /></template>
              </NuxtLink>
              <ul
                class="p-2 bg-base-100 shadow-sm border space-y-1"
                v-if="menu?.submenus"
              >
                <li
                  v-for="(submenu, sIndex) in menu?.submenus"
                  :key="`m${mIndex}-s${sIndex}`"
                >
                  <NuxtLink
                    :to="submenu.href"
                    class="active:bg-[#e84142] focus:bg-[#e84142] focus:text-white font-light py-1.5 text-sm"
                  >
                    {{ submenu.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <span class="px-8">&nbsp;</span>
        <button
          class="px-3 py-2 rounded-md hover:bg-gradient-to-r from-[#c12f1d] to-[#e84142] border border-[#e84142] text-[#e84142] hover:text-white"
        >
          Send Enquiry
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { IMenu } from '@/contracts/IMenu';

const menus: Array<IMenu> = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about-us',
    submenus: [
      { name: 'Welcome Message', href: '/about-us/welcome-message' },
      { name: 'Mission & Vision', href: '/about-us/mission-vision' },
      { name: 'Covid Update', href: '/about-us/covid-update' },
    ],
  },
  {
    name: 'Admission',
    href: '/admissions',
    submenus: [
      { name: 'How to Apply', href: '/admissions/how-to-apply' },
      { name: 'Fees', href: '/admissions/fees' },
      { name: 'Academic Calendar', href: '/admissions/academic-calendar' },
      { name: 'Under 18', href: '/admissions/under-18' },
      { name: 'FAQs', href: '/admissions/faq' },
    ],
  },
  {
    name: 'Courses',
    href: '/courses',
    submenus: [
      {
        name: 'Business and Management Courses',
        href: '/courses/business-and-management-courses',
      },
    ],
  },
  { name: 'Student Life', href: '/student-life' },
];
</script>
