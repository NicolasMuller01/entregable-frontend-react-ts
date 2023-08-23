import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home} from './assets/components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginForm } from './assets/components/LoginForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <LoginForm/>,
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
