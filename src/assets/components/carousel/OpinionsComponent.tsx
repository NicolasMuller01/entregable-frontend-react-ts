import { useTheme } from '../../../context/theme-context';
import star from '../../images/ant-design_star-filled.svg'

type Review = {
    avatar : string,
    fullName : string,
    testimonial : string
  }
  
  type ReviewProps ={
    reviews: Review;
    border?: string;
  }
  
  export const OpinionsComponent: React.FC<ReviewProps> = ({reviews, border}) => {

  const { theme } = useTheme();

  return (
    <div className={`${border} p-6 flex-col flex mx-auto `}>
        <div className="top-box flex flex-row justify-between items-center pb-3">
            <div className="box-left-and-middle flex flex-row">
              <div className="left-box-top items-start">
                  <img className='w-12 h-12 rounded-full object-cover' src={reviews.avatar} alt="face" />
              </div>
              <div className="middle-top-box items-start pl-3">
                  <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'} text-lg font-medium`}><b>{reviews.fullName}</b></p>
                  <p className= {` ${theme == 'dark' ? 'text-gray-200' : 'text-gray-600'} text-sm font-normal`}>Crombie</p>
              </div>
            </div>
            <div className="right-box-top flex flex-row items-center">
                <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'} text-base font-normal`}>4.5</p>
                <img className='w-3 h-3 relative flex-col justify-start items-start inline-flex' src={star} alt="star" />
            </div>
        </div>
        <div className="bottom-bottom items-center align-middle h-fit">
            <p className={` ${theme == 'dark' ? 'text-white' : 'text-slate-900'} text-base font-normal`}>{reviews.testimonial}</p>
        </div>

    </div>
  )
}
