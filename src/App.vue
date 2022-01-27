<template>
  <div class="relative flex flex-col h-screen text-white scroll-smooth"
    :class="{'overflow-hidden': this.$route.meta.overflowHidden}">
    <Nav />
    <router-view v-slot="{ Component }">
      <transition name="main-router-anim">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  created () {
    this.setTitle(this.$route.meta.title)
  },
  watch: {
    $route (to, from) {
      this.setTitle(to.meta.title)
    }
  },
  methods: {
    setTitle (value) {
      document.title = value ? 'Milan Csizmadia | ' + value : 'Milan Csizmadia'
    }
  }
}
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .main-router-anim-enter-active {
  animation: pagecome .6s;
  animation-delay: .6s;
  opacity: 0;
  }
  .main-router-anim-leave-active {
  animation: pagego .6s;
  }

  @keyframes pagego {
  from {
      transform: translatex(0);
      opacity: 1;
  }
  to {
      transform: translatex(-250px);
      opacity: 0;
  }
  }
  @keyframes pagecome {
  from {
      transform: translatex(350px);
      opacity: 0;
  }
  to {
      transform: translatex(0);
      opacity: 1;
  }
  }
</style>
