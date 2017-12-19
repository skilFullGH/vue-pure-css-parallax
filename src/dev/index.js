import Vue from 'vue'
import App from './App'
// import Parallax from '../index'

// import Parallax from '../components/Parallax.vue'
// import ParallaxGroup from '../components/ParallaxGroup.vue'
// import ParallaxLayer from '../components/ParallaxLayer.vue'

// Vue.component('vue-parallax', Parallax)
// Vue.component('vue-parallax-group', ParallaxGroup)
// Vue.component('vue-parallax-layer', ParallaxLayer)

console.log(JSON.stringify(Vue, null, 2))
// Vue.use(Parallax)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
