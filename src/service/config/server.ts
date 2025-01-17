import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

export default class ClassXRequset {
	instance: AxiosInstance;
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config);

		this.instance.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				console.log('请求拦截');
				return config;
			}
		);

		this.instance.interceptors.response.use((res: AxiosResponse) => {
			console.log('相应拦截');
			return res;
		});
	}

	request<T = any>(config: AxiosRequestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			this.instance
				.request<T>(config)
				.then((res) => {
					resolve(res.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	}

	get<T = any>(config: AxiosRequestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'get' });
	}

	post<T = any>(config: AxiosRequestConfig): Promise<T> {
		return this.request<T>({ ...config, method: 'post' });
	}
}
