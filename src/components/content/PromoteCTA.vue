<template>
  <section class="container mt-20 px-12">
    <RouterLink :to="{hash: '#'}" class="flex items-center justify-between bg-orange-500 hover:bg-orange-400 px-7 py-6 rounded-xl shadow-inner transition duration-200 ease-in-out">
      <div>
        <h2 class="text-white text-2xl font-medium mb-2 leading-8">Promote Your job</h2>
        <p class="text-white">Listings that are promoted average over 200% more views and 150% more applications.</p>
      </div>
      <div>
          <span class="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow">
            <svg class="text-gray-700 w-3 h-3"><use xlink:href="#chevron-right"></use></svg>
          </span>
      </div>
    </RouterLink>
  </section>
</template>

<script>
export default {
  name: "PromoteCTA",
}
</script>