import React from 'react';

function Button({ children }) {
   return (
      <button className='bg-brand-button border-transparent border py-4 px-8 rounded-full text-white text-sm hover:bg-transparent hover:border-brand-button hover:text-brand-button  transition-all duration-200'>
         {children}
      </button>
   );
}

function Rounded({ children, className }) {
   return <button className={'bg-brand-button p-3 rounded-full text-white ' + className}>{children}</button>;
}
function Dark({ children }) {
   return (
      <button className='py-3.5 px-7 rounded-full text-white border border-white hover:bg-white hover:text-black hover:border-transparent transition-all duration-200'>
         {children}
      </button>
   );
}

export default Object.assign(Button, { Rounded, Dark });
