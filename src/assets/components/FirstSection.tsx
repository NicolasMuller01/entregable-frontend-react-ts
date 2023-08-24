import illustration1 from '../images/Illustration 1.png'
import "../Styles/principalSection.css"

export const FirstSection = () => {
  return (
    <section id='about' className='max-w-7xl container mx-auto px-10 mb-20 flex flex-col md:px-15 md:flex-row md:align-middle place-items-center justify-start'>
        <div className='box-left-side flex flex-col mx-auto lg:mx-0 lg:place-items-start lg:justify-center'>
            <h1 className='text-4xl m-0 lg:text-5xl'>Want anything to be <br></br> easy with <span>LaslesVPN.</span></h1>
            <p className='left-side-p mt-5'>Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> <br></br>discover interesting features from us.</p>
            <button onClick={() => window.open("https://www.google.com/search?q=perritos&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjQjPaO9c2AAxVBqZUCHbMwAvMQ0pQJegQIDRAB&biw=1536&bih=695&dpr=1.25", "_blank")} className='left-side-button mt-10 w-64 h-14 bg-red-500 rounded-lg drop-shadow-xl'>Get Started</button>
        </div>
        <div className='hidden lg:flex box-right-side justify-center mt-5 pl-10'>
            <img src={illustration1} alt="ilustration1" />
        </div>
    </section>
  )
}
