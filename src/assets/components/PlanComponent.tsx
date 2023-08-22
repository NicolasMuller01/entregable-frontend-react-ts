import check from '../images/jam_check.png'

type Suscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
  avatar?: string
};

interface SuscriptionProps {
  plans: Suscription;
  buttonStyle: string;
  border?: string;
}

export const PlanComponent: React.FC<SuscriptionProps> = ({plans, buttonStyle, border}) => {
  return (
    <div className={border} >
      <img className='pb-5' src={plans.avatar} alt={plans.title} />
      <h4 className="pb-5 text-center text-slate-900 text-lg font-medium leading-loos">{plans.title}</h4>
      <div className="box-middle-text h-80 w-44 pb-12">
      {
        plans.benefits.map((d) =>
          <div key={d} className="flex flex-row justify-items-start justify-start pb-5">
            <img className='w-6 h-6 relative flex-col justify-start items-start inline-flex' src={check} alt="check" />
            <p className="text-gray-600 text-sm font-normal leading-loose">{d}</p>
          </div>
        )
      }
      </div>
      <h4 className="text-center text-slate-900 text-2xl font-medium leading-loose">{plans.currency == 'U$S' ? '$' :null}{plans.price} {plans.price === 'Free' ? null : '/'} {plans.type ? plans.type.substr(0, 2) : null}</h4>
      <button className={buttonStyle}>Select</button>
    </div>
  )
}
