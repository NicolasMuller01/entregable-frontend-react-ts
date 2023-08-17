import { OpinionsComponent } from "./OpinionsComponent"
import arrowRight from '../../images/svg/arrow-right.svg'
import arrowLeft from '../../images/svg/arrow-left.svg'
import { useEffect, useState } from "react"

type Testimonials = {
  avatar: string,
  fullName: string,
  testimonial: string
}


export const Carousel = () => {

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
        .finally(() => {
          console.log(testimonials);  
        });
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
          counter == 0 && index >= 0 && index <=2 
          ?   
            index == 0 
            ?
            <OpinionsComponent border={'w-96 h-56 bg-white rounded-lg border border-red-500 mx-0'} reviews={item}/>
            :
            <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={item}/>
          :
          counter == 1 && index >= 1 && index <=3 
          ?
            index == 1
            ?
            <OpinionsComponent border={'w-96 h-56 bg-white rounded-lg border border-red-500 mx-0'} reviews={item}/>
            :
            <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={item}/>
          :
          counter == 2 && index >= 2 && index <=4 
          ?
            index == 2 
            ?
            <OpinionsComponent border={'w-96 h-56 bg-white rounded-lg border border-red-500 mx-0'} reviews={item}/>
            :
            <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={item}/>
          :
          null
        ))
      }
      </div>
      <div className="elements-box flex flex-row items-center justify-between">
        <div className="slider-group-box">
          {
          counter == 0 ?
          <div className="mx-auto relative">
            <div className="w-11 h-3.5 left-[0px] top-0 absolute bg-red-500 rounded-lg" />
            <div className="w-3.5 h-3.5 left-[60px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-3.5 h-3.5 left-[90px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-3.5 h-3.5 left-[120px] top-0 absolute bg-zinc-200 rounded-full"></div>
          </div>
          : counter == 1
          ?
          <div className="mx-auto relative">
            <div className="w-3.5 h-3.5 left-[0px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-11 h-3.5 left-[30px] top-0 absolute bg-red-500 rounded-lg" />
            <div className="w-3.5 h-3.5 left-[90px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-3.5 h-3.5 left-[120px] top-0 absolute bg-zinc-200 rounded-full"></div>
          </div>  
          : counter == 2
          ? 
          <div className="mx-auto relative">
            <div className="w-3.5 h-3.5 left-[0px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-3.5 h-3.5 left-[30px] top-0 absolute bg-zinc-200 rounded-full"></div>
            <div className="w-11 h-3.5 left-[60px] top-0 absolute bg-red-500 rounded-lg" />
            <div className="w-3.5 h-3.5 left-[120px] top-0 absolute bg-zinc-200 rounded-full"></div>
        </div> 
        : null  
      } 
        </div>
        <div className="arrows-group-box flex flex-row my-20">
          <button  className="w-14 h-14 rounded-full border border-red-500 flex items-center mr-5">
            <img onClick={()=>{counter != 0 ? setCounter(counter-1) : setCounter(2) }} className='mx-auto' src={arrowLeft} alt="arrow" />
          </button>
          <button onClick={()=>{counter != 2 ? setCounter(counter+1) : setCounter(0)}} className="w-14 h-14 bg-red-500 rounded-full shadow border border-red-500 flex items-center">
            <img className='mx-auto' src={arrowRight} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}
