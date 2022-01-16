import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { Service } from 'typedi'
import IHttpClientGetParameters from '@/interfaces/http-client/http-client-get.interface'

@Service()
export default class HttpClient {
	private static http: AxiosInstance;
	public async get<T> (params: IHttpClientGetParameters): Promise<AxiosResponse<T>> {
	  const { url } = params
	  return this.httpInstance().get<T>(url)
	}

	private httpInstance (): AxiosInstance {
	  if (!HttpClient.http) {
	    HttpClient.http = axios.create({
	      baseURL: process.env.VUE_APP_BASE_URL,
	      headers: {
	        Accept: 'application/json',
	        'Content-Type': 'application/json'
	      }
	    })
	  }
	  return HttpClient.http
	}

	public getInstance (): AxiosInstance {
	  return this.httpInstance()
	}
}
