<script setup lang="ts">
import { toggleTheme, getTheme } from "~/libs/Theme";

const mainLinks = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "new",
    name: "New",
  },
  {
    link: "popular",
    name: "Popular",
  },
];

const selections = reactive({
  title: "Topics",
  isOpen: false,

  options: [
    {
      link: "programming",
      name: "Programming",
    },
    {
      link: "cats",
      name: "Cats",
    },
    {
      link: "art",
      name: "Art",
    },
    {
      link: "gamedev",
      name: "Game Development",
    },
    {
      link: "technology",
      name: "Technology",
    },
    {
      link: "topics",
      name: "All Topics",
    },
  ],
});
</script>

<template>
  <div class="relative w-full">
    <aside
      class="w-full md:w-[140px] whitespace-nowrap overflow-x-auto dark:bg-[#0f0f0f]/70 backdrop-blur-xl dark:text-white dark:border-zinc-900 border flex-row justify-between flex md:flex-col bg-gray-50/60 rounded-md fixed p-1 gap-1"
    >
      <div class="flex flex-row gap-1 md:flex-col w-auto justify-start">
        <NuxtLink
          type="button"
          class="duration-100 py-1 px-2 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/95 hover:bg-white/90 hover:border-gray-200 border border-transparent rounded"
          v-for="(item, idx) in mainLinks"
          :key="idx"
          :to="item.link"
        >
          {{ item.name }}
        </NuxtLink>

        <div class="flex flex-col gap-2">
          <button
            class="flex justify-between items-center w-full text-start duration-100 py-1 px-2 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/95 hover:bg-white/90 hover:border-gray-200 border border-transparent rounded"
            type="button"
            @click="selections.isOpen = !selections.isOpen"
          >
            {{ selections.title }}
            <img
              class="h-3 w-3 duration-300"
              :class="{ 'rotate-180': selections.isOpen }"
              src="~/assets/icons/arrow.svg"
            />
          </button>

          <div
            class="ml-1 pl-1 dark:border-[#333] border-l flex flex-row gap-1 md:flex-col w-auto justify-start"
            v-if="selections.isOpen"
          >
            <NuxtLink
              class="whitespace-pre-wrap duration-100 py-1 px-2 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/95 hover:bg-white/90 hover:border-gray-200 border border-transparent rounded"
              :to="item.link"
              v-for="(item, idx) in selections.options"
              :key="idx"
              >{{ item.name }}</NuxtLink
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label
          class="py-1 px-2 rounded cursor-pointer flex justify-between items-center"
          for="theme"
        >
          <p>Theme</p>

          <label class="switch">
            <input
              type="checkbox"
              :checked="getTheme() === 'dark'"
              @click="toggleTheme"
            />
            <span class="slider round rounded-full"></span>
          </label>
        </label>

        <a
          class="px-2 py-1 font-light text-sm text-center hidden md:block"
          href="/"
          >Nuraprog 2022
          <i class="fa-solid fa-sun"></i>
        </a>
      </div>
    </aside>
  </div>
</template>

<style>
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 24px;
}
.switch input {
  display: none;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border: 1px solid #ccc;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 200ms;
}
input:checked + .slider {
  background-color: #000;
  border: 1px solid #333;
}
input:focus + .slider {
  box-shadow: 0 0 1px #000;
}
input:checked + .slider:before {
  transform: translateX(21px);
}
.slider.round:before {
  border-radius: 50%;
}
</style>
