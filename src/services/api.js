import axios from 'axios'

// import useUserStore from '../hooks/user_store'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

// axios.interceptors.request.use(function (config) {
//   const { user } = useUserStore()
//   console.log('user?.token', user?.token)
//   config.headers.Authorization = user?.token
//   return config
// })