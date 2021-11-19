import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
   return (
      <>
         <Head>
            <title>Frontend Test Site</title>
         </Head>
         <div className='max-w-screen min-h-screen bg-gray-600'>
            <div className='grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-4 p-4 min-h-screen'>
               <div className='bg-blue-500 text-center p-2 hidden md:block'>
                  <div>Sidebar</div>
                  <Link href='/spotify'>Spotify Footer</Link>
               </div>
               <div className='bg-blue-500 p-2 md:col-span-3 lg:col-span-2'>
                  <div className='grid grid-cols-1 grid-flow-row gap-2'>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>post</div>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>
                        alsjdakjshdkajshdkajshdkajshdkasjhdkajasdkjaksdjaksjdhakjshdkjsdjfhskjdfhksjdhfksjdhfksdjhfsdfhkjhskdjhfkjshdfksjdhfkjhshdkasjhdkajshdkjashdkashdkajshdkajshdkajshfkjashfkjashfkajshfkajshfkajshfkajshfkjh
                     </div>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>post</div>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>post</div>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>
                        alsjdakjshdkajshdkajshdkajshdkasjhdkajasdkjaksdjaksjdhakjshdkjsdjfhskjdfhksjdhfksjdhfksdjhfsdfhkjhskdjhfkjshdfksjdhfkjhshdkasjhdkajshdkjashdkashdkajshdkajshdkajshfkjashfkjashfkajshfkajshfkajshfkajshfkjh
                     </div>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>post</div>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>post</div>
                     <div className='bg-gray-300 rounded-md p-4 text-center break-words'>post</div>
                  </div>
               </div>
               <div className='bg-blue-500 text-center p-2 hidden lg:block'>suggestions</div>
            </div>
         </div>
      </>
   );
}
