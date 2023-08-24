import logo from '../images/Logo.png';
import "../Styles/navbar.css"
import menu from '../images/menu-abierto.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [burguerMenuValidator, setburguerMenuValidator] = useState(false)

  const link = [
    {name : 'About', link: '#about'},
    {name : 'Features', link: '#features'},
    {name : 'Pricing', link: '#pricing'},
    {name : 'Testimonials', link: '#testimonials'},
    {name : 'Help', link: '#help'}
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
    <nav className='px-10 container mx-auto max-w-7xl'>
      <div className={`${burguerMenuValidator ? "h-96" : ""} mb-16 navbar flex flex-col lg:flex lg:flex-row lg:justify-around lg:align-middle h-16 lg:items-center`}>
      {/* Left side*/}
        <div className='flex justify-between'>
          <div className='navbar-logo-left-box pr-10 xl:pr-16'>
            <img src={logo} alt="logo" />
          </div>
          <button onClick={clickVerification} className='lg:hidden'>
            <img className='w-8' src={menu} alt="menu" />
          </button>
        </div>
      {/* Middle side*/}
        <div className={`${burguerMenuValidator ? "mt-10" : "hidden"} lg:flex lg:flex-row navbar-middle-box mx-auto lg:justify-between`}>
          <ul className='text-center lg:flex lg:flex-row lg:align-middle'>
            {
              link.map(( link )=>(
                <li key={link.name} className='mx-4 hover:text-red-400'>
                  <a key={link.name} href={link.link}>{link.name}</a>
                </li>
              ))
            }
          </ul>
        </div>
      {/* Right side*/}
        <div className={`${burguerMenuValidator ? "" : "hidden"} navbar-right-box flex flex-col mx-auto items-center mt-5 lg:mt-0 lg:flex lg:flex-row`}>
          <Link to="/signin"><button className='SignIn mb-2 lg:mb-0 hover:text-red-400'>Sign In</button></Link>
          <Link to="/signup"><button className='SignUp'>Sign Up</button></Link>
        </div>
      </div>
    </nav>
  )
}
