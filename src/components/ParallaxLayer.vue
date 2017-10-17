<template>
    <div class="parallax-layer" :style="style">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      depth: {
        type: [Number, String],
        default: 0
      },
      scale: {
        type: [Number, String],
        default: 1
      },
      zIndex: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        presets: {
          base: {
            depth: 0,
            scale: 0
          },
          fore: {
            depth: 90,
            scale: 0.7
          },
          back: {
            depth: -300,
            scale: 2
          },
          deep: {
            depth: -600,
            scale: 3
          }
        }
      }
    },
    computed: {
      style: function () {
        let scale = (typeof this.scale === 'string') ? this.presets[this.scale].scale : this.scale
        if (scale === undefined) scale = this.scale.default

        let depth = (typeof this.depth === 'string') ? this.presets[this.depth].depth : this.depth
        if (depth === undefined) depth = this.depth.default

        return {
          'transform': `translateZ(${depth}px) scale(${scale})`,
          'z-index': this.zIndex
        }
      }
    }
  }
</script>
