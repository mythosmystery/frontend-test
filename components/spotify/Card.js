import React from 'react';

function Card({ children }) {
   return <div className='h-full w-full bg-brand text-white rounded-xl break-words p-5 flex flex-col'>{children}</div>;
}
function Tag({ children }) {
   return (
      <div className='flex flex-row mb-5'>
         <div className='bg-brand-dark rounded-3xl py-1 px-3  text-xs'>{children}</div>
      </div>
   );
}
function Button({ children }) {
   return <div className='rounded-full bg-white p-1.5 text-brand-button mx-2'>{children}</div>;
}
function Body({ children }) {
   return <div className='text-xl w-[14.5rem] flex-grow'>{children}</div>;
}
function Footer({ children }) {
   return <div className='text-sm flex items-center'>{children}</div>;
}

export default Object.assign(Card, { Tag, Button, Body, Footer });
