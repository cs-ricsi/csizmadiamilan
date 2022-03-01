<template>
  <div class="w-screen">
    <div class="bg fixed inset-0 bg-cover bg-scroll"></div>
    <div
      class="relative flex h-fifty flex-col items-center justify-center text-center font-himalaya text-base md:h-sixty md:text-lg lg:h-seventy lg:text-xl">
      <div class="py-1 md:py-2 lg:py-4">
        <FadeOutText
          :text="'Milan is a photographer and videographer based between'" />
        <FadeOutText :text="'Budapest, Hungary and his hometown Szeged.'" />
      </div>
      <div class="py-1 md:py-2 lg:py-4">
        <FadeOutText
          :text="'He loves animals and has a strong passion for cars, sports, skiing.'" />
      </div>
      <div class="py-1 md:py-2 lg:py-4">
        <FadeOutText
          :text="'His photos generated over 20.000.000 views on Unsplash in the'" />
        <FadeOutText
          :text="'past two years with an average 210.000 clicks/picture'" />
      </div>
    </div>
    <div
      class="relative mx-2 flex h-auto flex-row flex-nowrap items-start pb-16 md:mx-16 md:pb-32 lg:mx-36 lg:pb-64">
      <div class="w-1/4">
        <div class="flex h-auto w-full flex-col items-end pt-28">
          <LazyImgLoader
            :imgClass="'object-contain shadow-md h-full w-full bg-grey-500'"
            :imgSrc="
              require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-goat.jpg')
            "
            :imgAlt="''" />
          <LazyImgLoader
            :imgClass="'object-contain shadow-md h-auto w-7/12 bg-grey-500'"
            :imgSrc="
              require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-selfie-worldwide-milancsizmadia.jpg')
            "
            :imgAlt="''" />
        </div>
      </div>
      <div class="w-2/4">
        <div class="flex h-auto w-full flex-col">
          <LazyImgLoader
            :imgClass="'object-contain shadow-md h-full w-full bg-grey-500'"
            :imgSrc="
              require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-6.jpg')
            "
            :imgAlt="''" />
          <div class="flex h-auto w-full flex-row flex-nowrap">
            <div class="flex w-5/12 flex-col items-start">
              <LazyImgLoader
                :imgClass="'object-contain shadow-md h-auto w-full bg-grey-500'"
                :imgSrc="
                  require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia.jpg')
                "
                :imgAlt="''" />
              <LazyImgLoader
                :imgClass="'object-contain shadow-md h-auto w-full bg-grey-500'"
                :imgSrc="
                  require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-spa.jpg')
                "
                :imgAlt="''" />
            </div>
            <div class="flex w-7/12 flex-col items-start">
              <LazyImgLoader
                :imgClass="'object-contain shadow-md h-auto w-full bg-grey-500'"
                :imgSrc="
                  require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-3.jpg')
                "
                :imgAlt="''" />
              <LazyImgLoader
                :imgClass="'object-contain shadow-md h-auto w-10/12 bg-grey-500'"
                :imgSrc="
                  require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-5.jpg')
                "
                :imgAlt="''" />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/4 justify-start">
        <div class="flex h-auto w-full flex-col">
          <LazyImgLoader
            :imgClass="'object-contain object-top shadow-md h-full w-full bg-grey-500'"
            :imgSrc="
              require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-4-2.jpg')
            "
            :imgAlt="''" />
          <LazyImgLoader
            :imgClass="'object-contain object-top shadow-md h-auto w-3/4 bg-grey-500'"
            :imgSrc="
              require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-2-2.jpg')
            "
            :imgAlt="''" />
          <LazyImgLoader
            :imgClass="'object-contain object-top shadow-md h-auto w-1/2 bg-grey-500'"
            :imgSrc="
              require('@/assets/photos/about/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-3-3.jpg')
            "
            :imgAlt="''" />
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
  created() {
    this.fadeOutElements = document.getElementsByClassName('fade-out')
    document.addEventListener('scroll', this.scrollHandler)
  },
  onUnmounted() {
    document.removeEventListener('scroll', this.scrollHandler)
  },
  data() {
    return {
      fadeOutElements: []
    }
  },
  methods: {
    scrollHandler() {
      Array.from(this.fadeOutElements).forEach((el) => {
        el.style.opacity =
          Math.round((el.getBoundingClientRect().top / el.offsetTop) * 10) / 10
      })
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: url('../assets/photos/about/BACKGROUND.jpg');
}
</style>
