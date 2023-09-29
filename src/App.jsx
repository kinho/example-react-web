import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { HomeLayout } from './components/home_layout'
import { ProtectedLayout } from './components/protected_layout'

import Home from './pages/home'
import Login from './pages/login'
import News from './pages/news'

import './styles/app.css'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="news" element={<News />} />
      </Route>
    </>
  )
)
