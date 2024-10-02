import React from 'react';
import { SuccessIcon } from '../icons';

interface FormProps {
  onSubmitSuccess: () => void;
}
const SucessMobile: React.FC<FormProps> = ({ onSubmitSuccess }) => {
  return (
    <div className='min-h-screen w-[90%] mx-auto text-slateGrey mt-32'>
      <div className=''>
        <div className='my-7'>
          <SuccessIcon />
        </div>
        <div className='my-5'>
          <h3 className='text-4xl font-bold '>Thanks for subscribing!</h3>
          <p className='my-4'>
            A confirmation email has been sent to ash@loremcompany.com. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
      </div>

      <div>
        <button
          type='submit'
          onClick={onSubmitSuccess}
          className='h-14 bg-slateGrey font-semibold rounded-lg w-full text-white  mt-64'
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SucessMobile;
