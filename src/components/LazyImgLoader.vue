<template>
    <v-lazy-image
        :class="imgClass"
        :src="imgSrc"
        :alt="imgAlt"
        :intersection-options="lazyImgOptions"
        @intersect="intersect($event)"
        @load="setLoaded($event)" />
</template>

<script>
import VLazyImage from 'v-lazy-image'

export default {
  name: 'LazyImgLoader',
  components: {
    VLazyImage
  },
  props: {
    imgClass: {
      type: String,
      default: 'object-cover shadow-md h-full w-full bg-grey-500'
    },
    lazyImgOptions: {
      root: document.querySelector('#scrollArea'),
      rootMargin: '50px',
      threshold: 0.0
    },
    imgSrc: String,
    imgAlt: String
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    setLoaded (e) {
      console.log(e)
      this.loaded = true
    },
    intersect (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
  .v-lazy-image {
    opacity: 0;
    transform: translateY(25%);
    transition: all 0.4s ease;
  }
  .v-lazy-image-loaded {
    opacity: 1;
    transform: translateY(0%);
  }
</style>
