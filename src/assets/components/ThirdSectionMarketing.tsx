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
    <section>
        <div className="box container mx-auto">
            <div className="logo">
                <img src={illustration2} alt='illustration2'></img>
            </div>
            <div className="text">
                <h3 className='text-2xl m-0 lg:text-3xl'><b>We Provide Many Features You Can Use</b></h3>
                <p className='left-side-p mt-5'>You can explore the features that we provide with fun and have their own functions each feature.</p>
                {
                  propuses.map((p)=>(
                    <div>
                    <img src={p.logo}></img>
                    <p>{p.text}</p>
                    </div>
                  ))
                }
            </div>
        </div>
    </section>
  )
}
