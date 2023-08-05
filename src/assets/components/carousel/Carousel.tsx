import { OpinionsComponent } from "./OpinionsComponent"
import p1 from '../../images/profiles/p1.png'
import p2 from '../../images/profiles/p2.png'
import p3 from '../../images/profiles/p3.png'

export const Carousel = () => {

  const reviews = [
    {image: p1, name: 'Viezh Robert', location:'Warsaw, Poland', rate: '4.5', desc:'“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.'},
    {image: p2, name: 'Yessica Christy', location:'Shanxi, China', rate: '4.5', desc:'“I like it because I like to travel far and still can connect with high speed.”.'},
    {image: p3, name:'Kim Young Jou', location: 'Seoul, South Korea', rate: '4.5' ,desc: '“This is very unusual for my business that currently requires a virtual private network that has high security.”.'}
  ]

  return (
    <div className="box-carousel flex flex-row">
      <OpinionsComponent border={'w-96 h-56 bg-white rounded-lg border border-red-500'} reviews={reviews[0]}/>
      <OpinionsComponent border={'w-96 h-56 rounded-lg border border-neutral-200'} reviews={reviews[1]}/>
      <OpinionsComponent border={'w-96 h-56 rounded-lg border border-neutral-200'} reviews={reviews[2]}/>
    </div>
  )
}
