import * as React from 'react';
import Image from 'next/image';
import process from '../../../public/images/process.jpg';

export const Process: React.FC = () => {
  return (
    <section className="flex justify-center bg-white py-16">
      <div className="max-w-default w-4/5 m-auto">
        <h1 className="pb-16 text-primary text-6xl text-center font-morebi font-bold">How we do this?</h1>
        <Image src={process} alt="Development process" />
      </div>
    </section>
  );
};
