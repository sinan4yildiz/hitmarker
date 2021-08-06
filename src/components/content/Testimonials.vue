<template>
  <section class="container flex mt-20 px-12">
    <div class="w-5/12 pr-12">
      <img src="images/testimonials-figure-optimized.png" width="660" height="713" alt="" class="max-w-full">
      <img src="images/testimonials-dots.svg" width="260" height="192" alt="" class="float-right -mr-32 -mt-4">
    </div>
    <div class="w-7/12 pt-36">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-gray-800 text-5xl font-medium">What people say</h2>
        <ul class="flex items-center">
          <li class="mr-5">
            <Button class="flex items-center justify-center w-13 h-13 bg-orange-50 hover:bg-orange-500 text-orange-500 hover:text-white transition duration-150 ease-in-out rounded-full">
              <svg class="w-6 h-6">
                <use xlink:href="#arrow-left"></use>
              </svg>
            </Button>
          </li>
          <li>
            <Button class="flex items-center justify-center w-13 h-13 bg-orange-50 hover:bg-orange-500 text-orange-500 hover:text-white transition duration-150 ease-in-out rounded-full">
              <svg class="w-6 h-6">
                <use xlink:href="#arrow-right"></use>
              </svg>
            </Button>
          </li>
        </ul>
      </div>
      <div class="border-l-10 border-orange-500 bg-white shadow-xl -ml-20">
        <ol class="border-r border-b border-t border-gray-100">
          <li v-for="item in testimonials" :key="item.id" class="p-10">
            <div class="flex items-center justify-between">
              <div class="mr-4">
                <h3 class="text-gray-800 text-3xl mb-3">{{ item.fullname }}</h3>
                <h4 class="text-gray-800 text-2xl mb-5">{{ item.title }}</h4>
              </div>
              <ul class="flex items-center">
                <li v-for="rating in 5" :key="rating" class="ml-1">
                  <svg class="w-6 h-6" v-bind:class="{'text-yellow-400': rating <= item.rating, 'text-gray-300': rating => item.rating}">
                    <use xlink:href="#star"></use>
                  </svg>
                </li>
              </ul>
            </div>
            <p class="text-gray-700 text-sm leading-relaxed">{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonials",

  data() {
    return {
      testimonials: [
        {
          id: 1,
          fullname: "Darrell Steward",
          title: "CEO, ESport.",
          rating: "4",
          text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        }
      ]
    }
  },
}
</script>