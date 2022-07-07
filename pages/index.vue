<script setup>
const signOutUser = () => {
  signOut();
};

const posts = ref();

onMounted(async () => {
  const { result } = await $fetch("/api/query?col=posts");
  posts.value = result;
});
</script>

<template>
  <nuxtLayout>
    <div>
      <h3>Home</h3>
      <NewsCard :data="item" v-for="(item, idx) in posts" :key="idx" />
    </div>
  </nuxtLayout>
</template>
