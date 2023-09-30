import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { UserForm } from '../components/user_form'
import { register } from '../services/user'

function Signup() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSignup = async ({ username, password }) => {
    if (loading) return
    setLoading(true)

    const saved = await register(username, password)
    if (saved) {
      return navigate('/login?saved=true')
    }

    setLoading(false)
  }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign up to your account
        </h1>

        <div className="space-y-4 md:space-y-6">
          <UserForm onSubmit={onSignup} signup={true} loading={loading} />

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            You have account? &nbsp;
            <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup