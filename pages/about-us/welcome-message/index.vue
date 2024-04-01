<template>
  <section class="w-full max-w-screen-xl mx-auto flex flex-col">
    <Breadcrumbs :links="breadcrumbs" />

    <div class="flex flex-col space-y-4 mt-4 font-thin">
      <p>
        Welcome to and our community. We offer a wide range of courses that
        transform our students to be job-ready and are given access to many job
        opportunities here in Australia.
      </p>

      <p>
        We are committed to quality education and student satisfaction. Our
        teachers and instructors are certified with many years of relevant
        industry experience, have taught at leading vocational colleges, and
        most of all, are dedicated and passionate. Our underlying objective is
        to encourage you to attain your personal best and to develop the
        self-confidence that will give you a competitive edge in your chosen
        field.
      </p>

      <p>
        At Nubex, we understand that being a student is more than just studying
        and working hard, therefore we provide our students with a challenging,
        rewarding and enjoyable learning environment filled with many hands-on
        practical workshops.
      </p>

      <p>
        Choosing a college is a very important and difficult decision for
        parents and students, especially if it's overseas. Please explore our
        website to learn more about our school and our community or get in touch
        with our Admissions Team to assist you and your family.
      </p>

      <p>
        Now that restrictions are being lifted and the world adjusts to the new
        normal, Nubex College has opened its campuses to students from all over
        the country.
      </p>

      <p>
        And we are looking forward to welcoming you in person to our campus very
        soon.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IBreadcrumbLink } from '~/contracts/IBreadcrumbLink';

const breadcrumbs: Array<IBreadcrumbLink> = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Welcome Message' },
];
</script>
