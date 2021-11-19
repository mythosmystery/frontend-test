import React from 'react';
import Card from './Card';
import CardWrapper from './CardWrapper';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from './Button';
import QuickClick from './QuickClick';

export default function Content() {
   return (
      <div
         id='content'
         className='relative min-h-screen mb-[100vh] pt-12 max-w-screen bg-brand-pink rounded-b-3xl z-20'
      >
         <div className='flex flex-col break-words'>
            <section className='mb-24'>
               <h1 className='text-2xl text-center p-6 my-4'>Fresh Content</h1>
               <CardWrapper>
                  <Card>
                     <Card.Tag>Design</Card.Tag>
                     <Card.Body>Invisible made Visible: The value of Designing tools for Internal Teams</Card.Body>
                     <Card.Footer>
                        <p>Read</p>
                        <Card.Button>
                           <AiOutlineArrowRight size='18' />
                        </Card.Button>
                     </Card.Footer>
                  </Card>
                  <Card>
                     <Card.Tag>Podcast</Card.Tag>
                     <Card.Body>01: How do you steal from a pirate?</Card.Body>
                     <Card.Footer>
                        <p>Listen</p>
                        <Card.Button>
                           <AiOutlineArrowRight size='18' />
                        </Card.Button>
                     </Card.Footer>
                  </Card>
                  <Card>
                     <Card.Tag>Podcast</Card.Tag>
                     <Card.Body>01: How do you steal from a pirate?</Card.Body>
                     <Card.Footer>
                        <p>Listen</p>
                        <Card.Button>
                           <AiOutlineArrowRight size='18' />
                        </Card.Button>
                     </Card.Footer>
                  </Card>
               </CardWrapper>
               <div className='flex justify-center my-10'>
                  <Button>Discover more</Button>
               </div>
            </section>

            <section className='mb-20'>
               <h1 className='text-3xl lg:text-6xl text-center p-6 my-4 lg:my-12'>Quick Clicks</h1>
               <div className='flex flex-col gap-y-4 m-4 lg:m-14'>
                  <QuickClick shortTitle='Categories'>
                     Discover more about our <span className='font-bold text-black'>categories</span>
                  </QuickClick>
                  <QuickClick shortTitle='Students'>
                     <span className='font-bold text-black'>Students</span>, make an impact not the coffees
                  </QuickClick>
                  <QuickClick shortTitle='Being here'>
                     Read about <span className='font-bold text-black'>being here</span>
                  </QuickClick>
               </div>
            </section>
         </div>
      </div>
   );
}
