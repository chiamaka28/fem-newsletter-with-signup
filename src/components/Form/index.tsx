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
    <div className='flex flex-col sm:flex-row-reverse sm:p-4  md:h-[500px] '>
      <div className='relative sm:w-[50%]   rounded-xl overflow-hidden'>
        <img
          src='./illustration-sign-up-mobile.svg'
          className='w-full h-80 sm:hidden object-cover'
          alt=''
        />
        <img
          src='./illustration-sign-up-desktop.svg'
          className='w-full h-full hidden sm:block object-cover'
          alt=''
        />
      </div>
      <div className='w-[90%]  sm:max-w-[300px] sm:p-5 sm:text-sm  mx-auto pt-7 text-slateGrey'>
        <h2 className='text-slateGrey font-bold text-4xl  py-2 sm:text-center'>
          Stay updated!
        </h2>
        <p className='my-3'>
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
        <form onSubmit={handleSubmit(onSubmit)} className='my-5 sm:my-1'>
          <div className='flex justify-between items-center'>
            <label htmlFor='email' className='text-xs font-bold '>
              Email address
            </label>
            {errors.email && (
              <span className='text-tomato text-xs '>
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
              errors.email
                ? 'border-tomato text-tomato bg-red-200  placeholder-tomato'
                : 'border-grey'
            } w-full h-14 sm:h-12 border  px-6 rounded-lg my-2 sm:my-1 focus:outline-none`}
          />

          <button
            type='submit'
            className='h-14 sm:h-12 bg-slateGrey font-semibold rounded-lg w-full text-white  mt-2'
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
