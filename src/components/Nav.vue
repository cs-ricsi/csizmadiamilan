<template>
  <nav class="fixed inset-x-0 px-2 md:px-4 lg:mx-8 py-2 md:py-4 lg:py-8 flex xl:flex-row flex-wrap z-20">
    <router-link to="/" class="transition duration-500 ease-in-out">
      <div class="flex md:flex-col flex-1 flex-no-wrap justify-start px-2 font-anton text-white border-l
        border-transparent hover:border-white transition-all">
        <p class="text-xl md:text-3xl lg:text-5xl">MILAN</p>
        <p class="text-xl md:text-3xl lg:text-5xl">CSIZMADIA</p>
      </div>
    </router-link>
    <div class="flex flex-1 justify-between md:justify-end items-center text-sm md:text-lg ">
      <MenuItemWithSubMenu :routeName='"Photography"'/>
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
