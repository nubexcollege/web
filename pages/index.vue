<template>
  <div>
    <section class="max-w-5xl w-full flex flex-col items-center mx-auto">
      <div class="w-full">
        <HomePageBanner />
      </div>
    </section>
    <section
      class="w-full flex flex-col p-12 shadow-sm border-t border-gray-100"
    >
      <div class="w-full">
        <HomePageOfferedCourses />
      </div>
    </section>
    <section class="w-full flex flex-col p-12 shadow-sm">
      <div class="w-full">
        <HomePageIntakeDates />
      </div>
    </section>
    <section
      v-if="false"
      class="w-full flex flex-col bg-gray-50 p-12 shadow-sm"
    >
      <div class="w-full">
        <HomePageTestimonials />
      </div>
    </section>
    <section class="max-w-5xl w-full flex flex-col items-center mx-auto">
      <div class="w-full">
        <HomePageNewsletter />
      </div>
    </section>
  </div>
</template>
