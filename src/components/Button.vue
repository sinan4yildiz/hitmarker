<template>
  <component :is="tag" :to="to" :type="to ? false : type" v-bind:class="classes">
    <slot>{{ label }}</slot>
  </component>
</template>

<script>
export default {
  name: "Button",

  props: {
    type: {
      type: String,
      default: 'button'
    },
    theme: {
      type: String,
    },
    label: {
      type: String,
    },
    size: {
      type: String,
    },
    to: {
      type: [Object, String],
    },
  },

  computed: {
    tag() {
      if(this.to) {
        return 'router-link'
      }

      return 'button'
    },

    classes() {
      let c = ['font-medium leading-8 rounded-md transition duration-150 ease-in-out']

      switch (this.size) {
        case 'large':
          c.push('text-base px-12 py-3')
          break

        default:
          c.push('text-sm px-4 py-3')
          break
      }

      switch (this.theme) {
        case 'orange':
          c.push('bg-orange-500 hover:bg-orange-400 text-white shadow-md')
          break
      }

      return c
    }
  },
}
</script>