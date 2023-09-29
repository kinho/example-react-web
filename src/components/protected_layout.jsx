import { Link, Navigate, useOutlet } from 'react-router-dom'

import useUserStore from '../hooks/user_store'

export const ProtectedLayout = () => {
  const { user, setUser } = useUserStore()
  const outlet = useOutlet()

  const onLogout = () => {
    setUser(false)
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <div>
      <nav>
        <Link to="/dashboard/news">News</Link>
        <Link onClick={onLogout}>Logout</Link>
      </nav>
      {outlet}
    </div>
  )
}
