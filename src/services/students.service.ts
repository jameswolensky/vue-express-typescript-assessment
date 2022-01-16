import Container, { Service } from 'typedi'
import HttpClient from '@/services/http-client.service'
import IHttpClientGetParameters from '@/interfaces/http-client/http-client-get.interface'

@Service()
export default class StudentsService {
  public async getStudents (): Promise<any> {
    const httpParams: IHttpClientGetParameters = {
      url: '/assessment/students'
    }
    const response = await Container.get(HttpClient).get(httpParams)
    return response
  }
}
