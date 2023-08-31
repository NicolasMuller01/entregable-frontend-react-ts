import { OpinionsComponent } from "./OpinionsComponent"
import arrowRight from '../../images/svg/arrow-right.svg'
import arrowLeft from '../../images/svg/arrow-left.svg'
import { useEffect, useState } from "react"
import { useTheme } from "../../../context/theme-context"

type Testimonials = {
  avatar: string,
  fullName: string,
  testimonial: string
}


export const Carousel = () => {

  const { theme } = useTheme();

  const [counter, setCounter] = useState(0)

  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);



    useEffect(() => {
      fetch("https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial")
        .then((response) => {
          response.json().then((result) => {
            setTestimonials(result)
          });
        })
        .catch((error) => {
          console.log(error.message);
        })
    }, []);


  return (
    <div className="my-20">
      <div className="reviews-box box-carousel flex flex-row lg:justify-between justify-center">
      {
        testimonials.length < 1 
        ?
        <div>loading...</div>
        :
        testimonials.map((item, index) =>(
          index>= counter && index <= counter + 2
          ?   
          counter == index
            ?
            <OpinionsComponent border={`w-96 h-56 rounded-lg border border-red-500 mx-0`} reviews={item}/>
            :
            <OpinionsComponent border={`${theme == 'dark' ? 'bg-stone-800 border border-neutral-600' : 'bg-white border border-neutral-200'} hidden xl:block w-96 h-56 rounded-lg mx-0`} reviews={item}/>
          :
          null
        ))
      }
      </div>
      <div className="elements-box flex flex-row items-center justify-between">
        <div className="slider-group-box ml-5">
          {
          counter == 0 ?
          <div className="mx-auto relative">
            <div className="w-11 h-3.5 left-[0px] top-0 absolute bg-red-500 rounded-lg duration-500" />
            <div className="w-3.5 h-3.5 left-[60px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-3.5 h-3.5 left-[90px] top-0 absolute bg-zinc-200 rounded-full"></div>
          </div>
          : counter == 1
          ?
          <div className="mx-auto relative">
            <div className="w-3.5 h-3.5 left-[0px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-11 h-3.5 left-[30px] top-0 absolute bg-red-500 rounded-lg duration-500" />
            <div className="w-3.5 h-3.5 left-[90px] top-0 absolute bg-zinc-200 rounded-full"></div>
          </div>  
          : counter == 2
          ? 
          <div className="mx-auto relative">
            <div className="w-3.5 h-3.5 left-[0px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-3.5 h-3.5 left-[30px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-11 h-3.5 left-[60px] top-0 absolute bg-red-500 rounded-lg duration-500 " />
        </div> 
        : null  
      } 
        </div>
        <div className="arrows-group-box flex flex-row my-20">
          <button  className="w-14 h-14 rounded-full border border-red-500 flex items-center mr-5">
            <img onClick={()=>{counter != 0 ? setCounter(counter-1) : setCounter(2) }} className='mx-auto' src={arrowLeft} alt="arrow" />
          </button>
          <button onClick={()=>{counter != 2 ? setCounter(counter+1) : setCounter(0)}} className="w-14 h-14 bg-red-500 rounded-full shadow border border-red-500 flex items-center mr-5">
            <img className='mx-auto' src={arrowRight} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
