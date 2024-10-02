'use client';
import Form from '@/components/Form';
import { roboto } from '@/app/ui/fonts';
import SucessMobile from '@/components/SucessMobile';
import { useState } from 'react';

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSuccess = () => {
    setIsSubmitted(!isSubmitted);
    console.log(isSubmitted);
  };
  return (
    <div className={` ${roboto.className} min-h-[100%] `}>
      {isSubmitted ? (
        <SucessMobile onSubmitSuccess={handleSuccess} />
      ) : (
        <Form onSubmitSuccess={handleSuccess} />
      )}
    </div>
  );
}
