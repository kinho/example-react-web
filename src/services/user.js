import { api } from './api'

export const register = async (username, password) => {
  try {
    const { status } = await api.post('/user', { username, password })

    return status === 200

  } catch (error) {
    console.log('user:register:error', error?.response?.data?.error)
  }
}

export const login = async (username, password) => {
  try {
    const { data } = await api.post('/login', { username, password })

    return { token: data?.token, user_id: data?.user_id }

  } catch (error) {
    console.log('user:login:error', error?.response?.data?.error)
  }
}
