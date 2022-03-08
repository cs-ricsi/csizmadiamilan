<template>
  <v-lazy-image
    :src="imgSrc"
    :width="imgWidth"
    :height="imgHeight"
    :alt="imgAlt"
    :class="imgClass"
    :intersection-options="lazyImgOptions" />
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
    imgWidth: String,
    imgHeight: String,
    lazyImgOptions: {
      root: document.querySelector('#scrollArea'),
      rootMargin: null,
      threshold: 0.0
    },
    imgSrc: String,
    imgAlt: String
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
