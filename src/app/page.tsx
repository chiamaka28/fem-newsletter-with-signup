'use client';
import Form from '@/components/Form';
import { roboto } from '@/app/ui/fonts';
import SucessMobile from '@/components/SucessMobile';
import { useState } from 'react';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);

  const handleSuccess = (submittedEmail: string) => {
    setIsSubmitted(true);
    setEmail(submittedEmail);
    console.log(isSubmitted);
  };

  const dismissSuccess = () => {
    setIsSubmitted(false);
  };
  return (
    <div className='sm:bg-charcoalGrey min-h-[100%] sm:flex sm:justify-center sm:items-center'>
      <div
        className={` ${roboto.className}  sm:container  sm:bg-white sm:rounded-xl sm:py-5 sm:px-7`}
      >
        {isSubmitted ? (
          <SucessMobile email={email} dismissSuccess={dismissSuccess} />
        ) : (
          <Form onSubmitSuccess={handleSuccess} />
        )}
      </div>
    </div>
  );
}
