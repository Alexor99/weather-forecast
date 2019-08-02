
import router from './router'
import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import GoogleAutocomplete from 'google-autocomplete-vue'
import BootstrapVue from "bootstrap-vue"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDWdGA-ndsHMtR5-cdZrc5SHtfKKBG5Bfg',
    libraries: 'places'
  }
})

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app");




 

 
  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,
 
  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
