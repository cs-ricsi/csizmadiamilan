<template>
  <div class="relative flex flex-col h-screen md:px-4 sm:py-2 lg:px-10 md:py-10 text-white">
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
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .main-router-anim-enter-active {
  animation: pagecome .8s;
  animation-delay: .8s;
  opacity: 0;
  }
  .main-router-anim-leave-active {
  animation: pagego .6s;
  }

  @keyframes pagego {
  from {
      transform: translatex(0);
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
