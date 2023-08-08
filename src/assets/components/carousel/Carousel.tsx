import { OpinionsComponent } from "./OpinionsComponent"
import p1 from '../../images/profiles/p1.png'
import p2 from '../../images/profiles/p2.png'
import p3 from '../../images/profiles/p3.png'
import arrowRight from '../../images/svg/arrow-right.svg'
import arrowLeft from '../../images/svg/arrow-left.svg'
import { useState } from "react"

export const Carousel = () => {

  const [counter, setCounter] = useState(0)

  const reviews = [
    {image: p1, name: 'Viezh Robert', location:'Warsaw, Poland', rate: '4.5', desc:'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'},
    {image: p2, name: 'Yessica Christy', location:'Shanxi, China', rate: '4.5', desc:'“I like it because I like to travel far and still can connect with high speed.”.'},
    {image: p3, name:'Kim Young Jou', location: 'Seoul, South Korea', rate: '4.5' ,desc: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'}
  ]

  return (
    <div className="my-20">
      {
        counter == 0 ? 
        <div className="reviews-box box-carousel flex flex-row lg:justify-between justify-center">
          <OpinionsComponent border={'w-96 h-56 bg-white rounded-lg border border-red-500 mx-0'} reviews={reviews[0]}/>
          <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={reviews[1]}/>
          <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={reviews[2]}/>
        </div>
        : counter == 1 
        ? 
        <div className="reviews-box box-carousel flex flex-row lg:justify-between justify-center">
          <OpinionsComponent border={'w-96 h-56 bg-white rounded-lg border border-red-500 mx-0'} reviews={reviews[1]}/>
          <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={reviews[2]}/>
          <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={reviews[0]}/>
        </div>
        : counter == 2
        ?
        <div className="reviews-box box-carousel flex flex-row lg:justify-between justify-center">
          <OpinionsComponent border={'w-96 h-56 bg-white rounded-lg border border-red-500 mx-0'} reviews={reviews[2]}/>
          <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={reviews[0]}/>
          <OpinionsComponent border={'hidden lg:block w-96 h-56 rounded-lg border border-neutral-200 mx-0'} reviews={reviews[1]}/>
        </div>
        : null
      }
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
