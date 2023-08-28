import { Navbar } from './Navbar'
import { FirstSection } from './FirstSection'
import {SecondSectionData} from './SecondSectionData'
import { ThirdSectionMarketing } from './ThirdSectionMarketing'
import { FourthSectionPlans } from './FourthSectionPlans'
import { Footer } from './Footer'
import { useTheme } from '../../context/theme-context'

export const Home = () => {
  
  const { theme } = useTheme();

  return (
      <div className={`${theme == 'dark' ? "bg-black" : "bg-white"}`}>
        <Navbar />
        <FirstSection />
        <SecondSectionData/>
        <ThirdSectionMarketing/>
        <FourthSectionPlans/>
        <Footer/>
    </div>
  )
}
