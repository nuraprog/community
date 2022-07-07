<script setup>
const props = defineProps({
  data: {
    type: [Object],
  },
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <a href="/" class="w-full">
      <div class="w-full border p-2 dark:border-[#111] rounded duration-300">
        <div
          class="flex flex-row justify-between text-gray-700 dark:text-gray-500"
        >
          <p>Published: {{ props.data.date }}</p>
          <p>Author: {{ props.data.author }}</p>
        </div>
        <div class="main_item grid justify-start">
          <img src="" class="w-full" />

          <div class="flex flex-col gap-2">
            <h4>
              {{ props.data.title }}
            </h4>
            <p class="dark:text-[#ccc]">
              {{ props.data.description }}
            </p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
.main_item {
  grid-template-columns: auto auto;
}
</style>
