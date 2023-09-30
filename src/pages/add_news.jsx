import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { NewsForm } from '../components/news_form'
import { register } from '../services/news'
import useUserStore from '../hooks/user_store'

function AddNews() {
  const { user } = useUserStore()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onRegister = async ({ title, description }) => {
    if (loading) return
    setLoading(true)

    const saved = await register(title, description, { headers: { authorization: user.token } })
    if (saved) {
      return navigate('/dashboard/news?saved=true')
    }

    setLoading(false)
  }

  return (
    <div>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Add News
      </h1>
      <div className="bg-grey p-5 flex flex-col items-center justify-center" style={{ width: 600 }}>
        <div className="p-5 w-96">
          <NewsForm onSubmit={onRegister} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default AddNews