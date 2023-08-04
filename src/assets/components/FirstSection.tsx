import React from 'react'
import illustration1 from '../images/Illustration 1.png'
import "../Styles/principalSection.css"

export const FirstSection = () => {
  return (
    <section className='max-w-7xl container mx-auto px-10 mb-20 flex flex-col md:px-15 md:flex-row md:align-middle place-items-center justify-center'>
        <div className='box-left-side flex flex-col place-items-start lg:justify-center'>
            <h1 className='text-4xl m-0 lg:text-5xl'>Want anything to be <br></br> easy with <span>LaslesVPN.</span></h1>
            <p className='left-side-p mt-5'>Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> <br></br>discover interesting features from us.</p>
            <button className='left-side-button w-32 h-10 relative mt-5'>Get Started</button>
        </div>
        <div className='box-right-side flex justify-center mt-5'>
            <img src={illustration1} alt="ilustration1" />
        </div>
    </section>
  )
}
