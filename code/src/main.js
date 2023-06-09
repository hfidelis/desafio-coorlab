import Vue from 'vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import BestHeader from './components/BestHeader'
import LoadIcon from './components/LoadIcon'
import BestForm from './components/BestForm'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.component('app-header', BestHeader)
Vue.component('load-icon', LoadIcon)
Vue.component('best-form', BestForm)


new Vue({
  render: h => h(App),
}).$mount('#app')
