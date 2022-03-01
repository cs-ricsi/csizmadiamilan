<template>
  <router-link
    :to="routerTo"
    @mouseenter="mouseOn = true"
    @mouseleave="mouseOn = false"
    class="text-inherit hover:text-inherit active:text-inherit focus:text-inherit relative mx-2 py-1 font-himalaya lowercase md:mx-4 lg:py-2">
    {{ routeName }}
    <MenuUnderline v-show="showUnderline" :menu="routeName" :hover="mouseOn" />
  </router-link>
</template>

<script>
import MenuUnderline from './MenuUnderline.vue'

export default {
  name: 'MenuItem',
  components: {
    MenuUnderline
  },
  props: {
    routerTo: String,
    routeName: String,
    showUnderline: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mouseOn: false
    }
  },
  watch: {
    $route(to, from) {
      this.mouseOn = false
    }
  }
}
</script>
