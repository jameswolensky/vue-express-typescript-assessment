import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'home'
})

export default class Home extends Vue {
  data (): any {
    return {
      component_to_render: 'students'
    }
  }
}
