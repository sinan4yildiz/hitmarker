<template>
  <div>

    <!-- Hero -->
    <section class="bg-gray-950">
      <div class="container flex pt-10 pb-32 items-center">
        <div class="w-1/2 pr-10">
          <h1 class="text-white text-5xl mb-10 font-bold leading-tight">The home of gaming and esports jobs</h1>
          <p class="text-white text-sm mb-12">With over 8,000 active listings from more than 50 countries, Hitmarker is the largest gaming and esports jobs platform in the world. Find your dream career. Hire top talent. Make your mark.</p>
          <div class="flex items-center">
            <Button :to="{hash: '#'}" theme="orange" size="large" class="mr-4">View Jobs</Button>
            <Button :to="{hash: '#'}" class="flex items-center text-white">
              <svg class="w-10 h-10 mr-3">
                <use xlink:href="#play"></use>
              </svg>
              <span>Watch our video</span>
            </Button>
          </div>
        </div>

        <div class="w-1/2">
          <img src="images/hero-large-optimized.png" width="1034" height="955" alt="" class="max-w-full transform translate-x-10">
        </div>
      </div>
    </section>

    <!-- Clients -->
    <section class="container relative z-10">
      <ul class="grid grid-cols-5 gap-10 items-center text-gray-350 bg-white px-6 py-8 rounded-lg -my-14">
        <li>
          <svg class="w-full h-10">
            <use xlink:href="#amazon"></use>
          </svg>
        </li>
        <li>
          <svg class="w-full h-12">
            <use xlink:href="#faze"></use>
          </svg>
        </li>
        <li>
          <svg class="w-full h-10">
            <use xlink:href="#bbc"></use>
          </svg>
        </li>
        <li>
          <svg class="w-full h-12">
            <use xlink:href="#team-liquid"></use>
          </svg>
        </li>
        <li>
          <svg class="w-full h-10">
            <use xlink:href="#logitech"></use>
          </svg>
        </li>
      </ul>
    </section>

    <!-- Jobs -->
    <section class="relative pt-32">
      <div class="absolute left-0 top-0 bg-yellow-25 w-1/2 h-2/3 z-0"></div>
      <div class="container relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-gray-900 text-4xl leading-tight mb-4">Promoted Jobs</h2>
          <p class="text-gray-450 font-light">These opportunities are shown on every page of our site and shared daily on our Twitter account.</p>
        </div>

        <ul class="grid grid-cols-3 gap-10">
          <li v-for="job in jobs" :key="job.id">
            <RouterLink :to="{hash: '#'}" class="block bg-white p-4 rounded-lg border border-gray-100 transition duration-300 hover:shadow-2xl">
              <h3 class="text-lg text-black border-b border-gray-100 pb-4 mb-4">{{ job.title }}</h3>
              <div class="flex items-center mb-4">
                <img v-bind:src="'images/advertisers/' + job.img" class="w-6">
                <span class="ml-3">{{ job.company }}</span>
              </div>
              <div class="flex items-center">
                <div class="w-6">
                  <svg class="w-5 h-4 ml-px">
                    <use v-bind:xlink:href="'#' + job.country_code"></use>
                  </svg>
                </div>
                <div class="ml-3 text-xs text-gray-400">{{ job.country }}</div>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: 'Home',

  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Social Video Creator",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Germany",
          country_code: "de",
        },
        {
          id: 2,
          title: "Esports Competition Coordinator",
          company: "Thescore",
          img: "thescore.png",
          country: "Canada",
          country_code: "ca",
        },
        {
          id: 3,
          title: "Graphic Designer",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Ireland",
          country_code: "ie",
        },
        {
          id: 4,
          title: "Esports Competition Coordinator",
          company: "Thescore",
          img: "thescore.png",
          country: "Canada",
          country_code: "ca",
        },
        {
          id: 5,
          title: "Social Video Creator",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Germany",
          country_code: "de",
        },
        {
          id: 6,
          title: "Graphic Designer",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Ireland",
          country_code: "ie",
        },
        {
          id: 7,
          title: "Social Video Creator",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Germany",
          country_code: "de",
        },
        {
          id: 8,
          title: "Graphic Designer",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Ireland",
          country_code: "ie",
        },
        {
          id: 9,
          title: "Esports Competition Coordinator",
          company: "Thescore",
          img: "thescore.png",
          country: "Canada",
          country_code: "ca",
        },
        {
          id: 10,
          title: "Esports Competition Coordinator",
          company: "Thescore",
          img: "thescore.png",
          country: "Canada",
          country_code: "ca",
        },
        {
          id: 11,
          title: "Social Video Creator",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Germany",
          country_code: "de",
        },
        {
          id: 12,
          title: "Graphic Designer",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Ireland",
          country_code: "ie",
        },
        {
          id: 13,
          title: "Social Video Creator",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Germany",
          country_code: "de",
        },
        {
          id: 14,
          title: "Graphic Designer",
          company: "Pipeline.com",
          img: "pipeline.png",
          country: "Ireland",
          country_code: "ie",
        },
        {
          id: 15,
          title: "Esports Competition Coordinator",
          company: "Thescore",
          img: "thescore.png",
          country: "Canada",
          country_code: "ca",
        },
      ]
    }
  },

  components: {
    Button
  },
}
</script>

<style lang="scss" scoped>

</style>