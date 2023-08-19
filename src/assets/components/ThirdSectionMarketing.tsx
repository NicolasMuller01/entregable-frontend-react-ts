import illustration2 from '../images/Illustration 2.png'
import check from '../images/Group 1120.png'
import '../Styles/thirdSectionMarketing.css'

export const ThirdSectionMarketing = () => {

const propuses = [
  {logo: check, text:'Powerfull online protection.'},
  {logo: check, text:'Internet without borders.'},
  {logo: check, text:'Supercharged VPN'},
  {logo: check, text:'No specific time limits.'},
]

  return (
    <section className='mb-20 max-w-5xl mx-auto container px-5'>
        <div className="box container mx-auto md:flex-row flex align-middle place-items-end">
            <div className="logo hidden md:block">
                <img src={illustration2} alt='illustration2'></img>
            </div>
            <div className="text flex flex-col mx-auto justify-center">
                <h3 className='text-2xl m-0 lg:text-3xl'><b>We Provide Many <br></br>Features You Can Use</b></h3>
                <p className='left-side-p mt-8 lg:mt-8 md:mt-4'>You can explore the features that we provide with fun and <br></br> have their own functions each feature.</p>
                {
                  propuses.map((p)=>(
                    <div className='flex flex-row mt-6 lg:mt-6 md:mt-2'>
                    <img className='pr-2' src={p.logo}></img>
                    <p>{p.text}</p>
                    </div>
                  ))
                }
            </div>
        </div>
    </section>
  )
}
