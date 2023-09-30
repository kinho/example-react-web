import { api } from './api'

export const register = async (title, description, config) => {
  try {
    const { status } = await api.post('/news', { title, description }, config)

    return status === 200

  } catch (error) {
    console.log('news:register:error', error?.response?.data?.error)
  }
}

export const list = async (config) => {
  try {
    const { data } = await api.get('/news', config)

    return data || []

  } catch (error) {
    console.log('news:list:error', error?.response?.data?.error)
  }
}
