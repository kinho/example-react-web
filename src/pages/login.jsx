import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import useUserStore from '../hooks/user_store'
import { UserForm } from '../components/user_form'
import { SuccessAlert } from '../components/success_alert'
import { login } from '../services/user'

function Login() {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const { setUser } = useUserStore()

  const onLogin = async ({ username, password }) => {
    if (loading) return
    setLoading(true)

    const logged = await login(username, password)
    if (logged) {
      setUser(logged)
    }

    setLoading(false)
  }

  return (
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>

        {searchParams.get('saved') && <SuccessAlert message={"Registered user. Try login!"} />}

        <div className="space-y-4 md:space-y-6">
          <UserForm onSubmit={onLogin} login={true} loading={loading} />

          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet? &nbsp;
            <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login