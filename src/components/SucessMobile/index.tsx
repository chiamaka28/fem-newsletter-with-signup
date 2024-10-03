import React from 'react';
import { SuccessIcon } from '../icons';

interface FormProps {
  email: string | null;
  dismissSuccess: () => void;
}

const SucessMobile: React.FC<FormProps> = ({ email, dismissSuccess }) => {
  return (
    <div className=' mx-auto text-slateGrey mt-24 sm:mt-0 w-[350px]  py-7 px-9 '>
      <div className=''>
        <div className='my-7 sm:my-1 '>
          <SuccessIcon />
        </div>
        <div className='my-5 sm:my-1'>
          <h3 className='text-4xl font-bold '>Thanks for subscribing!</h3>
          <p className='my-4 text-xs '>
            {`A confirmation email has been sent to ${email}. Please
            open it and click the button inside to confirm your subscription.`}
          </p>
        </div>
      </div>

      <div>
        <button
          type='submit'
          onClick={dismissSuccess}
          className='h-12 bg-slateGrey hover:bg-gradient-to-r hover:from-pink-500 hover:to-tomato font-semibold rounded-lg w-full text-white  mt-32 sm:mt-0'
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SucessMobile;
