import { useState } from 'react';

type FormType = {
  fullName: string;
  email: string;
  phone: string,
  message: string;
};



export const SeventhSectionForm = () => {

  const [formData, setFormData] = useState<FormType>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    if (checkForm()){

      fetch('https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/send-email', {
        method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
      })

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      })
      
      alert('Form Sent Correctly, We will contact you soon...')
    }else{
      alert('Some field is wrong, please try again')
    }


      };

      const checkForm = (): boolean =>{
        if(formData.fullName === ''){
          return false;
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
          return false;
        }else if(formData.phone === ''){
          return false
        }
        return true
      }

  return (
    <section>
      <div className="text-box">
        <h3 className="text-center text-slate-900 text-4xl font-medium leading-10 mb-5">Let's Talk</h3>
      </div>
      <div className="form-box flex justify-center flex-col items-center align-middle">
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            value={formData.fullName}
            className="sm:w-96 w-64 h-16 mb-5 drop-shadow-lg mx-auto"
            type="text"
            name="fullName"
            placeholder="Name"
          />
          <input
            onChange={handleInputChange}
            value={formData.email}
            className="sm:w-96 w-64 h-16 mb-5 drop-shadow-lg"
            type="email"
            name="email"
            placeholder="Email"
          />
           <input
            onChange={handleInputChange}
            value={formData.phone}
            className="sm:w-96 w-64 h-16 mb-5 drop-shadow-lg"
            type="tel"
            name="phone"
            placeholder="Phone"
          />
          <textarea
            onChange={handleInputChange}
            value={formData.message}
            className="w-64 sm:w-96 mb-5 resize-none drop-shadow-lg"
            rows={10}
            cols={50}
            name="message"
            placeholder="Write something."
          ></textarea>
          <button className="w-44 h-11 bg-red-500 rounded-3xl text-white text-base font-bold drop-shadow-xl mx-auto " type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};