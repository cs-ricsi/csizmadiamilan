<template>
  <div class="absolute z-10 h-screen w-full">
    <div
      class="invisible absolute bottom-0 flex w-full flex-1 animate-bounce pb-8 font-himalaya text-3xl transition-all lg:visible"
      :style="scrollOpacity">
      <p class="mx-auto">scroll for more</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollForMore',
  created() {
    window.addEventListener('scroll', this.scrollHandler)
  },
  data() {
    return {
      scrollOpacity: {
        opacity: 1
      }
    }
  },
  methods: {
    scrollHandler(e) {
      this.scrollOpacity.opacity =
        Math.round(
          (1 - (e.target.scrollingElement.scrollTop / 1000) * 2.5) * 10
        ) / 10
    }
  }
}
</script>
