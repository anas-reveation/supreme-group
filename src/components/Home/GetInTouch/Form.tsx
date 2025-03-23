import React, { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = {
  name: string;
  email: string;
  company: string;
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    company: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateField = (name: keyof FormData, value: string): string => {
    if (name === 'name' && !value.trim()) return 'Full name is required';
    if (name === 'email') {
      if (!value.trim()) return 'Email is required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        return 'Invalid email address';
    }
    if (name === 'company' && !value.trim()) return 'Company is required';
    return '';
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: validateField(name as keyof FormData, value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      company: validateField('company', formData.company),
    };
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
    } else {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });

      // Hide toast after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const isFormValid = (): boolean => {
    return (
      !!formData.name.trim() &&
      !!formData.email.trim() &&
      !!formData.company.trim() &&
      !errors.name &&
      !errors.email &&
      !errors.company
    );
  };

  return (
    <>
      <form
        noValidate
        className='mx-auto w-full grid 2xl:gap-9 xl:gap-4 gap-4'
        onSubmit={handleSubmit}
      >
        <div className='relative'>
          <input
            className={`w-full py-2 pr-2 text-base lg:text-lg text-white placeholder:text-white bg-transparent border-b-2  border-white-opacity-40 outline-none ${
              errors.name ? 'border-red-500' : ''
            }`}
            id='name'
            placeholder='Full name *'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className='text-red-500 text-sm mt-1'>{errors.name}</p>
          )}
        </div>

        <div className='relative'>
          <input
            className={`w-full py-2 pr-2 text-base lg:text-lg text-white placeholder:text-white bg-transparent border-b-2 border-white-opacity-40 outline-none ${
              errors.email ? 'border-red-500' : ''
            }`}
            id='email'
            type='email'
            placeholder='Email *'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
          )}
        </div>

        <div className='relative'>
          <input
            className={`w-full py-2 pr-2 text-base lg:text-lg text-white placeholder:text-white bg-transparent border-b-2 border-white-opacity-40 outline-none ${
              errors.company ? 'border-red-500' : ''
            }`}
            type='text'
            id='company'
            placeholder='Company *'
            name='company'
            value={formData.company}
            onChange={handleChange}
          />
          {errors.company && (
            <p className='text-red-500 text-sm mt-1'>{errors.company}</p>
          )}
        </div>

        <div>
          <textarea
            rows={3}
            id='message'
            className='w-full py-2 pr-2 text-base lg:text-lg text-white placeholder:text-white bg-transparent border-b-2 border-white-opacity-40  outline-none'
            placeholder='Message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className='flex justify-center md:grid relative place-content-center md:place-content-start'>
          <button
            type='submit'
            className={`w-full px-8 md:px-12 py-3 text-sm lg:text-base text-white font-semibold border border-white rounded-full transition-all duration-700 ease-in-out hover:text-black hover:bg-white focus:text-black focus:bg-white ${
              !isFormValid() ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={!isFormValid()}
          >
            Send
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg'>
          Form submitted successfully!
        </div>
      )}
    </>
  );
};

export default Form;
