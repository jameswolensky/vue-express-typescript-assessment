import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from '@/store/home/home.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homeStore
  }
})
