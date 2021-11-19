import React from 'react';

export default function CardWrapper({ children }) {
   return (
      <div className='flex gap-x-5 lg:gap-x-10 h-[22rem] lg:h-[32rem] overflow-x-hidden ml-5 lg:my-12'>{children}</div>
   );
}
