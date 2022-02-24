<template>
    <div>
        <ScrollForMore />
        <img class="absolute inset-0 object-cover min-h-screen h-auto w-full -mt-24 lg:-mt-0"
            src="@/assets/photos/sport/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-wakeboard-worldwide-classy-man.jpg"
            alt="">
        <div class="relative h-fifty md:h-seventy lg:h-screen mb-72 md:mb-48 lg:mb-20"></div>
        <div class="relative">
          <section class="">
            <div class="relative w-full h-auto">
              <LazyImgLoader
                :imgClass='"object-cover h-full w-full"'
                :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-horse-polo-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-event-elegant-milancsizmadia.jpg")'
                :imgAlt='""' />
              <div class="absolute top-0 h-full w-full flex flex-col items-start pl-2 md:pl-4 lg:pl-8">
                <LazyImgLoader
                  :imgClass='"flex-1 object-cover h-auto w-1/3 h-2/3 -mt-2 md:-mt-4 lg:-mt-8 pb-1 md:pb-2 lg:pb-4"'
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-horse-polo-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-event-winner-team-milancsizmadia.jpg")'
                  :imgAlt='""' />
                <LazyImgLoader
                  :imgClass='"flex-1 object-cover h-auto w-1/3 h-1/3 mb-2 md:mb-4 lg:mb-8 pt-1 md:pt-2 lg:pt-4 z-10"'
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-horse-polo-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-event-elegant-team-milancsizmadia.jpg")'
                  :imgAlt='""' />
              </div>
            </div>
          </section>
          <section class="">
            <div class="relative flex flex-1 items-center p-2 md:p-4 lg:p-8 z-10">
              <div class="w-1/2 h-full pr-1 md:pr-2 lg:pr-4">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-automotive-motorsport-racing-lifestyle-sports-budapest-hungary-europe-worldwide-red-ferrari-scudeira-f1-formula1-hungaroring-grand-prix-pitlane.jpg")'
                  :imgAlt='""' />
              </div>
              <div class="w-1/2 h-full pl-1 md:pl-2 lg:pl-4">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-automotive-motorsport-racing-lifestyle-sports-budapest-hungary-europe-worldwide-red-bull-racing-max-verstappen-f1-formula1-hungaroring-grand-prix-pitlane.jpg")'
                  :imgAlt='""' />
              </div>
            </div>
          </section>
          <section class="-my-4 md:-my-8 lg:-my-16">
            <div class="w-full h-auto">
              <LazyImgLoader
                :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-automotive-lifestyle-sports-jarama-touring-car-cupra-yokohama-volcano-motorsport-spain-europe-worldwide-racing-milancsizmadia.jpg")'
                :imgAlt='""' />
            </div>
          </section>
          <section class="px-2 md:px-4 lg:px-8 pb-1 md:pb-2 lg:pb-4 -mt-4 md:-mt-8 lg:-mt-16">
            <div class="flex flex-1 items-center">
                <div class="w-1/2">
                  <LazyImgLoader
                    :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-automotive-motorsport-racing-lifestyle-sports-budapest-hungary-europe-worldwide-porsche-gt2-rs-zengomotorsport-sportscar-trackday-milancsizmadia.jpg")'
                    :imgAlt='""' />
                </div>
                <div class="w-1/2">
                  <LazyImgLoader
                    :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-plane-motorsport-airshow-lifestyle-sports-budapest-hungary-europe-worldwide-moon-milancsizmadia.jpg")'
                    :imgAlt='""' />
                </div>
            </div>
            <div class="flex flex-1 items-center">
              <div class="w-1/2">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-ktm-motorsport-racing-lifestyle-sports-trackday-budapest-hungary-europe-grand-prix-live-fast-worldwide.jpg")'
                  :imgAlt='""' />
              </div>
              <div class="w-1/2">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-automotive-motorsport-racing-lifestyle-sports-endurance-belgium-europe-total24h-mercedes-amg-gt-hauptracing-spafrancorchamps-milancsizmadia.jpg")'
                  :imgAlt='""' />
              </div>
            </div>
          </section>
          <section class="py-1 md:py-2 lg:py-4">
            <div class="w-full h-auto">
              <LazyImgLoader
                :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-fanatec-simracing-lifestyle-sports-budapest-hungary-europe-esports-f1-formula1-hungaroring-grand-prix-pitlane-playseat-veloce-esports-aarava-daniel-bereznay.jpg")'
                :imgAlt='""' />
            </div>
          </section>
          <section class="">
            <div class="relative flex flex-1 items-center p-2 md:p-4 lg:p-8">
              <div class="w-1/2 h-full pr-1 md:pr-2 lg:pr-4">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-body-builder-worldwide-classy-man.jpg")'
                  :imgAlt='""' />
              </div>
              <div class="w-1/2 h-full pl-1 md:pl-2 lg:pl-4">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-classic-honda-motorsport-racing-lifestyle-sports-trackday-retro-hungary-europe-grand-prix-live-fast-worldwide.jpg")'
                  :imgAlt='""' />
              </div>
            </div>
          </section>
          <section class="py-1 md:py-2 lg:py-4">
            <div class="w-full h-auto">
              <LazyImgLoader
                :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-portrait-lifestyle-budapest-hungary-europe-photographer-freelance-wakeboard-smile-worldwide-classy-man-friczboti.jpg")'
                :imgAlt='""' />
            </div>
          </section>
          <section class="py-1 md:py-2 lg:py-4">
            <div class="relative flex h-auto">
              <div class="w-2/3 h-auto mr-2 md:mr-4 lg:mr-8">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-automotive-bmw-m4-gt4-trackday-hungaroring-motorsport-racing-livefast-lifestyle-sports-budapest-hungary-europe-pitlane-longexpo.jpg")'
                  :imgAlt='""' />
              </div>
              <div class="w-1/3 h-auto">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-automotive-bmw-m4-gt4-trackday-hungaroring-motorsport-racing-livefast-lifestyle-sports-budapest-hungary-europe-worldwide.jpg")'
                  :imgAlt='""' />
              </div>
            </div>
          </section>
          <section class="py-1 md:py-2 lg:py-4">
            <div class="w-full h-auto">
              <LazyImgLoader
                :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-classic-yamaha-vr46-motorsport-racing-lifestyle-sports-trackday-retro-hungary-europe-grand-prix-live-fast-worldwide.jpg")'
                :imgAlt='""' />
            </div>
          </section>
          <section class="">
            <div class="relative flex flex-1 items-center p-2 md:p-4 lg:p-8">
              <div class="w-1/2 h-full pr-1 md:pr-2 lg:pr-4">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-fanatec-simracing-lifestyle-sports-budapest-hungary-europe-esports-f1-formula1-f1esports-studio-veloce-esports-mclaren-daniel-bereznay.jpg")'
                  :imgAlt='""' />
              </div>
              <div class="w-1/2 h-full pl-1 md:pl-2 lg:pl-4">
                <LazyImgLoader
                  :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-videography-automotive-motorsport-racing-lifestyle-sports-budapest-hungary-europe-worldwide-mercedes-amg-gt-safety-car-f1-formula1-hungaroring-grand-prix-pitlane-2.jpg")'
                  :imgAlt='""' />
              </div>
            </div>
          </section>
          <section class="pt-1 md:pt-2 lg:pt-4">
            <div class="w-full h-auto">
              <LazyImgLoader
                :imgSrc='require("@/assets/photos/sport/milan-csizmadia-photography-automotive-pitlane-haupt-racing-motorsport-racing-lifestyle-sports-budapest-hungary-belgium-europe-worldwide-mercedes-amg-gt-spa-francorchamps-endurance-pitlane-total24h.jpg")'
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
  name: 'Sports',
  components: {
    ScrollForMore,
    LazyImgLoader
  }
}
</script>
