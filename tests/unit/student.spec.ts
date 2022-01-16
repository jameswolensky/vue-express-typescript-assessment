import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Students from '@/components/students/students'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import homeStore from '@/store/home/home.store'
import 'reflect-metadata'

describe('Student Component', () => {
  let component
  let localVue
  let vuetify
  let store

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)

    store = new Vuex.Store({
      modules: {
        homeStore
      }
    })
    component = shallowMount(Students, { localVue, vuetify, store })
  })

  it('Student component data should equal their default values when first initialized', () => {
    vuetify = new Vuetify()
    expect(component.vm.tagHash).to.eql({})
    expect(component.vm.averageHash).to.eql({})
    expect(component.vm.toggleHash).to.eql({})
    expect(component.vm.toggleHash).to.eql({})
    expect(component.vm.nameSearch).to.eql('')
    expect(component.vm.tagSearch).to.eql('')
  })

  it('HandleAddTag() SHOULD NOT try to push a tag if currentTag is undefined on the student object', () => {
    const mockStudent = {}
    component.vm.handleAddTag(mockStudent)
    expect(mockStudent).to.eql({})
  })

  it('HandleAddTag() SHOULD push a tag if currentTag is not undefined on the student object', () => {
    component.vm.tagHash = {
      1: []
    }
    const mockStudent = {
      id: '1',
      currentTag: 'test tag'
    }
    component.vm.handleAddTag(mockStudent)
    expect(component.vm.tagHash).to.eql({
      1: ['test tag']
    })
  })
})
