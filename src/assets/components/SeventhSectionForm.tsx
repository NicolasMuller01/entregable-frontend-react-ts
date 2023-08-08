import { useState } from 'react';

export const SeventhSectionForm = () => {
  type FormType = {
    name: string;
    email: string;
    message: string;
  };

  const [formData, setFormData] = useState<FormType>({
    name: '',
    email: '',
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
    console.log(formData);
    setFormData({
        name: '',
        email: '',
        message: '',
      })
  };

  return (
    <section>
      <div className="text-box">
        <h3 className="text-center text-slate-900 text-4xl font-medium leading-10 mb-5">Let's Talk</h3>
      </div>
      <div className="form-box flex justify-center flex-col items-center align-middle">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            value={formData.name}
            className="h-16 mb-5 drop-shadow-lg"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            onChange={handleInputChange}
            value={formData.email}
            className="h-16 mb-5 drop-shadow-lg"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            onChange={handleInputChange}
            value={formData.message}
            className="mb-5 resize-none drop-shadow-lg"
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