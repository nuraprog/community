<script setup lang="ts">
import { field } from "~/libs/NavigationInput";
import { useRouter } from "vue-router";

const firebaseUser = useFirebaseUser();
const router = useRouter();

function goToSearchPage() {
  if (field.value) {
    router.push({
      path: "/search",
      query: {
        q: field.value,
      },
    });
  }
}
</script>

<template>
  <header
    class="fixed w-full z-50 backdrop-blur-lg border-b dark:border-zinc-800 bg-white/70 dark:bg-[#0f0f0f]/90 dark:text-white text-black"
  >
    <div class="container">
      <nav class="h-10 flex items-center justify-between">
        <a href="/" class="font-bold text-xl">LOGO</a>

        <input
          class="dark:bg-black/60 dark:border-zinc-700 font-bold border rounded-md p-1 px-2 bg-white/60"
          type="text"
          placeholder="Search"
          v-model="field"
          @keypress.enter="goToSearchPage"
        />

        <div>
          <client-only v-if="firebaseUser">
            <button
              type="button"
              class="border py-1 px-2 rounded-md dark:border-zinc-700"
            >
              Profile
            </button>
          </client-only>

          <button
            v-else
            type="button"
            class="border py-1 px-2 rounded-md dark:border-zinc-700 dark:bg-black/10 dark:hover:bg-black/60"
          >
            <NuxtLink to="/join">Join</NuxtLink>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>
