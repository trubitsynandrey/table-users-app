// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import AppButton from './components/button/app-button.vue'
import AppInput from './components/input/app-input.vue'
import AppModal from './components/modal/app-modal.vue'
import AppSelect from './components/select/app-select.vue'

Vue.config.productionTip = false

Vue.component('app-modal', AppModal)
Vue.component('app-input', AppInput)
Vue.component('app-button', AppButton)
Vue.component('app-select', AppSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
