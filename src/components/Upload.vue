<script setup>
import UploadService from "../services/UploadFilesService";
import { ref } from "vue";

const currentFile = ref(undefined);
const progress = ref(0);
const file = ref(undefined);
const message = ref("");
const url = ref("");

const upload = () => {
  progress.value = 0;

  currentFile.value = file.value.files[0];
  UploadService.upload(currentFile.value, (event) => {
    progress.value = Math.round((100 * event.loaded) / event.total);
  })
    .then((response) => {
      message.value = response.data.message;
      url.value = response.data.url;
    })
    .catch(() => {
      progress.value = 0;
      message.value = "Could not upload the file!";
    });

  currentFile.value = undefined;
  file.value = undefined;
};
const clickUpload = () => {
  document.getElementById("uploadFile").click();
};
const copy = () => {
  navigator.clipboard.writeText(url.value);
};
</script>

<template>
  <section class="py-10 bg-white overflow-hidden" id="upload">
    <div v-if="currentFile" class="container px-48 py-36 mx-auto">
      <h2 class="text-6xl md:text-7xl font-bold font-heading text-center">
        Uploading
      </h2>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300 my-40">
        <div
          class="bg-indigo-700 h-2.5 rounded-full"
          :style="`width: ${progress}%`"
        ></div>
      </div>
    </div>
    <div v-if="url" class="container px-48 py-36 mx-auto">
      <h2 class="text-6xl font-semibold font-heading text-center mb-12">
        This is the URL to download your file:
      </h2>
      <h3
        class="text-indigo-700 text-4xl font-medium text-center underline mb-12"
      >
        <a :href="`http://localhost:5173/${url}`">
          http://localhost:5173/{{ url }}
        </a>
      </h3>
      <div class="w-full grid grid-cols-2">
        <button
          class="py-4 w-1/3 mx-auto text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
          type="button"
          @click="copy"
        >
          Copy link
          <img
            src="@/assets/images/Copy.svg"
            alt=""
            class="w-10 pl-3 inline-block"
          />
        </button>

        <button
          class="py-4 w-1/3 mx-auto text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
          type="button"
          @click="url = ''"
        >
          Upload a new file
        </button>
      </div>
    </div>
    <div
      v-else
      class="container px-48 py-36 mx-auto border-dashed border-2 border-amber-800 rounded-xl"
    >
      <div class="text-center max-w-lg mx-auto">
        <input
          class="hidden"
          id="uploadFile"
          type="file"
          ref="file"
          @change="upload"
        />
        <h2
          class="mb-16 text-6xl md:text-7xl font-bold font-heading text-center"
        >
          Upload Now.
        </h2>
        <p class="mb-8 text-lg text-gray-600 font-medium">
          To me To you is a service allows you to quickly and easily send and
          receive large files to anyone, anywhere without having to worry about
          limits, of any kind.
        </p>
        <div class="mb-8 md:inline-block">
          <button
            class="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
            type="button"
            @click="clickUpload"
          >
            Send Your Files
          </button>
        </div>
        <p class="mb-8 text-lg text-gray-600 font-medium">
          Or simply drag your file here.
        </p>
      </div>
    </div>
  </section>
</template>
