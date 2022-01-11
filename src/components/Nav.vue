<template>
  <nav class="flex xl:flex-row flex-wrap z-10">
    <router-link to="/" class="transition duration-500 ease-in-out">
      <div class="flex-col flex-1 flex-no-wrap justify-start px-2 font-anton text-white border-l border-transparent hover:border-white transition-all">
        <p class="text-4xl sm:text-5xl">MILAN</p>
        <p class="text-4xl sm:text-5xl">CSIZMADIA</p>
      </div>
    </router-link>
    <div class="flex flex-1 justify-end items-center text-xs md:text-base font-semibold">
      <MenuItemWithSubMenu :routerTo='"/photography"' :routeName='"Photography"'/>
      <MenuItem :routerTo='"/videography"' :routeName='"Video/motion"'/>
      <MenuItem :routerTo='"/about"' :routeName='"About"'/>
      <MenuItem :routerTo='"/contact"' :routeName='"Contact"'/>
    </div>
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
  }

}

</script>
