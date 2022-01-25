<template>
    <router-link :to="routerTo"
      class="relative font-himalaya mx-2 py-2 md:mx-4 md:border-b border-transparent hover:border-white
        transition-all lowercase"
      active-class="">
      {{ routeName }}
    </router-link>
</template>

<script>

export default {
  name: 'MenuItem',
  props: ['routerTo', 'routeName']
}
</script>
