'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ListIcon } from '../icons';

type Inputs = {
  email: string;
};

interface FormProps {
  email?: string;
  onSubmitSuccess: (email: string) => void;
}

const Form: React.FC<FormProps> = ({ onSubmitSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    onSubmitSuccess(data.email);
  };

  return (
    <div className='flex flex-col sm:flex-row-reverse '>
      <div className=" w-full h-72  bg-[url('/illustration-sign-up-mobile.svg')] sm:bg-[url('/illustration-sign-up-desktop.svg')] bg-cover bg-no-repeat rounded-r-xl"></div>
      <div className='w-[90%] sm:w-full sm:flex sm:justify-center sm:flex-col mx-auto pt-7 text-slateGrey'>
        <h2 className='text-slateGrey font-bold text-4xl py-2'>
          Stay updated!
        </h2>
        <p className='my-3 '>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <div className=' my-5 '>
          <ul>
            <li className='flex gap-2 '>
              <ListIcon />
              Product discovery and building what matters
            </li>
            <li className='flex gap-2 '>
              <ListIcon />
              Measuring to ensure updates are a success{' '}
            </li>
            <li className='flex gap-2'>
              <ListIcon />
              And much more!
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='my-3'>
          <div className='flex justify-between items-center'>
            <label htmlFor='email' className='text-xs font-bold '>
              Email address
            </label>
            {errors.email && (
              <span className='text-tomato text-xs'>
                {errors.email.message}
              </span>
            )}
          </div>
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
            className={`${
              errors.email ? 'border-tomato text-tomato' : 'border-grey'
            } w-full h-14 border  px-6 rounded-lg my-2 focus:outline-none`}
          />

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
