import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navbar } from './assets/components/Navbar'
import { FirstSection } from './assets/components/FirstSection'
import {SecondSectionData} from './assets/components/SecondSectionData'
import { ThirdSectionMarketing } from './assets/components/ThirdSectionMarketing'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <FirstSection />
    <SecondSectionData/>
    <ThirdSectionMarketing/>
  </React.StrictMode>,
)