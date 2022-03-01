<template>
  <transition name="menu-opacity" mode="out-in">
    <img
      v-if="showMobileMenu"
      class="fixed inset-0 z-20 h-screen w-full overflow-y-hidden object-cover transition-all md:hidden"
      src="../assets/photos/phone/milan-csizmadia-photography-videography-horse-polo-portrait-lifestyle-sports-budapest-hungary-europe-worldwide-event.jpg"
      alt="" />
  </transition>
  <nav
    class="fixed inset-x-0 top-0 z-20 px-4 py-2 transition-all md:px-4 md:py-4 lg:px-8 lg:py-8"
    :class="{
      'fade-bg text-white': !showMobileMenu,
      'text-black': showMobileMenu
    }">
    <div class="flex">
      <router-link to="/" class="duration-600 transition ease-in-out">
        <div
          class="flex-no-wrap mx-2 flex-1 flex-col justify-start font-anton transition-all md:mx-4">
          <p class="pr-2 text-xl md:text-2xl lg:text-3xl">MILAN</p>
          <p class="text-xl md:text-2xl lg:text-3xl">CSIZMADIA</p>
        </div>
      </router-link>
      <div class="hidden flex-1 items-center justify-end text-xl md:flex">
        <MenuItemWithSubMenu :routeName="'Photography'" />
        <MenuItem :routerTo="'/about'" :routeName="'About'" />
        <MenuItem :routerTo="'/contact'" :routeName="'Contact'" />
      </div>
      <div class="flex flex-1 justify-end text-2xl md:hidden">
        <button
          class="transition-all"
          v-if="!showMobileMenu"
          @click="showMobileMenu = true"
          aria-label="Open Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 stroke-2 transition-all md:stroke-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button
          class="transition-all"
          v-else
          @click="showMobileMenu = false"
          aria-label="Close Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 stroke-2 transition-all md:stroke-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <transition name="menu-from-top" mode="out-in">
      <div v-if="showMobileMenu" class="h-screen pl-2 text-5xl md:hidden">
        <transition
          :name="showSubmenu ? 'menu-to-left' : 'menu-to-right'"
          mode="out-in">
          <div v-if="!showSubmenu" class="flex h-full flex-col">
            <div class="flex h-full flex-1 flex-col items-center justify-end">
              <div
                @click="showSubmenu = true"
                class="relative mx-2 flex cursor-pointer items-center border-transparent py-2 font-himalaya lowercase hover:border-white md:mx-4 md:border-b">
                photography
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="animation-bounce-right-long mt-1 h-5 w-5 stroke-2 md:stroke-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <MenuItem
                :showUnderline="false"
                :routerTo="'/about'"
                :routeName="'About'" />
              <MenuItem
                :showUnderline="false"
                :routerTo="'/contact'"
                :routeName="'Contact'" />
            </div>
            <div class="flex-1"></div>
          </div>
          <div v-else class="flex h-full flex-col">
            <div class="flex h-full flex-1 flex-col items-center justify-end">
              <MenuItem
                :showUnderline="false"
                :routerTo="'/photography/automotive'"
                :routeName="'automotive'" />
              <MenuItem
                :showUnderline="false"
                :routerTo="'/photography/portrait-lifestyle'"
                :routeName="'portrait / lifestyle'" />
              <MenuItem
                :showUnderline="false"
                :routerTo="'/photography/sports'"
                :routeName="'sports'" />
            </div>
            <div class="flex flex-1 items-center justify-center">
              <div
                @click="showSubmenu = false"
                class="mx-2 cursor-pointer border-transparent py-2 font-himalaya text-3xl lowercase text-white hover:border-white md:mx-4 md:border-b">
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
  data() {
    return {
      showMobileMenu: false,
      showSubmenu: false
    }
  },
  watch: {
    $route() {
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
    transparent 100%
  );
}

.animation-bounce-left {
  animation: bounce-left 1s infinite;
}

@keyframes bounce-left {
  0%,
  100% {
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
  0%,
  100% {
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
  0%,
  100% {
    transform: translateX(25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateX(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.menu-opacity-enter-active,
.menu-opacity-leave-active {
  transition: all 0.3s ease-in-out;
}
.menu-opacity-enter-from {
  opacity: 0;
}
.menu-opacity-leave-to {
  opacity: 0;
}

.menu-from-top-enter-active,
.menu-from-top-leave-active {
  transition: all 0.4s ease-in-out;
}
.menu-from-top-enter-from {
  opacity: 0;
  transform: translateY(-50%);
}
.menu-from-top-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}

.menu-to-left-enter-active,
.menu-to-left-leave-active {
  transition: all 0.3s ease;
}
.menu-to-left-enter-from {
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
.menu-to-right-enter-from {
  opacity: 0;
  transform: translateX(-300px);
}
.menu-to-right-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
