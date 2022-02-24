<template>
  <div class="w-screen">
    <div class="bg fixed inset-0 bg-scroll bg-cover"></div>
    <div class="flex flex-col items-center justify-center text-center text-xs md:text-lg font-himalaya relative h-sixty md:h-seventy lg:h-eighty">
      <div class="py-1 md:py-2 lg:py-4">
        <FadeOutText :text="'Milan is a photographer and videographer based between'" />
        <FadeOutText :text="'Budapest, Hungary and his hometown Szeged.'"/>
      </div>
      <div class="py-1 md:py-2 lg:py-4">
        <FadeOutText :text="'He loves animals and has a strong passion for cars, sports, skiing.'" />
      </div>
      <div class="py-1 md:py-2 lg:py-4">
        <FadeOutText :text="'His photos generated over 20.000.000 views on Unsplash in the'" />
        <FadeOutText :text="'past two years with an average 210.000 clicks/picture'"/>
      </div>
    </div>
    <div class="relative flex flex-row flex-nowrap h-auto items-start mx-2 md:mx-16 lg:mx-36 pb-16 md:pb-32 lg:pb-64">
      <div class="w-1/4">
        <div class="flex flex-col items-end pt-28">
          <LazyImgLoader
            :imgClass='"object-contain shadow-md h-full w-full bg-grey-500"'
            :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-goat.jpg")'
            :imgAlt='""' />
          <LazyImgLoader
            :imgClass='"object-contain shadow-md h-auto w-7/12 bg-grey-500"'
            :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-selfie-worldwide-milancsizmadia.jpg")'
            :imgAlt='""' />
        </div>
      </div>
      <div class="w-2/4">
        <div class="flex flex-col">
          <LazyImgLoader
            :imgClass='"object-contain shadow-md h-full w-full bg-grey-500"'
            :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-6.jpg")'
            :imgAlt='""' />
          <div class="flex flex-row flex-nowrap">
            <div class="flex flex-col w-5/12 items-start">
              <LazyImgLoader
                :imgClass='"object-contain shadow-md h-auto w-full bg-grey-500"'
                :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia.jpg")'
                :imgAlt='""' />
              <LazyImgLoader
                :imgClass='"object-contain shadow-md h-auto w-full bg-grey-500"'
                :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-spa.jpg")'
                :imgAlt='""' />
            </div>
            <div class="flex flex-col w-7/12 items-start">
              <LazyImgLoader
                :imgClass='"object-contain shadow-md h-auto w-full bg-grey-500"'
                :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-3.jpg")'
                :imgAlt='""' />
              <LazyImgLoader
                :imgClass='"object-contain shadow-md h-auto w-10/12 bg-grey-500"'
                :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-5.jpg")'
                :imgAlt='""' />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 justify-start">
        <div class="flex flex-col">
          <LazyImgLoader
            :imgClass='"object-contain object-top shadow-md h-full w-full bg-grey-500"'
            :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-4-2.jpg")'
            :imgAlt='""' />
          <LazyImgLoader
            :imgClass='"object-contain object-top shadow-md h-auto w-3/4 bg-grey-500"'
            :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-2-2.jpg")'
            :imgAlt='""' />
          <LazyImgLoader
            :imgClass='"object-contain object-top shadow-md h-auto w-1/2 bg-grey-500"'
            :imgSrc='require("@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-3-3.jpg")'
            :imgAlt='""' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImgLoader from '../components/LazyImgLoader.vue'
import FadeOutText from '../components/FadeOutText.vue'

export default {
  name: 'About',
  components: {
    LazyImgLoader,
    FadeOutText
  },
  created () {
    this.fadeOutElements = document.getElementsByClassName('fade-out')
    document.addEventListener('scroll', this.scrollHandler)
  },
  onUnmounted () {
    document.removeEventListener('scroll', this.scrollHandler)
  },
  data () {
    return {
      fadeOutElements: []
    }
  },
  methods: {
    scrollHandler () {
      Array.from(this.fadeOutElements).forEach(el => {
        el.style.opacity = Math.round((el.getBoundingClientRect().top / el.offsetTop) * 10) / 10
      })
    }
  }
}
</script>

<style scoped>

.bg {
  background-image: url("../assets/photos/about/BACKGROUND.jpg");
}
</style>
