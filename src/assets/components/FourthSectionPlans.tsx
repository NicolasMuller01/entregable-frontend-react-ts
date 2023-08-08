import '../Styles/fourthSectionPlans.css'
import { PlanComponent } from './PlanComponent'
import free from "../images/Free.png"
import standard from "../images/Standard.png"
import premium from "../images/Premium.png"
import check from '../images/jam_check.png'
import { FifthSection } from './FifthSection'
import { SixthSectionCarousel } from './SixthSectionCarousel'
import { SeventhSectionForm } from './SeventhSectionForm'

export const FourthSectionPlans = () => {

    const buttonRed= 'w-44 h-11 bg-red-500 rounded-3xl text-white text-base font-bold drop-shadow-xl'
    const buttonWhite= 'w-44 h-11 rounded-3xl border border-red-500 text-red-500 text-base font-bold' 
    const defaultBorder='max-w-xs w-80 py-16 bg-white rounded-lg border border-neutral-200 flex flex-col justify-center items-center mt-10'
    const redBorder=  'max-w-xs w-80 py-16 bg-white rounded-lg border border-red-500 flex flex-col justify-center items-center mt-10'

  const plans = [
    {image: free, name:'Free Plan', check:check, price: 'Free' ,desc:['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices']},
    {image: standard, name:'Standard Plan', check:check, price: '$9 / mo' ,desc:['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices','Connect Anyware']},
    {image: premium, name:'Premium Plan', check:check, price: '$12 / mo' ,desc:['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices','Connect Anyware','Get New Features']}
  ]

  return (
    <section className='section-plans mx-auto conteiner mb-20'>
      <div className="div-box-back section-plans mx-auto conteiner max-w-7xl pt-20">
          <div className="top-text flex flex-col justify-center items-center mb-16">
              <h3 className='text-center text-slate-900 text-4xl font-medium leading-10 mb-5'>Choose Your Plan</h3>
              <p className='text-center text-gray-600 text-base font-normal leading-loose'>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
          </div>
          <div className="plan-box flex flex-col items-center md:flex-row justify-evenly">
              <PlanComponent plans={plans[0]} buttonStyle={buttonWhite} border={defaultBorder}/>
              <PlanComponent plans={plans[1]} buttonStyle={buttonWhite} border={defaultBorder}/>
              <PlanComponent plans={plans[2]} buttonStyle={buttonRed} border={redBorder}/>
          </div>
      </div>
      <FifthSection/>
      <SixthSectionCarousel/>
      <SeventhSectionForm/>
    </section>
  )
}
