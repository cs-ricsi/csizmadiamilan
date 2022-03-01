<template>
  <div
    @click="toggleMenu"
    @mouseenter="this.mouseOn = true"
    @mouseleave="closeMenu"
    class="relative mx-2 cursor-pointer py-2 font-himalaya lowercase text-white transition-all md:mx-4">
    {{ routeName }}
    <MenuUnderline :menu="routeName" :hover="mouseOn" />
    <transition name="main-router-anim" mode="out-in">
      <div
        v-if="showSubMenu"
        @click="this.mouseOn = false"
        class="absolute right-0 flex h-auto w-56 flex-col items-end text-white">
        <router-link
          :to="'/photography/automotive'"
          class="mt-2 py-1 opacity-70 hover:opacity-100">
          automotive
        </router-link>
        <router-link
          :to="'/photography/portrait-lifestyle'"
          class="py-1 opacity-70 hover:opacity-100">
          portrait / lifestyle
        </router-link>
        <router-link
          :to="'/photography/sports'"
          class="py-1 opacity-70 hover:opacity-100">
          sports
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import MenuUnderline from './MenuUnderline.vue'

export default {
  name: 'MenuItemWithSubMenu',
  components: {
    MenuUnderline
  },
  props: ['routerTo', 'routeName'],
  data() {
    return {
      showSubMenu: false,
      mouseOn: false
    }
  },
  methods: {
    toggleMenu() {
      this.showSubMenu = !this.showSubMenu
    },
    closeMenu() {
      this.showSubMenu = false
      this.mouseOn = false
    },
    openMenu() {
      this.showSubMenu = true
      this.mouseOn = true
    }
  }
}
</script>

<style scoped>
.main-router-anim-enter-active {
  animation: pagecome 0.5s ease-in-out;
  opacity: 0;
}
.main-router-anim-leave-active {
  animation: pagego 0.5s ease-in-out;
}

@keyframes pagego {
  from {
    transform: translatey(0);
  }
  to {
    transform: translatey(50px);
    opacity: 0;
  }
}
@keyframes pagecome {
  from {
    transform: translatey(-30px);
    opacity: 0;
  }
  to {
    transform: translatey(0);
    opacity: 1;
  }
}
</style>
