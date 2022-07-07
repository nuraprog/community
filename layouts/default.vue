<template>
  <div>
    <Navigation />

    <div class="h-[56px]" />

    <div class="container-lg grid gap-2">
      <Sidebar />

      <slot />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .container-lg {
    display: flex !important;
    justify-content: space-between;
    flex-direction: column;
  }
}
.container-lg {
  align-items: flex-start;
  grid-template-columns: 140px auto;
}
</style>
