import { PlanComponent } from './PlanComponent'
import free from "../images/Free.png"
import standard from "../images/Standard.png"
import premium from "../images/Premium.png"
import { FifthSection } from './FifthSection'
import { SixthSectionCarousel } from './SixthSectionCarousel'
import { SeventhSectionForm } from './SeventhSectionForm'
import { useEffect, useState } from 'react'
import { useTheme } from '../../context/theme-context'

export {free, standard, premium}

type Suscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
  avatar?: string
};

export const FourthSectionPlans = () => {

    const { theme } = useTheme();

    const [subcriptions, setSubcriptions] = useState<Suscription[]>([]);

    useEffect(() => {
      fetch("https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription")
        .then((response) => {
          response.json().then((result) => {
            const updatedSubscriptions = result.map((subscription: Suscription) => {
              if (subscription.title === "Free Plan") {
                subscription.avatar = free;
              } else if (subscription.title === "Standard Plan") {
                subscription.avatar = standard;
              } else {
                subscription.avatar = premium;
              }
              return subscription;
            });
            setSubcriptions(updatedSubscriptions);
          });
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
        });
    }, []);

    
    const buttonRed= 'w-44 h-11 bg-red-500 rounded-3xl text-white text-base font-bold drop-shadow-xl'
    const buttonWhite= 'w-44 h-11 rounded-3xl border border-red-500 text-red-500 text-base font-bold' 
    const defaultBorder=`${theme == 'dark' ? 'border-neutral-700 bg-stone-800' : 'border-neutral-200 bg-white'} max-w-xs w-80 py-16 rounded-lg border flex flex-col justify-center items-center mt-10`
    const redBorder=  `${theme == 'dark' ? 'bg-stone-800' : 'bg-white'} max-w-xs w-80 py-16 rounded-lg border border-red-500 flex flex-col justify-center items-center mt-10`


  return (
    <section id='pricing' className={` ${theme == 'dark' ? 'bg-gradient-to-b from-stone-900 to-transparent' : 'bg-gradient-to-b from-gray-50 to-transparent'} section-plans mx-auto conteiner mb-20`}>
      <div className="div-box-back section-plans mx-auto conteiner max-w-7xl pt-20 ">
          <div className="top-text flex flex-col justify-center items-center mb-16 px-10">
              <h3 className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'} text-center text-4xl font-medium leading-10 mb-5`}>Choose Your Plan</h3>
              <p className={`${theme == 'dark' ? 'text-gray-200' : 'text-gray-600'} text-center text-base font-normal leading-loose`}>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
          </div>
          {
            subcriptions.length<=0 ?
            <p>loading...</p>
            :
            <div className="plan-box flex flex-col items-center lg:flex-row justify-evenly">

              {
              subcriptions.map((s, index) =>(
                index != subcriptions.length-1
                ?
                <PlanComponent key={s.avatar} plans={s} buttonStyle={buttonWhite} border={defaultBorder}/>
                :
                <PlanComponent key={s.avatar} plans={subcriptions[2]} buttonStyle={buttonRed} border={redBorder}/>
              ))
              }
            </div>
          }
      </div>
      <FifthSection/>
      <SixthSectionCarousel/>
      <SeventhSectionForm/>
    </section>
  )
}
