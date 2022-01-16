import { Component, Vue } from 'vue-property-decorator'
import '@/boostrap/global/loader-components'
import 'reflect-metadata'

@Component({
  name: 'Application'
})

export default class Application extends Vue {}
