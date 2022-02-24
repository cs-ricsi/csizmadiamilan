<template>
  <div>
    <ScrollForMore />
    <img class="absolute inset-0 object-cover min-h-screen h-auto w-full"
      src="../../assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-sunglasses-worldwide-classy-woman.jpg"
      alt="">
    <div class="relative h-fifty md:h-seventy lg:h-screen mb-72 md:mb-48 lg:mb-20"></div>
    <div class="relative">
      <section class="pb-2 md:pb-4 lg:pb-8">
        <div class="relative w-full h-auto">
          <LazyImgLoader
            :imgClass='"object-cover h-full w-full"'
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-glasses-jeans-worldwide-classy-man-2.jpg")'
            :imgAlt='""' />
          <div class="absolute top-0 h-full w-full flex flex-col items-end pr-2 md:pr-4 lg:pr-8">
            <LazyImgLoader
              :imgClass='"flex-1 object-cover h-1/2 w-1/4 -mt-2 md:-mt-4 lg:-mt-8 pb-1 md:pb-2 lg:pb-4"'
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-glasses-jeans-worldwide-classy-man-3.jpg")'
              :imgAlt='""' />
            <LazyImgLoader
              :imgClass='"flex-1 object-cover h-1/2 w-1/4 -mb-2 md:-mb-4 lg:-mb-8 pt-1 md:pt-2 lg:pt-4"'
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-glasses-jeans-worldwide-classy-man.jpg")'
              :imgAlt='""' />
          </div>
        </div>
      </section>
      <section class="pt-2 md:pt-4 lg:pt-8">
        <div class="relative w-full h-auto">
          <LazyImgLoader
            :imgClass='"object-contain h-full w-full pl-24 md:pl-48 lg:pl-96"'
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-worldwide-classy-woman.jpg")'
            :imgAlt='""' />
          <div class="absolute top-0 h-full w-full flex flex-col items-start pl-2 md:pl-4 lg:pl-8">
            <LazyImgLoader
              :imgClass='"flex-1 object-cover h-1/2 w-1/2 -mt-2 md:-mt-4 lg:-mt-8 pb-1 md:pb-2 lg:pb-4"'
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-worldwide-classy-woman-2.jpg")'
              :imgAlt='""' />
            <LazyImgLoader
              :imgClass='"flex-1 object-cover h-1/2 w-1/2 -mb-2 md:-mb-4 lg:-mb-8 pt-1 md:pt-2 lg:pt-4 z-10"'
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-boots-worldwide-classy-woman.jpg")'
              :imgAlt='""' />
          </div>
        </div>
      </section>
      <section class="">
        <div class="w-full h-auto">
          <LazyImgLoader
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-sunglasses-black-and-white-worldwide-classy-man-2.jpg")'
            :imgAlt='""' />
        </div>
      </section>
      <section class="">
        <div class="w-full h-auto px-6 md:px-12 lg:px-24 -my-4 md:-my-8 lg:-my-16">
          <LazyImgLoader
            :imgClass='"relative object-cover shadow-md h-full w-full z-10"'
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-worldwide-classy-girl.jpg")'
            :imgAlt='""' />
        </div>
      </section>
      <section class="">
        <div class="w-full h-auto">
          <LazyImgLoader
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-f1-formula1-esports-mclaren-daniel-bereznay.jpg")'
            :imgAlt='""' />
        </div>
      </section>
      <section class="">
        <div class="w-full h-auto px-5 md:px-10 lg:px-20 -my-4 md:-my-8 lg:-my-16">
          <LazyImgLoader
            :imgClass='"object-cover shadow-md h-full w-full"'
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-faceoff-black-and-white-worldwide-bjj-classy-men.jpg")'
            :imgAlt='""' />
        </div>
      </section>
      <section class="-my-4 md:-my-8 lg:-my-16">
        <div class="relative flex items-center h-auto pl-2 md:pl-4 lg:pl-8 z-10">
          <div class="flex-1 place-self-stretch pr-1 md:pr-2 lg:pr-4">
            <LazyImgLoader
              :imgClass='"object-cover shadow-md h-full w-full"'
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-faceoff-black-and-white-worldwide-bjj-classy-men-grappling.jpg")'
              :imgAlt='""' />
          </div>
          <div class="flex-1 place-self-stretch px-1 md:px-2 lg:px-4">
            <LazyImgLoader
              :imgClass='"object-cover shadow-md h-full w-full"'
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-faceoff-black-and-white-worldwide-bjj-classy-man.jpg")'
              :imgAlt='""' />
          </div>
          <div class="flex-2 h-full w-full pl-1 md:pl-2 lg:pl-4">
            <LazyImgLoader
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-faceoff-black-and-white-worldwide-bjj-classy-men-2.jpg")'
              :imgAlt='""' />
          </div>
        </div>
      </section>
      <section class="">
        <div class="relative w-full h-auto">
          <LazyImgLoader
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-szeged-sunglasses-worldwide-classy-woman-2.jpg")'
            :imgAlt='""' />
        </div>
      </section>
      <section class="">
        <div class="relative flex flex-1 items-center p-2 md:p-4 lg:p-8">
          <div class="w-1/2 h-full pr-1 md:pr-2 lg:pr-4">
            <LazyImgLoader
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-wakeboard-worldwide-classy-man.jpg")'
              :imgAlt='""' />
          </div>
          <div class="w-1/2 h-full pl-1 md:pl-2 lg:pl-4">
            <LazyImgLoader
              :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-glasses-studio-worldwide-classy-man.jpg")'
              :imgAlt='""' />
          </div>
        </div>
      </section>
      <section class="">
        <div class="w-full h-auto">
          <LazyImgLoader
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-barbershop-black-and-white-worldwide-classy-man-2.jpg")'
            :imgAlt='""' />
        </div>
      </section>
      <section class="">
        <div class="w-full h-auto p-2 md:p-4 lg:p-8">
          <LazyImgLoader
            :imgSrc='require("@/assets/photos/portrait/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-body-builder-worldwide-classy-man.jpg")'
            :imgAlt='""' />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ScrollForMore from '../../components/ScrollForMore.vue'
import LazyImgLoader from '../../components/LazyImgLoader.vue'

export default {
  name: 'Portrait',
  components: {
    ScrollForMore,
    LazyImgLoader
  }
}
</script>
