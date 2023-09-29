import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { HomeLayout } from './components/home_layout'
import { ProtectedLayout } from './components/protected_layout'

import Login from './pages/login'
import Signup from './pages/signup'
import News from './pages/news'

import './styles/app.css'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Navigate to='/login' />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="news" element={<News />} />
      </Route>
    </>
  )
)
