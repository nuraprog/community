<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const signUpFields = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

const userData = reactive({
  name: "",
  nickname: "",
});

const errors = reactive([
  {
    name: "weakPassword",
    display: false,
    value: "Password should be at least 6 symbols",
  },
  {
    name: "emailAlreadyInUse",
    display: false,
    value: "Email already in use",
  },
  {
    name: "emailInvalid",
    display: false,
    value: "Invalid email",
  },
  {
    name: "operationNotAllowed",
    display: false,
    value:
      "Operation not allowed, please try again later. If the error persists, you can contact our support.",
  },
  {
    name: "somethingError",
    display: false,
    value:
      "Something went wrong. This is our fault. please wait until we fix the bug",
  },
  {
    name: "PasswordNotConfirmed",
    display: false,
    value: "Passwords do not match",
  },
  {
    name: "fieldNameIsNot",
    display: false,
    value: '"Name" field is not filled',
  },
  {
    name: "fieldNicknameIsNot",
    display: false,
    value: '"Nickname" field is not filled',
  },
  {
    name: "nameAndNickame",
    display: false,
    value: '"Name" and "Nickname" fields are not filled',
  },
]);

const signup = () => {
  if (signUpFields.password === signUpFields.confirmPassword) {
    if (userData.name && userData.nickname) {
      createUser(signUpFields.email, signUpFields.password)
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          const errorsFor = new Promise((resolve, reject) => {
            for (let i = 0; i < 9; i++) {
              errors[i].display = false;
              console.log("all false");
            }
            resolve("all for");
          }).then(() => {
            switch (error.code) {
              case "auth/email-already-in-use":
                errors[1].display = true;
                break;
              case "auth/invalid-email":
                errors[2].display = true;
                break;
              case "auth/operation-not-allowed":
                errors[3].display = true;
                break;
              case "auth/weak-password":
                errors[0].display = true;
                console.log("weak password");
                break;
              default:
                errors[4].display = true;
            }
            console.log(error.code);
          });
        });
    } else if (!userData.name && userData.nickname) {
      errors[6].display = true;
    } else if (userData.name && !userData.nickname) {
      errors[7].display = true;
    } else {
      errors[8].display = true;
    }
  } else {
    errors[5].display = true;
  }
};
</script>

<template>
  <div
    class="w-full h-screen flex items-start py-5 px-4 justify-center overflow-y-auto"
  >
    <div class="bg-white dark:bg-black dark:border-[#111] rounded-xl border">
      <div class="p-4 max-w-[467px] mx-auto flex flex-col gap-4">
        <div
          class="flex items-center justify-center flex-col gap-2 text-center"
        >
          <h3 class="text-gray-900 font-normal dark:text-[#eee]">Welcome!</h3>
          <p class="text-gray-500 dark:text-[#888]">
            It's the community where people post what they want.
          </p>
        </div>

        <form class="p-2 text-gray-800 rounded-xl flex flex-col gap-3">
          <ul
            class="list-disc border border-red-400 rounded-md pl-6 py-2 bg-red-300"
          >
            <div v-for="(item, idx) in errors" :key="idx">
              <li v-if="item.display">
                <strong class="text-[#000]">
                  {{ item.value }}
                </strong>
              </li>
            </div>
          </ul>

          <div class="flex gap-2 items-center justify-between flex-col">
            <input
              class="rounded-md p-1 dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] text-gray-400 border w-full hover:bg-gray-50 duration-200 outline-none"
              type="text"
              placeholder="*Email"
              v-model="signUpFields.email"
            />
            <div class="flex flex-col gap-1 justify-between w-full">
              <input
                class="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                type="password"
                placeholder="*Password (Min 8 symbols)"
                minlength="8"
                v-model="signUpFields.password"
              />
              <input
                class="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                type="password"
                placeholder="*Confirm password"
                v-model="signUpFields.confirmPassword"
              />
            </div>

            <div class="flex flex-col gap-1 justify-between w-full">
              <input
                class="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                type="text"
                placeholder="*Name"
                v-model="userData.name"
              />
              <input
                class="dark:bg-[#090909] dark:text-white dark:placeholder-[#888] dark:border-[#111] rounded-md hover:bg-gray-50 p-1 border w-full duration-200 outline-none"
                type="text"
                placeholder="*Nickname (Max 20 symbols)"
                maxlength="20"
                v-model="userData.nickname"
              />
            </div>
          </div>

          <div class="flex items-center flex-col gap-1">
            <button
              class="dark:bg-blue-800 dark:border-blue-900 w-full py-1 bg-blue-600 text-white hover:shadow-inner rounded-lg border"
              type="button"
              @click="signup"
            >
              Sign Up
            </button>
            <NuxtLink
              to="/login"
              class="text-center dark:bg-[#999] dark:border-[#ccc] dark:hover:bg-[#787878] dark:hover:text-gray-50 w-full relative py-1 bg-gray-300 hover:bg-gray-500 hover:text-white duration-200 text-gray-800 rounded-lg border"
            >
              Already have an Account?
            </NuxtLink>
            <button
              class="dark:bg-[#111] dark:border-[#222] dark:hover:bg-[#060606] dark:text-zinc-300 w-full py-1 bg-gray-100 hover:bg-gray-200 duration-300 text-gray-800 hover:border-gray-300 rounded-lg border"
              type="button"
            >
              Back to main page
            </button>
          </div>

          <div
            class="flex whitespace-nowrap gap-3 items-center justify-between"
          >
            <hr class="w-full dark:bg-[#888]" />
            <p class="dark:text-[#888] text-gray-500">Or Continue with</p>
            <hr class="w-full dark:bg-[#888]" />
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
