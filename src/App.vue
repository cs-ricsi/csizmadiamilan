<template>
  <div
    class="scroll-smooth relative h-screen text-white"
    :class="{ 'overflow-hidden': this.$route.meta.overflowHidden }">
    <Nav />
    <router-view v-slot="{ Component }">
      <transition name="main-router-anim" mode="out-in">
        <div :key="$route.fullPath">
          <component :is="Component" />
        </div>
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
  created() {
    this.setTitle(this.$route.meta.title)
  },
  watch: {
    $route(to, from) {
      this.setTitle(to.meta.title)
    }
  },
  methods: {
    setTitle(value) {
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

@font-face {
  font-family: 'anton';
  src: url('./assets/fonts/Anton-Regular.ttf');
  font-display: swap;
}

@font-face {
  font-family: 'himalaya';
  src: url('./assets/fonts/himalaya.ttf');
  font-display: swap;
}

.main-router-anim-enter-active {
  animation: pagecome 0.8s ease-in-out;
}
.main-router-anim-leave-active {
  animation: pagego 0.8s ease-in-out;
}

@keyframes pagego {
  from {
    transform: translatey(0);
    opacity: 1;
  }
  to {
    transform: translatey(-100%);
    opacity: 0.4;
  }
}
@keyframes pagecome {
  from {
    transform: translatey(100%);
    opacity: 0.4;
  }
  to {
    transform: translatey(0);
    opacity: 1;
  }
}
</style>
