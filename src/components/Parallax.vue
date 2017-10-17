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
