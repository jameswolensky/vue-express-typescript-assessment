import Container from 'typedi'
import StudentsService from '@/services/students.service'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
  namespaced: true
})

export default class HomeStore extends VuexModule {
	students: [] = []

	@Action({ rawError: true })
	async getStudents (): Promise<void> {
	  const response = await Container.get(StudentsService).getStudents()
	  this.context.commit('setStudents', response.data.students)
	}

	@Mutation
	setStudents (payload: []): void {
	  this.students = payload
	}
}
