import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/home/home.vue'
import Students from '@/components/students/students'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuetify)
Vue.use(Vuex)

describe('Home View', () => {
  let component
  let localVue
  let vuetify

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.component('students', Students)
  })

  it('Home view should mount the Students component on load', () => {
    vuetify = new Vuetify()
    component = shallowMount(Home, { localVue, vuetify })
    expect(component.findComponent(Students).exists()).to.be.true
  })
})
