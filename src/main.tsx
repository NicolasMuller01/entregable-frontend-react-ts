import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Home} from './assets/components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FirstSection } from './assets/components/FirstSection'
import { ThirdSectionMarketing } from './assets/components/ThirdSectionMarketing'
import { SeventhSectionForm } from './assets/components/SeventhSectionForm'
import { Carousel } from './assets/components/carousel/Carousel'
import { FourthSectionPlans } from './assets/components/FourthSectionPlans'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/about',
    element: <FirstSection />
  },
  {
    path: '/features',
    element: <ThirdSectionMarketing />
  },
  {
    path: '/pricing',
    element: <FourthSectionPlans />
  },
  {
    path: '/testimonials',
    element: <Carousel />
  },
  {
    path: '/help',
    element: <SeventhSectionForm />
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
