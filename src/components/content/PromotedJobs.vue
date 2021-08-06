<template>
  <section class="relative pt-32">
    <div class="absolute left-0 top-0 bg-yellow-25 w-1/2 h-3/5 z-0"></div>
    <div class="container relative z-10 px-12">
      <div class="text-center mb-16">
        <h2 class="text-gray-900 text-4xl leading-tight mb-4">Promoted Jobs</h2>
        <p class="text-gray-450">These opportunities are shown on every page of our site and shared daily on our Twitter account.</p>
      </div>

      <ul class="grid grid-cols-3 gap-10">
        <li v-for="job in jobs" :key="job.id">
          <RouterLink :to="{hash: '#'}" class="block bg-white p-5 rounded-lg border border-gray-100 transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 class="text-lg text-black border-b border-gray-100 leading-4 pb-4 mb-4">{{ job.title }}</h3>
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
</template>

<script>
export default {
  name: "PromotedJobs",

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
      ],
    }
  },
}
</script>