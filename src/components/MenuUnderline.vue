<template>
  <div class="absolute bottom-0 right-0 left-0 overflow-hidden">
    <transition name="menu-anim" mode="out-in">
      <svg v-if="hover" class="relative stroke-white" height="2" width="100%">
        <line x1="0" y1="0" x2="150" y2="0" style="stroke:white;stroke-width:2" />
      </svg>
    </transition>
  </div>
</template>

<script>
export default {

  name: 'MenuUnderline',

  props: [
    'menu', 'hover'
  ]

}
</script>

<style scoped>

  .menu-anim-enter-active {
    animation: pagecome .5s ease-in-out;
    animation-delay: 0s;
  }
  .menu-anim-leave-active {
    animation: pagego .5s ease-in-out;
  }

  @keyframes pagego {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
  @keyframes pagecome {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

</style>
