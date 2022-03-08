<template>
  <div class="relative h-screen w-screen">
    <div class="bg fixed inset-0 bg-cover bg-scroll"></div>
    <div class="relative my-auto h-full">
      <div
        class="-ml-12 flex h-full w-full flex-row items-center justify-center px-1 md:-ml-0 md:px-2">
        <div
          class="flex max-h-fifty max-w-fifty justify-center"
          style="width: 540px; height: 540px">
          <LazyImgLoader
            :imgClass="'object-contain shadow-md bg-grey-500 w-full h-auto'"
            :imgSrc="
              require('@/assets/photos/contact/milan-csizmadia-photography-videography-automotive-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-milancsizmadia-2.jpg')
            "
            :imgAlt="''" />
        </div>
        <div
          class="z-10 -ml-4 flex flex-col justify-center space-y-2 font-himalaya text-base md:text-lg lg:text-2xl">
          <p class="pb-2 font-anton text-3xl md:text-4xl lg:text-5xl">
            GET IN TOUCH
          </p>
          <a class="select-all" href="mailto:hello@milancsizmadia.com"
            >hello@milancsizmadia.com</a
          >
          <a class="select-all" href="tel:+36703273200">+36 70 3273 200</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/milancsizmadia/"
            >instagram</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/milan-csizmadia-5254201a2/"
            >linkedin</a
          >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://youtube.com/channel/UC3I2cEFXVrCFG12jc9RsGuw"
            >youtube</a
          >
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
  background-image: url('../assets/photos/contact/WEB_CONTACT.jpg');
}
</style>
