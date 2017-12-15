<template>
    <div class="parallax" :style="style">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      height: {
        type: [Number, String],
        default: '100vh'
      }
    },
    computed: {
      style () {
        return {
          'height': typeof this.height === 'number' ? this.height + 'px' : this.height
        }
      }
    }
  }
</script>

<style lang="scss">
    @import '../assets/scss/variables';

    .b-parallax {
        perspective: $perspective;
        perspective-origin: $perspective-origin;
        height: 100vh;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>
