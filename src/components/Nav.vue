<template>
  <transition name="menu-from-top" mode="out-in">
    <img v-if="showMobileMenu" class="md:hidden fixed inset-0 object-cover h-screen w-full z-20 transition-all overflow-y-hidden"
      src="../assets/photos/phone/milan-csizmadia-photography-videography-horse-polo-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-event.jpg"
      alt="">
  </transition>
  <nav class="fixed inset-x-0 top-0 px-2 md:px-4 lg:px-8 py-2 md:py-4 lg:py-8 z-20 transition-all"
    :class="{ 'text-white fade-bg': !showMobileMenu, 'text-black': showMobileMenu }">
    <div class="flex">
      <router-link to="/" class="transition duration-600 ease-in-out">
        <div class="flex-col flex-1 flex-no-wrap font-anton justify-start transition-all">
          <p class="text-2xl md:text-3xl lg:text-5xl pr-2">MILAN</p>
          <p class="text-2xl md:text-3xl lg:text-5xl">CSIZMADIA</p>
        </div>
      </router-link>
      <div class="hidden md:flex flex-1 justify-end items-center text-lg">
        <MenuItemWithSubMenu :routeName='"Photography"'/>
        <MenuItem :routerTo='"/about"' :routeName='"About"'/>
        <MenuItem :routerTo='"/contact"' :routeName='"Contact"'/>
      </div>
      <div class="md:hidden flex flex-1 justify-end text-2xl">
        <button class="transition-all" v-if="!showMobileMenu" @click="showMobileMenu = true">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-2 md:stroke-1 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button class="transition-all" v-else @click="showMobileMenu = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-2 md:stroke-1 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <transition name="menu-from-top" mode="out-in">
      <div v-if="showMobileMenu" class="md:hidden h-screen text-4xl pl-2">
        <transition :name="showSubmenu ? 'menu-to-left' : 'menu-to-right'" mode="out-in">
          <div v-if="!showSubmenu" class="flex flex-col h-full">
            <div class="flex-1 flex flex-col justify-end items-center h-full">
              <div @click="showSubmenu = true"
                class="flex items-center relative font-himalaya mx-2 py-2 md:mx-4 md:border-b border-transparent hover:border-white lowercase cursor-pointer">
                photography
                <!-- margin top-ot atirni 0.35 remre -->
                <svg xmlns="http://www.w3.org/2000/svg" class="animation-bounce-right-long stroke-2 md:stroke-1 mt-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <MenuItem :routerTo='"/about"' :routeName='"About"'/>
              <MenuItem :routerTo='"/contact"' :routeName='"Contact"'/>
            </div>
            <div class="flex-1">
            </div>
          </div>
          <div v-else class="flex flex-col h-full">
            <div class="flex-1 flex flex-col justify-end items-center h-full">
              <MenuItem :routerTo='"/photography/automotive"' :routeName='"automotive"'/>
              <MenuItem :routerTo='"/photography/portrait-lifestyle"' :routeName='"portrait / lifestyle"'/>
              <MenuItem :routerTo='"/photography/sports"' :routeName='"sports"'/>
            </div>
            <div class="flex-1 flex justify-center items-center">
              <div @click="showSubmenu = false" class="font-himalaya text-2xl text-white mx-2 py-2 mt-16 md:mx-4 md:border-b border-transparent hover:border-white lowercase cursor-pointer">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="animation-bounce-left stroke-2 md:stroke-1 mt-1 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg> -->
                <p class="animation-bounce-right-short">go back</p>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </nav>
</template>

<script>
import MenuItem from './MenuItem.vue'
import MenuItemWithSubMenu from './MenuItemWithSubMenu.vue'

export default {

  name: 'Nav',
  components: {
    MenuItem,
    MenuItemWithSubMenu
  },
  data () {
    return {
      showMobileMenu: false,
      showSubmenu: false
    }
  },
  watch: {
    $route () {
      this.showMobileMenu = false
      this.showSubmenu = false
    }
  }
}

</script>

<style scoped>

  .fade-bg {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.812) 0%,
      rgba(0, 0, 0, 0.804) 2%,
      rgba(0, 0, 0, 0.792) 9%,
      rgba(0, 0, 0, 0.738) 19%,
      rgba(0, 0, 0, 0.541) 34%,
      rgba(0, 0, 0, 0.382) 47%,
      rgba(0, 0, 0, 0.278) 56.5%,
      rgba(0, 0, 0, 0.194) 65%,
      rgba(0, 0, 0, 0.126) 73%,
      rgba(0, 0, 0, 0.075) 80.2%,
      rgba(0, 0, 0, 0.042) 86.1%,
      rgba(0, 0, 0, 0.021) 91%,
      rgba(0, 0, 0, 0.008) 95.2%,
      rgba(0, 0, 0, 0.002) 98.2%,
      transparent 100%);
  }

  .animation-bounce-left {
    animation: bounce-left 1s infinite;
  }

  @keyframes bounce-left {
    0%, 100% {
      transform: translateX(-25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateX(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  .animation-bounce-right-short {
    animation: bounce-right-short 1s infinite;
  }

  @keyframes bounce-right-short {
    0%, 100% {
      transform: translateX(12%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateX(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

    .animation-bounce-right-long {
    animation: bounce-right-long 1s infinite;
  }

  @keyframes bounce-right-long {
    0%, 100% {
      transform: translateX(25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateX(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }

  .menu-from-top-enter-active,
  .menu-from-top-leave-active {
    transition: all 0.4s ease;
  }
  .menu-from-top-enter-from{
    opacity: 0;
    transform: translateY(-500px);
  }
  .menu-from-top-leave-to {
    opacity: 0;
    transform: translateY(-500px);
  }

  .menu-to-left-enter-active,
  .menu-to-left-leave-active {
    transition: all 0.3s ease;
  }
  .menu-to-left-enter-from{
    opacity: 0;
    transform: translateX(300px);
  }
  .menu-to-left-leave-to {
    opacity: 0;
    transform: translateX(-300px);
  }

  .menu-to-right-enter-active,
  .menu-to-right-leave-active {
    transition: all 0.3s ease;
  }
  .menu-to-right-enter-from{
    opacity: 0;
    transform: translateX(-300px);
  }
  .menu-to-right-leave-to {
    opacity: 0;
    transform: translateX(300px);
  }

</style>
