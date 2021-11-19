import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from './Button';

export default function QuickClick({ children, shortTitle }) {
   return (
      <div className='flex border border-gray-400/50 items-center text-brand-button rounded-full lg:px-[2.5em] lg:py-[2.5em] px-4 py-2.5 hover:border-brand-button group'>
         <div className='flex-grow hidden lg:block text-4xl font-light text-gray-500'>{children}</div>
         <div className='flex-grow lg:hidden'>{shortTitle}</div>
         <Button.Rounded className='group-hover:bg-transparent group-hover:text-brand-button border border-transparent group-hover:border-brand-button group-hover:-translate-x-3 transition-all duration-300 ease-out lg:text-3xl text-xl'>
            <AiOutlineArrowRight />
         </Button.Rounded>
      </div>
   );
}
