<script setup>
import FiveStars from "./stars/FiveStars.vue";
</script>

<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-3 gap-8 -m-8">
        <div
          class="w-full py-8 border-dashed border-2 border-amber-800 rounded-xl hover:bg-gray-100 cursor-pointer"
        >
          <div class="md:max-w-xs mx-auto text-center">
            <div class="flex justify-center mb-6 -m-1">
              <FiveStars />
            </div>
            <h3 class="mb-4 text-2xl font-semibold leading-snug">
              <span
                >I am a musician and I use To me To you all the time to send
                files of my music to my team. It is so easy and it is great for
                me because I don't have to worry about how big my files
                are.</span
              >
              <h3></h3>
            </h3>
            <p class="text-gray-600 font-medium">Tonia Cowan</p>
          </div>
        </div>
        <div
          class="w-full py-8 border-dashed border-2 border-amber-800 rounded-xl hover:bg-gray-100 cursor-pointer"
        >
          <div class="md:max-w-xs mx-auto text-center">
            <div class="flex justify-center mb-6 -m-1">
              <FiveStars />
            </div>
            <h3 class="mb-4 text-2xl font-semibold leading-snug">
              <span
                >I love it! The site is super easy to use and makes file sharing
                a breeze!</span
              >
              <h3></h3>
            </h3>
            <p class="text-gray-600 font-medium">Norbert Sparks</p>
          </div>
        </div>
        <div
          class="w-full py-8 border-dashed border-2 border-amber-800 rounded-xl hover:bg-gray-100 cursor-pointer"
        >
          <div class="md:max-w-xs mx-auto text-center">
            <div class="flex justify-center mb-6 -m-1">
              <FiveStars />
            </div>
            <h3 class="mb-4 text-2xl font-semibold leading-snug">
              <span
                >I have used many file transfer applications and this the best.
                It is fast and there are no limits on the size of the files that
                can be sent. I highly recommend it!</span
              >
              <h3></h3>
            </h3>
            <p class="text-gray-600 font-medium">Cassie Weber</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
