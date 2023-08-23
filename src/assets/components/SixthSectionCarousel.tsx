import { Carousel } from "./carousel/Carousel"

export const SixthSectionCarousel = () => {
  return (
    <section id="testimonials" className="max-w-7xl pt-20 mx-auto">
        <div className="text-box ">
            <h3 className="text-center text-slate-900 text-4xl font-medium leading-10 mb-5">Trusted by Thousands of <br></br>Happy Customer</h3>
            <p className="text-center text-gray-600 text-base font-normal leading-loose">These are the stories of our customers who have joined us with great <br></br>pleasure when using this crazy feature.</p>
        </div>
        <div className="carousel-box">
            <Carousel></Carousel>
        </div>
    </section>
  )
}
