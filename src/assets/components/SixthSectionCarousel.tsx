import { useTheme } from "../../context/theme-context";
import { Carousel } from "./carousel/Carousel"

export const SixthSectionCarousel = () => {

  const { theme } = useTheme();

  return (
    <section id="testimonials" className="max-w-7xl pt-20 mx-auto">
        <div className="text-box px-10">
            <h3 className={`  ${theme == 'dark' ? 'text-white' : 'text-slate-900'} text-center text-4xl font-medium leading-10 mb-5`}>Trusted by Thousands of <br></br>Happy Customer</h3>
            <p className={` ${theme == 'dark' ? 'text-gray-200' : 'text-gray-600'} text-center text-base font-normal leading-loose`}>These are the stories of our customers who have joined us with great <br></br>pleasure when using this crazy feature.</p>
        </div>
        <div className="carousel-box">
            <Carousel></Carousel>
        </div>
    </section>
  )
}
