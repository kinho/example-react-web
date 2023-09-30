import { NavLink, Navigate, useOutlet } from 'react-router-dom'

import useUserStore from '../hooks/user_store'

const navLinkClass = ({ isActive }) =>
  `inline-block border border-blue-500 rounded py-1 px-3 ${isActive ? 'bg-blue-500 text-white' : ''}`

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
    <div className="flex flex-wrap h-screen">
      <section className="relative mx-auto">
        <ul className="flex">
          <li className="my-3 mr-3">
            <NavLink className={navLinkClass} to="/dashboard/news">
              News
            </NavLink>
          </li>

          <li className="my-3 mr-3">
            <NavLink className={navLinkClass} to="/dashboard/news-add">
              Add News
            </NavLink>
          </li>

          <li className="my-3 mr-3 ml-auto">
            <a className="inline-block border border-blue-500 rounded py-1 px-3" href="#" onClick={onLogout}>
              Logout
            </a>
          </li>
        </ul>

        {outlet}
      </section>
    </div>
  )
}
