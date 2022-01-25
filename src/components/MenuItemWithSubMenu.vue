<template>
    <div @click="toggleMenu" @mouseleave="closeMenu"
        class="relative font-himalaya text-white mx-2 py-2 md:mx-4 border-b border-transparent hover:border-white transition-all lowercase"
        :class="{'': this.$route.meta.subMenuOf === this.routeName }">
        {{ routeName }}
        <transition name="main-router-anim">
            <div v-if="showSubMenu" class="absolute text-white w-auto h-auto flex flex-col items-end">
                <router-link :to="'/photography/automotive'" class="opacity-70 hover:opacity-100 mt-2 py-1">
                    automotive
                </router-link>
                <router-link :to="'/photography/portrait-lifestyle'" class="opacity-70 hover:opacity-100 py-1">
                    portrait / lifestyle
                </router-link>
                <router-link :to="'/photography/sports'" class="opacity-70 hover:opacity-100 py-1">
                    sports
                </router-link>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
  name: 'MenuItemWithSubMenu',
  props: ['routerTo', 'routeName'],
  data () {
    return {
      showSubMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showSubMenu = !this.showSubMenu
    },
    closeMenu () {
      this.showSubMenu = false
    }
  }
}
</script>

<style scoped>
  .main-router-anim-enter-active {
  animation: pagecome .5s;
  opacity: 0;
  }
  .main-router-anim-leave-active {
  animation: pagego .5s;
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
