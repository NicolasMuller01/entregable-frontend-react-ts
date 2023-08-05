interface Plan {
  image: string;
  name: string;
  check: string;
  price: string;
  desc: string[];
}

interface PlanProps {
  plans: Plan;
  buttonStyle: string;
  border?: string;
}

export const PlanComponent: React.FC<PlanProps> = ({plans, buttonStyle, border}) => {
  return (
    <div className={border} >
      <img className='pb-5' src={plans.image} alt={plans.name} />
      <h4 className="pb-5 text-center text-slate-900 text-lg font-medium leading-loos">{plans.name}</h4>
      <div className="box-middle-text h-80 w-44 pb-12">
      {
        plans.desc.map((d) =>
          <div className="flex flex-row justify-items-start justify-start pb-5">
            <img className='w-6 h-6 relative flex-col justify-start items-start inline-flex' src={plans.check} alt="check" />
            <p className="text-gray-600 text-sm font-normal leading-loose">{d}</p>
          </div>
        )
      }
      </div>
      <h4 className="text-center text-slate-900 text-2xl font-medium leading-loose">{plans.price}</h4>
      <button className={buttonStyle}>Select</button>
    </div>
  )
}
