<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const filename = ref("");
// on page load
onMounted(() => {
  // axios request to /details
  axios
    .get(`https://tometoyouapi/details/${route.params.id}`)
    .then((res) => {
      // set filename to response data
      filename.value = res.data.fileName[0];
    })
    .catch((err) => {
      console.log(err);
    });
});
// method to download file
const downloadFile = async () => {
  axios({
    url: `https://tometoyouapi/download/${route.params.id}`,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    console.log(response);
    // create file link in browser's memory
    const href = URL.createObjectURL(response.data);

    // create "a" HTLM element with href to file & click
    const link = document.createElement("a");
    link.href = href;
    link.setAttribute("download", filename.value);
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
  });
};
</script>

<template>
  <section class="py-10 bg-white overflow-hidden" id="upload">
    <div class="container px-48 py-28 mx-auto">
      <div  v-if="filename" class="text-center max-w-lg mx-auto">
        <h2
          class="mb-16 text-6xl md:text-7xl font-bold font-heading text-center"
        >
          You have a file to download!
        </h2>
        <p class="mb-8 text-lg text-gray-600 font-medium">
          To download
          <em class="text-indigo-700 text-xl font-bold">{{ filename }}</em
          >, click the button below.
        </p>
        <div class="mb-8 md:inline-block">
          <button
            class="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
            type="button"
            @click="downloadFile"
          >
            Download
          </button>
        </div>
      </div>

      <div  v-else class="text-center max-w-lg mx-auto">
        <h2
          class="mb-16 text-6xl md:text-7xl font-bold font-heading text-center"
        >
          This is a bad link, there is no file here :(
        </h2>
        <p class="mb-8 text-lg text-gray-600 font-medium">
          To go back, click the button below.
        </p>
        <div class="mb-8 md:inline-block">
          <button
            class="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
            type="button"
            @click="router.push({ name: 'home' })"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
