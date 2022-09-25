<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
router.push({ name: "home" });
// if path ends in slash, remove it
const removeSlash = (path) => {
  if (path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path.trim();
};
// method removes all text up to last slash
const removePath = (path) => {
  path = removeSlash(path);
  const splitPath = path.split("/");
  return splitPath[splitPath.length - 1];
};
const checkExists = (id) => {
  axios.get(`http://tometoyouapi/details/${id}`).then((res) => {
    return true;
  });
  return false;
};
const goToDownload = () => {
  let path = document.getElementById("pathInput").value;
  path = removeSlash(path);
  const id = removePath(path);
  if (checkExists(id)) {
    router.push({ name: "download", params: { path } });
  }
};
</script>

<template>
  <section class="relative py-28 bg-indigo-600 overflow-hidden" id="download">
    <div class="relative z-10 container px-4 mx-auto">
      <div class="flex flex-wrap items-center -m-8">
        <div class="w-full md:w-1/2 p-8">
          <h2
            class="mb-5 text-6xl md:text-7xl text-white font-bold tracking-px-n leading-tight"
          >
            Want to receive a file?
          </h2>
          <p class="text-white text-opacity-90 font-medium md:max-w-md">
            Paste the ID or full link in the box to the right to start
            downloading now.
          </p>
        </div>
        <div
          class="mb-3 xl:pl-6 inline-block md:max-w-xl w-1/2 overflow-hidden border border-gray-300 bg-white rounded-xl focus-within:ring focus-within:ring-indigo-300"
        >
          <div class="flex flex-wrap items-center">
            <div class="w-full xl:flex-1">
              <input
                class="p-3 xl:p-0 xl:pr-6 w-full font-medium text-gray-500 placeholder-gray-500 outline-none"
                id="pathInput"
                type="text"
                placeholder="Paste link or ID here"
                v-on:keyup.enter="goToDownload"
              />
            </div>
            <div class="w-full xl:w-auto">
              <div class="block">
                <button
                  class="py-4 px-8 w-full text-white font-semibold border border-indigo-700 focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                  type="button"
                  @click="goToDownload"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
