<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
// method to scroll to download section
const toDownload = () => {
  if (route.name === "home") {
    const download = document.getElementById("download");
    download.scrollIntoView({ behavior: "smooth" });
  }
  router.push({ name: "home" });
};
// method to scroll to upload section
const toUpload = () => {
  if (route.name === "home") {
    const download = document.getElementById("upload");
    download.scrollIntoView({ behavior: "smooth" });
  }
  router.push({ name: "home" });
};
</script>

<template>
  <section class="overflow-hidden sticky top-0 z-50">
    <div
      class="flex items-center justify-between px-12 lg:px-40 py-5 bg-indigo-600 border-b-2 border-white"
    >
      <a
        class="grid grid-cols-3 items-center text-white text-4xl font-bold font-heading"
        href="https://tometoyou.adamgibbs.dev/"
      >
        <em>To me</em>
        <img src="@/assets/images/WhiteLogo.svg" alt="" class="w-20 pl-5" />
        <em>To you</em>
      </a>
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-auto">
            <div class="inline-block">
              <button
                class="py-3 px-5 w-full text-indigo-600 font-semibold rounded-xl focus:ring focus:ring-white bg-white hover:bg-gray-200 transition ease-in-out duration-200"
                type="button"
                @click="toUpload"
              >
                Send Your Files
              </button>
            </div>
          </div>
          <div class="w-auto ml-8">
            <div class="inline-block">
              <button
                class="py-3 px-5 w-full text-indigo-600 font-semibold rounded-xl focus:ring focus:ring-white bg-white hover:bg-gray-200 transition ease-in-out duration-200"
                type="button"
                @click="toDownload"
              >
                Download a file
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
