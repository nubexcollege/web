<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';

withDefaults(
  defineProps<{
    title?: string;
    confirmBtnText?: string;
  }>(),
  {
    confirmBtnText: 'Confirm',
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void;
  (e: 'confirm'): void;
}>();
</script>

<template>
  <VueFinalModal
    teleport-to="body"
    display-directive="if"
    :hide-overlay="false"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
    :click-to-close="true"
    :esc-to-close="true"
    :lock-scroll="true"
    :reserve-scroll-bar-gap="true"
    swipe-to-close="none"
    class="flex justify-center items-center"
    content-class="max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <div class="card w-96 bg-base-100 space-y-5">
      <h1 class="text-lg">
        {{ title }}
      </h1>
      <p class="text-sm font-light">
        Thank you for your interest! We're currently awaiting approval. Once
        it's been processed we will be able to provide more details. Your
        patience is appreciated!
      </p>
      <button class="btn btn-sm btn-neutral w-[100px]" @click="emit('confirm')">
        {{ confirmBtnText }}
      </button>
    </div>
  </VueFinalModal>
</template>
