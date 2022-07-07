<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const fields = reactive({
  email: "",
  password: "",
});

const signIn = () => {
  if (fields.email && fields.password) {
    signInUser(fields.email, fields.password).then(() => {
      router.push("/");
    });
  }
};
</script>

<template>
  <div
    class="login-background absolute z-50 top-0 left-0 w-full h-full flex items-start py-5 px-4 justify-center overflow-y-auto"
  >
    <div
      class="backdrop-blur-xl dark:bg-zinc-900/70 dark:border drop-shadow-2xl dark:border-zinc-800 bg-white/70 rounded-xl shadow-sm"
    >
      <div class="p-4 max-w-[467px] mx-auto flex flex-col gap-4">
        <div
          class="flex items-center justify-center flex-col gap-2 text-center"
        >
          <h3 class="text-gray-900 dark:text-white font-normal">
            Welcome back!
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Get back to the community where people post what they want.
          </p>
        </div>

        <form
          class="p-2 drop-shadow-xl dark:bg-black/70 dark:text-gray-500 text-gray-800 rounded-xl bg-white/70 flex flex-col gap-3"
        >
          <div
            class="flex gap-2 items-center justify-between md:flex-row flex-col"
          >
            <input
              class="dark:hover:bg-zinc-900 rounded-md p-1 border w-full dark:text-gray-200 dark:placeholder-zinc-400 dark:border-zinc-700 bg-white/10 hover:bg-gray-50/20 duration-200 outline-none"
              type="text"
              placeholder="Email"
              v-model="fields.email"
            />
            <input
              class="dark:hover:bg-zinc-900 dark:text-gray-200 rounded-md dark:placeholder-zinc-400 dark:border-zinc-700 bg-white/10 hover:bg-gray-50/20 p-1 border w-full duration-200 outline-none"
              type="password"
              placeholder="Password"
              v-model="fields.password"
            />
          </div>

          <div
            class="gap-2 md:gap-0 flex items-start sm:justify-between justify-start flex-col sm:flex-row"
          >
            <label
              class="flex items-center gap-2 cursor-pointer"
              for="remember-me"
            >
              <p>Remember me</p>
              <input type="checkbox" class="cursor-pointer" id="remember-me" />
            </label>
            <button type="button" class="hover:underline italic">
              Forgot Password?
            </button>
          </div>

          <div class="flex items-center flex-col gap-1">
            <button
              class="dark:bg-blue-900 dark:border-blue-500 w-full py-1 bg-blue-600 text-white hover:shadow-inner rounded-lg border border-blue-600 shadow-blue-500 drop-shadow-xl"
              type="button"
              @click="signIn"
            >
              Sign In
            </button>
            <button
              class="dark:bg-zinc-900 dark:border-zinc-700 dark:hover:bg-black dark:text-zinc-300 w-full py-1 bg-gray-200 hover:bg-gray-300 duration-300 text-gray-800 rounded-lg border-gray-300 border"
              type="button"
            >
              <NuxtLink to="/join">Create a new account</NuxtLink>
            </button>
            <button
              class="dark:bg-zinc-800 dark:border-zinc-600 dark:hover:bg-zinc-900 dark:text-zinc-300 w-full py-1 bg-gray-100 hover:bg-gray-200 duration-300 text-gray-800 hover:border-gray-300 rounded-lg border"
              type="button"
            >
              Maybe Later...
            </button>
          </div>

          <div
            class="flex whitespace-nowrap gap-3 items-center justify-between"
          >
            <hr class="w-full dark:border-zinc-800" />
            <p class="text-gray-500 dark:text-zinc-600">Or Continue with</p>
            <hr class="w-full dark:border-zinc-800" />
          </div>

          <div class="flex gap-1 justify-center">
            <button type="button">Google</button>
            <button type="button">Twitter</button>
            <button type="button">GitHub</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
