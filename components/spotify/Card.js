import React from 'react';

function Card({ children }) {
   return (
      <div className='flex flex-col h-full w-64 flex-grow bg-brand text-white rounded-3xl break-words p-5 lg:p-8'>
         {children}
      </div>
   );
}
function Tag({ children }) {
   return (
      <div className='flex flex-row mb-5'>
         <div className='bg-brand-dark rounded-3xl py-1 px-3 text-xs lg:text-lg'>{children}</div>
      </div>
   );
}
function Button({ children }) {
   return <div className='rounded-full bg-white p-1.5 text-brand-button mx-2'>{children}</div>;
}
function Body({ children }) {
   return <div className='text-2xl lg:text-3xl lg:font-bold mx-auto w-56 flex-grow'>{children}</div>;
}
function Footer({ children }) {
   return <div className='text-sm flex items-center lg:text-lg'>{children}</div>;
}

export default Object.assign(Card, { Tag, Button, Body, Footer });
