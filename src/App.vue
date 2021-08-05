<template>
  <div id="wrapper">

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

    <main>
      <RouterView/>
    </main>

    <footer>

    </footer>

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
