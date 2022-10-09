import axios, {AxiosInstance, AxiosResponse} from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})


instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
  }
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    return Promise.resolve(res)
  },
  error => {
    console.log(error)
  }
)


export default instance
