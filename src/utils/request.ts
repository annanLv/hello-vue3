import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig} from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
});


instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    return Promise.resolve(res);
  },
  error => {
    console.log(error);
  }
);


function mapToRequest<T>(response: AxiosResponse<T>) {
  return { ...response.data };
}

export function request(config: AxiosRequestConfig): Promise<BackEndReturn> {
  return instance({ method: 'get', ...config }).then((res: any) => mapToRequest(res));
}
