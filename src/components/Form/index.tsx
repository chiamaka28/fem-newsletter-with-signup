'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  email: string;
};

interface FormProps {
  onSubmitSuccess: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmitSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    onSubmitSuccess();
  };

  return (
    <div>
      <div className="h-72 w-full bg-[url('/illustration-sign-up-mobile.svg')] bg-cover bg-no-repeat"></div>
      <div className='w-[90%] mx-auto pt-7 text-slateGrey'>
        <h2 className='text-slateGrey font-bold text-4xl py-2'>
          Stay updated!
        </h2>
        <p className='my-3 '>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className='px-4 my-5 '>
          <ul className="list-image-[url('/icon-list.svg')] ">
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success </li>
            <li>And much more!</li>
          </ul>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='my-3'>
          <label htmlFor='email' className='text-xs font-bold '>
            Email address
          </label>
          <input
            type='text'
            id='email'
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email',
              },
            })}
            placeholder='email@company.com'
            className='w-full h-14 border border-grey px-6 rounded-lg my-2'
          />
          {errors.email && <p>{errors.email.message}</p>}
          <button
            type='submit'
            className='h-14 bg-slateGrey font-semibold rounded-lg w-full text-white  mt-2'
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
