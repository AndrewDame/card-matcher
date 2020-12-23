import Vue from 'vue'
import Game from './Game.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as icons from '@fortawesome/free-solid-svg-icons';

let iconList = Object.values(icons);
iconList.splice(0, 1);
iconList.splice(0, 1);
iconList.forEach(icon => {
  library.add(icon)
  
});

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(Game),
  store,
}).$mount('#app')
