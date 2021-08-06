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
    <PromotedJobs/>

    <!-- Promote your job -->
    <PromoteCTA/>

    <!-- Testimonials -->
    <Testimonials/>

  </div>
</template>

<script>
import Button from "@/components/Button";
import PromotedJobs from "@/components/content/PromotedJobs";
import Testimonials from "@/components/content/Testimonials";
import PromoteCTA from "@/components/content/PromoteCTA";

export default {
  name: 'Home',

  data() {
    return {}
  },

  components: {
    Button,
    PromotedJobs,
    Testimonials,
    PromoteCTA
  },
}
</script>

<style lang="scss" scoped>

</style>