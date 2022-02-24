<template>
  <div class="w-screen">
    <div class="bg fixed inset-0 bg-scroll bg-cover"></div>
    <div class="relative h-screen my-auto">
      <div class="flex flex-row h-full w-full justify-center items-center px-1 md:px-2 -ml-12 md:-ml-0">
        <div class="h-auto max-h-fifty max-w-fifty">
          <LazyImgLoader
            :imgClass='"object-contain shadow-md bg-grey-500"'
            :imgSrc='require("@/assets/photos/contact/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-2.jpg")'
            :imgAlt='""' />
        </div>
        <div class="flex flex-col justify-center font-himalaya text-sm md:text-lg space-y-2 -ml-4 z-10">
          <p class="font-anton text-2xl md:text-4xl">GET IN TOUCH</p>
          <a href="mailto:hello@milancsizmadia.com">hello@milancsizmadia.com</a>
          <a href="tel:+36703273200">+36 70 3273 200</a>
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/milancsizmadia/">instagram</a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/milan-csizmadia-5254201a2/">linkedin</a>
          <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/channel/UC3I2cEFXVrCFG12jc9RsGuw">youtube</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImgLoader from '../components/LazyImgLoader.vue'

export default {
  name: 'About',
  components: {
    LazyImgLoader
  }
}
</script>

<style scoped>

.bg {
  background-image: url("../assets/photos/contact/WEB_CONTACT.jpg");
}
</style>
