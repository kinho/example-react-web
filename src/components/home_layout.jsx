import { Link, Navigate, Outlet } from 'react-router-dom'

import useUserStore from '../hooks/user_store'

export const HomeLayout = () => {
  const { user } = useUserStore()

  if (user) {
    return <Navigate to='/dashboard/news' />
  }

  return (
    <div>
      <nav>
        {/* <Link to="/">Home</Link> */}
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  )
}