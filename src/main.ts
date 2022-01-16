import Vue from 'vue'
import Application from '@/boostrap/application/application.vue'
import store from '@/store/index'
import router from '@/router/index'
import 'reflect-metadata'
import vuetify from '@/plugins/vuetify'
import '@/assets/css/global.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(Application)
}).$mount('#app')
