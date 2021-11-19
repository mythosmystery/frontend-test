import React, { useEffect, useState } from 'react';
import { SiSpotify } from 'react-icons/si';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { debounce } from '../../utils/helpers';

export default function Navbar() {
   const [shown, setShown] = useState(true);
   const [prevScrollPos, setPrevScrollPos] = useState(0);

   const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;
      setShown((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 10) || currentScrollPos < 64);
      setPrevScrollPos(currentScrollPos);
   }, 30);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [prevScrollPos, shown, handleScroll]);
   return (
      <nav
         className={
            (shown ? 'top-0 ' : '-top-16 ') +
            'fixed w-full h-16 z-50 flex flex-row justify-between px-5 py-4 bg-white/70 backdrop-blur-lg items-center transition-all duration-300 ease-out'
         }
      >
         <div className='flex flex-row'>
            <SiSpotify size='30' />
            <div className='ml-1.5 font-bold text-lg'>Spotify</div>
         </div>
         <div className='lg:hidden'>
            <HiOutlineMenuAlt4 size='30' />
         </div>
         <div className='hidden lg:flex gap-x-8 text-lg'>
            <div className='hover:text-gray-500 cursor-pointer'>Locations</div>
            <div className='hover:text-gray-500 cursor-pointer'>Being Here</div>
            <div className='hover:text-gray-500 cursor-pointer'>Diversity, Equity, & Impact</div>
            <div className='hover:text-gray-500 cursor-pointer'>Students</div>
            <div className='hover:text-gray-500 cursor-pointer'>How We Hire</div>
         </div>
         <div className='hidden lg:flex text-lg'>All Jobs</div>
      </nav>
   );
}
