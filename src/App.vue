<template>
  <div id="wrapper">

    <!-- Header -->
    <header class="py-8 bg-gray-950">
      <div class="container">
        <div class="grid grid-cols-12 items-center">

          <!-- Logo -->
          <div class="col-span-3">
            <RouterLink :to="{name: 'home'}">
              <svg class="w-40 h-7">
                <use xlink:href="#logo"></use>
              </svg>
            </RouterLink>
          </div>

          <!-- Navbar -->
          <nav class="col-span-6 flex justify-center">
            <ul class="flex">
              <li class="mr-10">
                <RouterLink :to="{hash: '#'}" class="text-white text-sm">Find a job</RouterLink>
              </li>
              <li class="mr-10">
                <RouterLink :to="{hash: '#'}" class="text-white text-sm">Post a job</RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="text-white text-sm">Career advice</RouterLink>
              </li>
            </ul>
          </nav>

          <!--
           Navbar and account actions can be combined in the <nav> tag as the account actions are also a navigation item.
           But to make the header children exactly aligned to each other I kept them separated
           -->

          <!-- Account actions -->
          <div class="col-span-3 justify-self-end">
            <ul class="flex items-center">
              <li class="mr-7">
                <RouterLink :to="{hash: '#'}" class="text-white text-sm">Login</RouterLink>
              </li>
              <li>
                <Button :to="{hash: '#'}" theme="orange">Create Account</Button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </header>

    <!-- Main -->
    <main>
      <RouterView/>
    </main>

    <!-- Footer -->
    <footer class="mt-32">
      <div class="container">
        <!-- Columns -->
        <div class="grid grid-cols-12 gap-20">
          <div class="col-span-3">
            <svg class="w-9 h-9">
              <use xlink:href="#logo-symbol"></use>
            </svg>
            <p class="text-sm text-gray-500 mt-6">Open an account in minutes, get full Control for much longer.</p>
          </div>

          <div class="col-span-2">
            <h4 class="text-gray-900 text-2xl mb-6">Company</h4>
            <ul class="grid gap-2">
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">About</RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Careers</RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Mobile</RouterLink>
              </li>
            </ul>
          </div>

          <div class="col-span-2">
            <h4 class="text-gray-900 text-2xl mb-6">Contact</h4>
            <ul class="grid gap-2">
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Help/FAQ</RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Press</RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Affiliates</RouterLink>
              </li>
            </ul>
          </div>

          <div class="col-span-2">
            <h4 class="text-gray-900 text-2xl mb-6">More</h4>
            <ul class="grid gap-2">
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Airline fees</RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Airlines</RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="text-gray-700 text-lg hover:text-orange-500">Low fare tips</RouterLink>
              </li>
            </ul>
          </div>

          <div class="col-span-3">
            <h4 class="text-gray-900 text-2xl mb-3">Discover Our App</h4>
            <div class="flex items-center mb-5">
              <RouterLink :to="{hash: '#'}" class="mr-3">
                <svg class="w-28 h-12">
                  <use xlink:href="#google-play"></use>
                </svg>
              </RouterLink>
              <RouterLink :to="{hash: '#'}">
                <svg class="w-28 h-12">
                  <use xlink:href="#apple-store"></use>
                </svg>
              </RouterLink>
            </div>
            <ul class="grid grid-flow-col auto-cols-max gap-6">
              <li>
                <RouterLink :to="{hash: '#'}" class="inline-flex items-center justify-center w-12 h-12 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-200 ease-in-out">
                  <svg class="w-4 h-4">
                    <use xlink:href="#facebook"></use>
                  </svg>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="inline-flex items-center justify-center w-12 h-12 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-200 ease-in-out">
                  <svg class="w-4 h-4">
                    <use xlink:href="#instagram"></use>
                  </svg>
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="{hash: '#'}" class="inline-flex items-center justify-center w-12 h-12 border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-200 ease-in-out">
                  <svg class="w-4 h-4">
                    <use xlink:href="#twitter"></use>
                  </svg>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-300 mt-20 py-5 text-center text-gray-700">
          All rights reserved Hitmarker
        </div>
      </div>
    </footer>

    <!-- SVG library -->
    <SVGLib/>
  </div>
</template>

<script>
import SVGLib from "@/components/SVGLib";
import Button from "@/components/Button";

export default {
  name: 'App',
  components: {
    SVGLib,
    Button
  },
}
</script>

<style lang="scss" scoped>

</style>
