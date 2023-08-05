import star from '../../images/ant-design_star-filled.png'

interface Review {
    image: string;
    name: string;
    location: string;
    rate: string;
    desc: string;
  }
  
  interface ReviewProps {
    reviews: Review;
    border?: string;
  }
  
  export const OpinionsComponent: React.FC<ReviewProps> = ({reviews, border}) => {
  return (
    <div className={`${border} p-6 flex-col flex mx-auto`}>
        <div className="top-box flex flex-row justify-between items-center pb-3">
            <div className="box-left-and-middle flex flex-row">
              <div className="left-box-top items-start">
                  <img src={reviews.image} alt="face" />
              </div>
              <div className="middle-top-box items-start pl-3">
                  <p>{reviews.name}</p>
                  <p>{reviews.location}</p>
              </div>
            </div>
            <div className="right-box-top flex flex-row items-center">
                <p className=' text-slate-900 text-base font-normal leading-loose'>{reviews.rate}</p>
                <img className='w-3 h-3 relative flex-col justify-start items-start inline-flex' src={star} alt="star" />
            </div>
        </div>
        <div className="bottom-bottom items-center align-middle h-fit">
            <p>{reviews.desc}</p>
        </div>

    </div>
  )
}
