import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from './Button';

export default function QuickClick({ children }) {
   return (
      <div className='flex border border-gray-400/50 items-center text-brand-button rounded-full px-5 py-2.5 hover:border-brand-button group'>
         <div className='flex-grow'>{children}</div>
         <Button.Rounded className='group-hover:bg-transparent group-hover:text-brand-button border border-transparent group-hover:border-brand-button group-hover:-translate-x-3 transition-all duration-300 ease-out'>
            <AiOutlineArrowRight size='18' />
         </Button.Rounded>
      </div>
   );
}
