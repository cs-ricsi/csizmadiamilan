<template>
    <p class="fade-out transition-all">
        {{ text }}
    </p>
</template>

<script>
export default {
  name: 'FadeOutText',
  props: ['text']
//   created () {
//     this.fadeOutElements = document.getElementsByClassName('fade-out')
//     document.addEventListener('scroll', this.scrollHandler)
//   },
//   onUnmounted () {
//     document.removeEventListener('scroll', this.scrollHandler)
//   },
//   data () {
//     return {
//       fadeOutElements: []
//     }
//   },
//   methods: {
//     scrollHandler () {
//       this.fadeOutElements[0].style.opacity = Math.round((this.fadeOutElements[0].getBoundingClientRect().top / this.fadeOutElements[0].offsetTop) * 10) / 10
//       this.fadeOutElements[1].style.opacity = Math.round((this.fadeOutElements[1].getBoundingClientRect().top / this.fadeOutElements[1].offsetTop) * 10) / 10
//       this.fadeOutElements[2].style.opacity = Math.round((this.fadeOutElements[2].getBoundingClientRect().top / this.fadeOutElements[2].offsetTop) * 10) / 10
//       console.log(Math.round((this.fadeOutElements[0].getBoundingClientRect().top / this.fadeOutElements[0].offsetTop) * 10) / 10)
//     }
//   }
}
</script>
