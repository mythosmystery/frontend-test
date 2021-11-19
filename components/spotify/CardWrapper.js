import React from 'react';

export default function CardWrapper({ children }) {
   return <div className='flex gap-x-5 h-[22rem] overflow-x-hidden ml-5'>{children}</div>;
}
