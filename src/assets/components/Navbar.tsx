import "../Styles/navbar.css"
import { useEffect, useState } from 'react';
import { Link as ScrollLink} from "react-scroll";
import { Link as RouterLink} from 'react-router-dom'
import ThemeManager from '../../views/theme-manager';
import { useTheme } from '../../context/theme-context';
import LogoSvg from './svgToComponents/LogoSvg';
import BurguerMenu from "./svgToComponents/BurguerMenu";

export const Navbar = () => {

  const { theme } = useTheme();

  const [burguerMenuValidator, setburguerMenuValidator] = useState(false)

  const link = [
    {name : 'About', link: 'about'},
    {name : 'Features', link: 'features'},
    {name : 'Pricing', link: 'pricing'},
    {name : 'Testimonials', link: 'testimonials'},
    {name : 'Help', link: 'help'}
  ];

  const clickVerification = () =>{
    burguerMenuValidator ? setburguerMenuValidator(false) : setburguerMenuValidator(true)
  }

    useEffect(() => {
      function handleResize() {
        if (window.innerWidth > 1024) {
          setburguerMenuValidator(false)
        }
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <nav className={`px-10 pt-5 container mx-auto max-w-7xl`}>
      <div className={`${burguerMenuValidator ? "h-96" : ""} mb-16 navbar flex flex-col lg:flex lg:flex-row lg:justify-around lg:align-middle h-16 lg:items-center`}>
      {/* Left side*/}
        <div className='flex justify-between'>
          <div className='navbar-logo-left-box pr-10 xl:pr-16'>
            <LogoSvg fill={`${theme == 'dark' ? '#FFFFFF' : '#000000'}`} />
          </div>
          <button onClick={clickVerification} className='lg:hidden'>
            <BurguerMenu className={`${theme == 'dark' ? 'fill-white' : 'fill-black'}`} />
          </button>
        </div>
      {/* Middle side*/}
        <div className={`${burguerMenuValidator ? "mt-10" : "hidden"} lg:flex lg:flex-row navbar-middle-box mx-auto lg:justify-between`}>
          <ul className='text-center lg:flex lg:flex-row lg:align-middle'>
            {
              link.map(( link )=>(
                <li key={link.name} className={`${theme == 'dark' ? 'text-white' : 'text-black'} mx-4 hover:text-red-400 cursor-pointer`}>
                  <ScrollLink to={link.link} smooth={true} duration={600}>{link.name}</ScrollLink>
                </li>
              ))
            }
          </ul>
        </div>
      {/* Right side*/}
        <div className={`${burguerMenuValidator ? "" : "hidden"} navbar-right-box flex flex-col items-center mt-5 lg:mt-0 lg:flex lg:flex-row`}>
          <RouterLink to="/signin"><button className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'} SignIn mb-2 lg:mb-0 hover:text-red-400 lg:pr-5 text-base font-medium`}>Sign In</button></RouterLink>
          <RouterLink to="/signup"><button className='SignUp w-36 h-11 rounded-3xl border border-rose-500 text-rose-500 text-base font-medium hover:text-red-50 hover:bg-red-500' >Sign Up</button></RouterLink>
          <ThemeManager/>
        </div>
      </div>
    </nav>
  )
}
