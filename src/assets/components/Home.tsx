import { Navbar } from './Navbar'
import { FirstSection } from './FirstSection'
import {SecondSectionData} from './SecondSectionData'
import { ThirdSectionMarketing } from './ThirdSectionMarketing'
import { FourthSectionPlans } from './FourthSectionPlans'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <>
        <Navbar />
        <FirstSection />
        <SecondSectionData/>
        <ThirdSectionMarketing/>
        <FourthSectionPlans/>
        <Footer/>
    </>
  )
}
