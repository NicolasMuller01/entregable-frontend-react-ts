import user from '../images/user.png'
import locations from '../images/location.png'
import server from '../images/Server.png'

export const SecondSectionData = () => {

    const images = [
        {name : 'Users', img: user, data:'90+'},
        {name : 'Locations', img: locations, data:'30+'},
        {name : 'Servers', img: server, data: '50+'},
      ];



  return (
    <section className='container mx-auto h-36 lg:h-48 flex justify-center mb-20'>
        <div className="box-data-background shadow-xl rounded-lg mx-auto w-full flex flex-row justify-evenly place-items-center align-middle max-w-5xl">
        {images.map((img, index) => (
          <div className="box flex flex-row align-middle items-center justify-align" key={index}>
            {index === 1 && (
              <>
              <div className="border-l border-custom-gray h-20 lg:h-32 lg:w-20 flex-grow-0 lg:block hidden"></div>
                <div className="contenido flex items-center">
                  <img className="w-10 h-10 mr-1 sm:mr-4" src={img.img} alt={img.name} />
                  <p>
                    <b className="text-lg">{`${img.data}`} </b>
                    <br></br>
                    {img.name}
                  </p>
                </div>
                <div className="border-r border-custom-gray h-20 lg:h-32 lg:w-28 flex-grow-0 w-0 lg:block hidden"></div>
              </>
            )}
            {index !== 1 && (
              <div className="contenido flex items-center">
                <img className="w-10 h-10 mr-1 sm:mr-4" src={img.img} alt={img.name} />
                <p>
                  <b className="text-lg">{`${img.data}`} </b>
                  <br></br>
                  {img.name}
                </p>
              </div>
            )}
          </div>
        ))}
        </div>
    </section>
  )
}
