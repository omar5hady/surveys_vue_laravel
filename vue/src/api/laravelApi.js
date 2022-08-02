import axios from 'axios'
import store from '../store'


const laravelApi = axios.create({
    baseURL:`${import.meta.env.VITE_API_BASE_URL}/api`
})

laravelApi.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
    return config
})

export default laravelApi