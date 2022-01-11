<template>
    <router-link :to="routerTo"
    class="relative font-himalaya text-white mx-2 py-2 md:mx-4 border-b border-transparent hover:border-white transition-all lowercase"
    :class="{'border-white': this.$route.name === this.routeName }">
    {{ routeName }}
    </router-link>
</template>

<script>

export default {
  name: 'MenuItem',
  props: ['routerTo', 'routeName']
}
</script>
