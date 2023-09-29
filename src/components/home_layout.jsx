import { Navigate, Outlet } from 'react-router-dom'

import useUserStore from '../hooks/user_store'

export const HomeLayout = () => {
  const { user } = useUserStore()

  if (user) {
    return <Navigate to='/dashboard/news' />
  }

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <a 
            href="https://www.missionbrasil.com.br/"
            target='_blank'
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            rel="noreferrer"
          >
            Mission Brasil
          </a>
          <Outlet />
        </div>
      </section>
    </div>
  )
}