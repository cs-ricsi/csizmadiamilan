<template>
  <p class="fade-out transition-all">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'FadeOutText',
  props: ['text']
}
</script>
