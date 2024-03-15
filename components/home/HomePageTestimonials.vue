<template>
  <div class="flex flex-col justify-center items-center p-4 mt-4 w-full">
    <p class="font-semibold text-2xl text-gray-800 tracking-wide mb-8">
      What Our Student Says
    </p>
    <SwiperVue
      class="max-w-lg w-full"
      :slidesPerView="1"
      :modules="[Navigation, Pagination, A11y]"
      :pagination="paginationOptions"
    >
      <SwiperSlide v-for="(student, index) in students" :key="index">
        <TestimonialBlock v-bind="student" />
      </SwiperSlide>
    </SwiperVue>
  </div>
</template>

<script lang="ts" setup>
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper as SwiperVue, SwiperSlide } from "swiper/vue";
import type { PaginationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const paginationOptions: PaginationOptions = {
  clickable: true,
};

const students = [
  {
    imageSrc: "/img/T1.png",
    name: "John Doe",
    location: "Sydney, NSW",
    message:
      "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
  },
  {
    imageSrc: "/img/T2.png",
    name: "John Doe",
    location: "Sydney, NSW",
    message:
      "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
  },
  {
    imageSrc: "/img/T3.png",
    name: "John Doe",
    location: "Sydney, NSW",
    message:
      "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
  },
  {
    imageSrc: "/img/T4.png",
    name: "John Doe",
    location: "Sydney, NSW",
    message:
      "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit",
  },
];
</script>

<style>
.swiper-pagination {
  bottom: -6px !important;
}
</style>
