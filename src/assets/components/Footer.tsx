import { useEffect, useState } from 'react'
import '../Styles/footer.css'
import logo from '../images/Logo.png'
import fc from '../images/footer/Facebook.svg'
import ig from '../images/footer/Instagram.svg'
import tw from '../images/footer/Twitter.svg'

export const Footer = () => {

    const [logos, setlogos] = useState([fc, tw, ig])
    const [products, setproducts] = useState(["Download", "Pricing", "Locations", "Server", "Countries", "Blog"])
    const [engage, setengage] = useState(["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"])
    const [earnMoney, setearnMoney] = useState(["Affiliate", "Become Partner"])

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 768);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  return (
    <>
     <section className='footer-box conteiner mx-auto max-w-7xl'>
        <div className='general-box mx-auto flex  justify-center align-middle pt-20 sm:flex-nowrap pb-20'>     

        <div className={`social-media-box w-80 sm:mr-20 sm:pl-5 h-80 ${isMobile ? "hidden" : "block"}`} >
                <img  className='mb-5' src={logo} alt="logo" />
                <p className='mb-10' ><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
                <div className="logos flex">
                    {
                        logos.map((logo)=>(
                            <a href=""><img className='w-16 h-16' src={logo} alt={logo} /></a>
                        ))
                    }
                </div>
                <p className='text-gray-400 leading-loose">©2020Lasles</span><span style="text-gray-400 text-base font-medium leading-loose'>©2020LaslesVPN</p>
            </div>   

            <div className="product-box w-52 h-80">
                <p className='text-slate-900 text-sm sm:text-lg font-medium leading-loose pb-2'><b>Product</b></p>
                {
                    products.map((p)=>(
                        <a href=""><p className='pt-3 text-gray-600 text-sm sm:text-lg font-normal leading-loose' key={p}>{p}</p></a>
                    ))
                }
            </div>
            <div className="engage-box w-52 h-80">
                <p className='text-slate-900 text-sm sm:text-lg leading-loose pb-2'><b>Engage</b></p>
                {
                    engage.map((e)=>(
                        <a href=""><p className='pt-3 text-gray-600 text-sm sm:text-lg font-normal leading-loose' key={e}>{e}</p></a>
                    ))
                }
            </div>
            <div className="earn-money-box w-52 h-80">
                <p className='text-slate-900 text-sm sm:text-lg leading-loose pb-2'><b>Earn Money</b></p>
                {
                    earnMoney.map((m)=>(
                        <a href=""><p className='pt-3 text-gray-600 text-sm sm:text-lg font-normal leading-loose' key={m}>{m}</p></a>
                    ))
                }
            </div>
        </div>
        <div className="end-box flex w-full justify-center">
        <div className={`social-media-box w-80 conteiner sm:mr-5 sm:pl-5 h-80 place-self-center ${isMobile ? "block" : "hidden"}`} >
                <img  className='mb-5' src={logo} alt="logo" />
                <p className='mb-10' ><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
                <div className="logos flex">
                    {
                        logos.map((logo)=>(
                            <a href=""><img className='w-16 h-16' src={logo} alt={logo} /></a>
                        ))
                    }
                </div>
                <p className="text-gray-400 text-base font-medium leading-loose">©2020LaslesVPN</p>
            </div> 
        </div>
     </section>
    </>
  )
}
