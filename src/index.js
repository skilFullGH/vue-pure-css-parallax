import Parallax from './components/Parallax.vue'
import ParallaxGroup from './components/ParallaxGroup.vue'
import ParallaxLayer from './components/ParallaxLayer.vue'

export default {
  install (Vue, options) {
    Vue.component('vue-pure-parallax', Parallax)
    Vue.component('vue-pure-parallax-group', ParallaxGroup)
    Vue.component('vue-pure-parallax-layer', ParallaxLayer)
  }
}
