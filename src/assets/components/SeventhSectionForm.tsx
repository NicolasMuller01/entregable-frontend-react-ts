import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

type FormType = {
  fullName: string;
  email: string;
  phone: string,
  message: string;
};

const schema = yup
  .object({
    fullName: yup.string()
    .required("Please enter your full name")
    .min(5, "This field must have at least 5 characters")
    .max(30, "This field must have a maximum of 30 characters"),
    phone: yup.string().
    required("Please enter your phone number")
    .min(9, "your number must have at least 9 characters").
    max(15, "Max 30 characters for your number."),
    email: yup.string().
    required("Please enter your email").
    email().
    max(100,"Max 100 characters for your email."),
    message: yup
    .string()
    .required("Please enter your message")
    .min(10, "This message must have at least 10 characters")
    .max(200, "Max 200 characters for your message.")
  })
  .required(); 

export const SeventhSectionForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit((data) => {
    fetch('https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email', {
      method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(data)
    })

    alert('Email sent successfully, we will contact you soon...')
  })

  return (
    <section id='help' className='pb-20'>
      <div className="text-box">
        <h3 className="text-center text-slate-900 text-4xl font-medium leading-10 mb-5">Let's Talk</h3>
      </div>
      <div className="form-box flex justify-center flex-col items-center align-middle">

        <form className="flex flex-col justify-center items-center" onSubmit={onSubmit}>

          <input
            className="sm:w-96 w-64 h-16 mt-5 drop-shadow-lg mx-auto"
            type="text"
            {...register("fullName")}
            name="fullName"
            placeholder="Full name"
          />
          {errors.fullName?.message ? <p className="h-3 text-red-500">{errors.fullName?.message}</p> : <p className="h-3"></p>}

          <input
            className="sm:w-96 w-64 h-16 mt-5 drop-shadow-lg"
            type="email"
            {...register("email")}
            name="email"
            placeholder="Email"
          />
          {errors.email?.message ? <p className="h-3 text-red-500">{errors.email?.message}</p> : <p className="h-3"></p>}

          <input
            className="sm:w-96 w-64 h-16 mt-5 drop-shadow-lg"
            type="tel"
            {...register("phone")}
            name="phone"
            placeholder="Phone"
          />
          {errors.phone?.message ? <p className="h-3 text-red-500">{errors.phone?.message}</p> : <p className="h-3"></p>}

          <textarea
            className="w-64 sm:w-96 mt-5 resize-none drop-shadow-lg"
            rows={10}
            cols={50}
            {...register("message")}
            name="message"
            placeholder="Write something."
          ></textarea>
          {errors.message?.message ? <p className="h-3 text-red-500">{errors.message?.message}</p> : <p className="h-3"></p>}

          <button className="w-44 h-11 bg-red-500 mt-5 rounded-3xl text-white text-base font-bold drop-shadow-xl mx-auto " type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};