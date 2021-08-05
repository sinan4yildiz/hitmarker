<template>
  <component :is="tag" :to="to" :type="type" v-bind:class="classes">
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
      let c = ['font-medium rounded-md']

      switch (this.size) {
        case 'large':
          c.push('text-base px-12 py-3 leading-7')
          break

        default:
          c.push('text-sm px-4 py-1 leading-8')
          break
      }

      switch (this.theme) {
        case 'orange':
          c.push('bg-orange-500 text-white shadow-md')
          break
      }

      return c
    }
  },
}
</script>