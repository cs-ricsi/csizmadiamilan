<template>
  <router-link :to="routerTo" @mouseenter="mouseOn = true" @mouseleave="mouseOn = false"
    class="relative font-himalaya mx-2 py-2 md:mx-4 lowercase">
    {{ routeName }}
    <MenuUnderline :menu="routeName" :hover="mouseOn"/>
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
    routeName: String
  },
  data () {
    return {
      mouseOn: false
    }
  }
}
</script>
