import mapIlustration from '../images/Huge Global.png'
import amazon from '../images/brands/amazon.png'
import discord from '../images/brands/discord.png'
import netflix from '../images/brands/netflix.png'
import reddit from '../images/brands/reddit.png'
import spotify from '../images/brands/spotify.png'

export const FifthSection = () => {
const brands = [netflix, reddit, amazon, discord, spotify]

  return (
    <section className='mx-auto conteiner my-20 max-w-7xl flex flex-col justify-center items-center'>
        <div className="text-box my-20">
            <h3 className='text-center text-slate-900 text-4xl font-medium leading-10 mb-5'>Huge Global Network <br></br> of Fast VPN</h3>
            <p className='text-center text-gray-600 text-base font-normal leading-loose'>See <b>LaslesVPN</b> everywhere to make it easier for you when you move <br></br> locations.</p>
        </div>
        <div className="image-box mt-20">
            <img src={mapIlustration} alt="map" />
        </div>
        <div className="w-full brands-box flex flex-row mt-20 justify-around">
            {
                brands.map((link)=>(
                    <img className='w-12 sm:w-20 md:w-32 lg:w-40 xl:w-48' src={link} alt="" />
                ))
            }
        </div>
    </section>
  )
}
