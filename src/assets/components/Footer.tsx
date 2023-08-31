import { useEffect, useState } from 'react'
import fc from '../images/footer/Facebook.svg'
import ig from '../images/footer/Instagram.svg'
import tw from '../images/footer/Twitter.svg'
import LogoSvg from './svgToComponents/LogoSvg'
import { useTheme } from '../../context/theme-context'

export const Footer = () => {

    const { theme } = useTheme();

    // eslint-disable-next-four-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [logos, setlogos] = useState([fc, tw, ig])
    // eslint-disable-next-four-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [products, setproducts] = useState(["Download", "Pricing", "Locations", "Server", "Countries", "Blog"])
    // eslint-disable-next-four-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [engage, setengage] = useState(["LaslesVPN ?", "FAQ", "Tutorials", "About Us", "Privacy Policy", "Terms of Service"])
    // eslint-disable-next-four-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
     <section className={` ${theme == 'dark' ? 'bg-gradient-to-b from-stone-900 to-transparent' : 'bg-gradient-to-b from-gray-50 to-transparent'}  footer-box conteiner mx-auto`}>
        <div className='general-box mx-auto flex  justify-center align-middle pt-20 sm:flex-nowrap pb-20 max-w-7xl'>     
        <div className={`social-media-box w-80 sm:mr-20 sm:pl-5 h-80 ${isMobile ? "hidden" : "block"}`} >
                 <LogoSvg fill={`${theme == 'dark' ? '#FFFFFF' : '#000000'}`}/>
                <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'}  mb-10 pt-5`}><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
                <div className="logos flex">
                    {
                        logos.map((logo)=>(
                            <a href=""><img className='w-16 h-16' src={logo} alt={logo} /></a>
                        ))
                    }
                </div>
                <p className='text-gray-400 leading-loose">©2020Lasles</span><span style="text-gray-400 text-base font-medium leading-loose'>©2020LaslesVPN</p>
            </div>   

            <div className="product-box w-52 h-80 pl-3 sm:pl-0">
                <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'}  text-sm sm:text-lg font-medium leading-loose pb-2`}><b>Product</b></p>
                {
                    products.map((p)=>(
                        <a href=""><p className={`${theme == 'dark' ? 'text-gray-200 hover:text-gray-50' : 'text-gray-600 hover:text-gray-950'} pt-3 text-sm sm:text-lg font-normal leading-loose hover:underline hover:text-gray-950`}key={p}>{p}</p></a>
                    ))
                }
            </div>
            <div className="engage-box w-52 h-80">
                <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'}  text-sm sm:text-lg font-medium leading-loose pb-2`}><b>Engage</b></p>
                {
                    engage.map((e)=>(
                        <a href=""><p className={`${theme == 'dark' ? 'text-gray-200 hover:text-gray-50' : 'text-gray-600 hover:text-gray-950'} pt-3 text-sm sm:text-lg font-normal leading-loose hover:underline hover:text-gray-950`} key={e}>{e}</p></a>
                    ))
                }
            </div>
            <div className="earn-money-box w-52 h-80">
                <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'}  text-sm sm:text-lg font-medium leading-loose pb-2`}><b>Earn Money</b></p>
                {
                    earnMoney.map((m)=>(
                        <a href=""><p className={`${theme == 'dark' ? 'text-gray-200 hover:text-gray-50' : 'text-gray-600 hover:text-gray-950'} pt-3 text-sm sm:text-lg font-normal leading-loose hover:underline hover:text-gray-950`}key={m}>{m}</p></a>
                    ))
                }
            </div>
        </div>
        <div className="end-box flex w-full justify-center px-5">
        <div className={`social-media-box w-80 conteiner sm:mr-5 sm:pl-5 h-80 place-self-center ${isMobile ? "block" : "hidden"}`} >
                <LogoSvg fill={`${theme == 'dark' ? '#FFFFFF' : '#000000'}`}/>
                <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'}  mb-10 pt-5`} ><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
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
