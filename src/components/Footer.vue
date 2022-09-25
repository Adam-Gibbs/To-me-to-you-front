<script setup></script>

<template>
  <section class="relative py-5 bg-indigo-600 overflow-hidden">
    <div class="grid grid-cols-3 justify-between mx-48">
      <div
        class="grid grid-cols-3 w-56 items-center text-white text-2xl font-bold font-heading"
      >
        <em>To me</em>
        <img src="@/assets/images/WhiteLogo.svg" alt="" class="w-14 pl-3" />
        <em>To you</em>
      </div>
      <div class="w-auto mx-auto">
        <ul class="flex flex-wrap items-center">
          <li
            class="px-4 py-2 mx-2 bg-white rounded-xl hover:bg-gray-200 text-gray-600 hover:text-gray-700 cursor-pointer"
          >
            About
          </li>
          <li
            class="px-4 py-2 mx-2 bg-white rounded-xl hover:bg-gray-200 text-gray-600 hover:text-gray-700 cursor-pointer"
          >
            Legal
          </li>
          <li
            class="px-4 py-2 mx-2 bg-white rounded-xl hover:bg-gray-200 text-gray-600 hover:text-gray-700 cursor-pointer"
          >
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
