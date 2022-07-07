<script setup>
definePageMeta({
  middleware: "search",
});
</script>

<template>
  <NuxtLayout>
    <div v-if="!$route.query.q">
      <h3>Search Everything!</h3>
    </div>
    <div v-else>
      <h3>Search: {{ $route.query.q }}</h3>
    </div>
  </NuxtLayout>
</template>
