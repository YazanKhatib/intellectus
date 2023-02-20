import * as React from 'react';

export const Header: React.FC = () => {
  return (
    <nav className="max-w-default w-4/5 m-auto relative pt-8 lg:top-6 z-10 flex justify-between items-center">
      <img width="70px" src="/images/logo.png" alt="logo" />
      <div className="w-1/2 justify-between ml-20 hidden lg:flex">
        <button className="text-white text-xl font-morebi">About Us</button>
        <button className="text-white text-xl font-morebi">Protfolio</button>
        <button className="text-white text-xl font-morebi">Process</button>
        <button className="text-white text-xl font-morebi">Testimonials</button>
        <button className="text-white text-xl font-morebi">Contact Us</button>
      </div>
      <button className="text-white font-morebi bg-primary border border-tertiary rounded-full py-3 px-6 hover:bg-tertiary">
        Start your Project
      </button>
    </nav>
  );
};
