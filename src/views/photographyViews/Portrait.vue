<template>
  <div>
    <ScrollForMore />
    <img class="absolute inset-0 object-cover h-auto w-full"
      src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-sunglasses-worldwide-classy-woman.jpg"
      alt="">
    <div class="relative h-48 md:h-96 lg:h-screen"></div>
    <div class="relative">
      <section class="pb-2 md:pb-4 lg:pb-8 pt-72 md:pt-48 lg:pt-12">
        <div class="relative w-full h-64 md:h-152 lg:h-224">
          <img class="absolute object-cover h-full w-full"
            src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-glasses-jeans-worldwide-classy-man-2.jpg"
            alt="">
          <div class="absolute h-full w-full flex flex-col items-end pr-2 md:pr-4 lg:pr-8">
            <img class="flex-1 object-cover h-1/2 w-1/4 -mt-2 md:-mt-4 lg:-mt-8 pb-1 md:pb-2 lg:pb-4"
              src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-glasses-jeans-worldwide-classy-man-3.jpg"
              alt="">
            <img class="flex-1 object-cover h-1/2 w-1/4 -mb-2 md:-mb-4 lg:-mb-8 pt-1 md:pt-2 lg:pt-4"
              src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-glasses-jeans-worldwide-classy-man.jpg"
              alt="">
          </div>
        </div>
      </section>
      <section class="pt-2 md:pt-4 lg:pt-8 z-10">
        <div class="relative w-full h-64 md:h-152 lg:h-224">
          <img class="absolute object-cover h-full w-full"
            src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-worldwide-classy-woman.jpg"
            alt="">
          <div class="absolute h-full w-full flex flex-col items-start pl-2 md:pl-4 lg:pl-8">
            <img class="flex-1 object-cover h-1/2 w-1/2 -mt-2 md:-mt-4 lg:-mt-8 pb-1 md:pb-2 lg:pb-4"
              src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-worldwide-classy-woman-2.jpg"
              alt="">
            <img class="flex-1 object-cover h-1/2 w-1/2 -mb-2 md:-mb-4 lg:-mb-8 pt-1 md:pt-2 lg:pt-4"
              src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-boots-worldwide-classy-woman.jpg"
              alt="">
          </div>
        </div>
      </section>
      <section class="">
        <div class="w-full h-64 md:h-152 lg:h-224">
          <img class="object-cover h-full w-full"
            src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-sunglasses-black-and-white-worldwide-classy-man-2.jpg"
            alt="">
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ScrollForMore from '../../components/ScrollForMore.vue'

export default {
  name: 'Portrait',
  components: {
    ScrollForMore
  }
}
</script>
