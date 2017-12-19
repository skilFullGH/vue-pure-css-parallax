<template>
    <div class="b-parallax__group" :style="style">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'ParallaxGroup',
    componentName: 'ParallaxGroup',
    props: {
      zIndex: {
        type: Number,
        'default': 1
      }
    },
    computed: {
      style: function () {
        return {
          'z-index': this.zIndex
        }
      }
    }
  }
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    .b-parallax__group {
        position: relative;
        height: 100vh;
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }
</style>
