<template>
    <div class="absolute h-screen w-full z-10">
        <div class="absolute flex flex-1 invisible lg:visible bottom-0 w-full pb-8 animate-bounce font-himalaya text-3xl transition-all"
            :style="scrollOpacity">
            <p class="mx-auto">scroll for more</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ScrollForMore',
  created () {
    window.addEventListener('scroll', this.scrollHandler)
  },
  data () {
    return {
      scrollOpacity: {
        opacity: 1
      }
    }
  },
  methods: {
    scrollHandler (e) {
      this.scrollOpacity.opacity = Math.round((1 - e.target.scrollingElement.scrollTop / 1000 * 2.5) * 10) / 10
    }
  }
}
</script>
