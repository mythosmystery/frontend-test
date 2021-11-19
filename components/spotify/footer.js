import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function Footer() {
   return (
      <footer className={'fixed bottom-0 pt-16 h-screen w-full z-0 bg-black'}>
         <div className='flex justify-center'>
            <Image
               src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMTBhMjguNjUgMjguNjUgMCAwMC0yOC43IDI4LjY0djUwLjQyaDU3LjI5VjM4LjY0QTI4LjY0IDI4LjY0IDAgMDA2MCAxMHoiIGZpbGw9IiNGRjQ2MzIiLz48cGF0aCBkPSJNNDAuMjggODlWMzguNjRhMTkuNjcgMTkuNjcgMCAwMTM5LjM0IDBWODlINDAuMjh6IiBmaWxsPSIjMkQ0NkI5Ii8+PHBhdGggZD0iTTkyIDg5LjA2SDI3Ljg5djEyLjY5SDkyVjg5LjA2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik05My44MiA5Ny45OUgyNi4wN1YxMTBoNjcuNzVWOTcuOTl6IiBmaWxsPSIjMkQ0NkI5Ii8+PHBhdGggZD0iTTQwLjI4IDM3LjU3djE2LjY3Yy42Ni4xMTQgMS4zMy4xNzQgMiAuMThhMTMuMTYgMTMuMTYgMCAwMDEzLjE5LTEzLjE2IDEyLjkgMTIuOSAwIDAwLTEyLjE2LTEzLjExIDE3LjggMTcuOCAwIDAwLTMuMDMgOS40MnpNODIuMyA3OC4xM2M0LjE3LjMyIDcuNjYtMS4yNyAxMi0yIDQtLjcyIDguMTUgMCAxMi4yMy0uMTNhNi44IDYuOCAwIDAwMy4yNS0uNjIgMS45MzUgMS45MzUgMCAwMDEtMS4zMyAyLjE0OCAyLjE0OCAwIDAwLTEuNTktMi4wNmMtLjg4LS4zMS0xLjg0LS4zMS0yLjc1LS41Ni00LjQ3LTEuMjItMy4zOS02LTQuMTgtOS4zOWE3Ljc4MyA3Ljc4MyAwIDAwLTYuODctNS42MiAxMC42MSAxMC42MSAwIDAwLTguMzkgMy41Yy0xIDEuMDktMS44MSAyLjM0LTIuODYgMy4zOWE2LjcxIDYuNzEgMCAwMS00LjE4IDIuMDZjLTEuOCAwLTMuMzQtMS4yOC01LjIyLS44OC0yLjE0LjQ1LTMuNTEgMi4yMi01IDMuNjNBOS4zMzggOS4zMzggMCAwMTY3IDY5Ljg5Yy0xIC40My0yLjQxLjc1LTMuMDggMS42N0ExLjgyIDEuODIgMCAwMDY0IDc0Yy43NC41NyAyLjM0LjU5IDMuMjUuNThhMjkuMDA2IDI5LjAwNiAwIDAxNC4zNy4wN2MzIC40MyA1LjM0IDIuMzcgOC4yNyAzLjExLjc5MS4xOTIgMS41OTcuMzE2IDIuNDEuMzd6TTk4LjA2IDI4LjI0YTM2Ljg4IDM2Ljg4IDAgMDEtMy42NiA4LjE5IDQwLjI1NiA0MC4yNTYgMCAwMS01LjQgNy4xNCAzMy4xNiAzMy4xNiAwIDAxLTcgNS42MSAyMy42MiAyMy42MiAwIDAxLTguNDIgMy4wOC4xNS4xNSAwIDAxLS4xNy0uMTMuMTUuMTUgMCAwMS4xMi0uMTcgMjUuNCAyNS40IDAgMDA4LjEzLTMuMzRBMzUuMTU2IDM1LjE1NiAwIDAwODguMzggNDNhNDIuNTggNDIuNTggMCAwMDUuNDEtNyA0NC42NzIgNDQuNjcyIDAgMDA0LTcuOS4xNS4xNSAwIDAxLjE5LS4wOS4xNC4xNCAwIDAxLjA4LjIzek04My42OCA1Mi43NmEyMC44NjQgMjAuODY0IDAgMDA0LjA3LS45MiAyOC43NjMgMjguNzYzIDAgMDAzLjg2LTEuNTljMS4yNi0uNjEgMi40Ni0xLjMzIDMuNjgtMkw5OC45MSA0NmEuMTYuMTYgMCAwMS4yMSAwIC4xNi4xNiAwIDAxMCAuMmMtMS4xMS44OC0yLjI2IDEuNzEtMy40NCAyLjVBMzMuOTAzIDMzLjkwMyAwIDAxOTIgNTFjLTEuMjgxLjY1LTIuNjIgMS4xOC00IDEuNTgtMS4zOS4zODEtMi44MjkuNTYtNC4yNy41M2EuMTQuMTQgMCAwMS0uMTQtLjE2LjE1LjE1IDAgMDEuMDktLjE5eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='
               height='80'
               width='80'
            />
         </div>
         <h1 className='text-center text-2xl text-white my-4'>Sound good?</h1>
         <p className='text-lg text-white text-center mx-4'>
            Get to know our hiring process before you apply or find answers to any lingering questions, right here,
            right now.
         </p>
         <div className='flex justify-evenly my-10 mx-4'>
            <Button.Dark>How we hire</Button.Dark>
            <Button.Dark>Read our FAQ</Button.Dark>
         </div>
         <div className='flex flex-col gap-y-6 text-white mx-4 my-12 text-sm'>
            <div className='flex justify-center items-center'>
               <div className='flex-grow'>Communities</div>
               <MdKeyboardArrowDown size='30' />
            </div>
            <div className='flex justify-center items-center'>
               <div className='flex-grow'>Stay Updated</div>
               <MdKeyboardArrowDown size='30' />
            </div>
            <div className='flex justify-center items-center'>
               <div className='flex-grow'>Career</div>
               <MdKeyboardArrowDown size='30' />
            </div>
            <div className='flex justify-center items-center'>
               <div className='flex-grow'>Diversity, Equity & Impact</div>
               <MdKeyboardArrowDown size='30' />
            </div>
         </div>
      </footer>
   );
}
