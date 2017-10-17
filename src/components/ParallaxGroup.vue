<template>
    <div class="parallax-group" :style="style">
        <slot></slot>
    </div>
</template>

<script>
  export default {
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
