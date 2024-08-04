import React, { useState } from 'react'
import Title from './Title'
import ContactBtn from './ContactBtn'
import { IoMailOutline } from 'react-icons/io5'
import { AiOutlineLinkedin } from 'react-icons/ai'
import ContactDetail from './ContactDetail'

function Homepage() {

   const [open ,setOpen] = useState(false)

   return (
      <section className='w-full pt-24 pb-8' id='home'>
         <div className='w-11/12 mx-auto lg:w-9/12'>
            <div className='flex flex-col items-center gap-2 lg:gap-4'>
               <span className='bg-sky-500 uppercase text-3xl tracking-widest p-2 rounded-xl font-bold lg:text-5xl'>frontend</span>
               <span className='bg-slate-800 text-slate-200 uppercase text-3xl tracking-widest p-2 rounded-xl font-bold lg:text-5xl'>web</span>
               <span className='bg-sky-500 uppercase text-3xl tracking-widest p-2 rounded-xl font-bold lg:text-5xl'>developer</span>
            </div>
            <div className='py-8 flex items-center justify-center lg:py-14'>
               <Title text='oscar uche'/>
            </div>
            <div className='flex flex-col gap-4 items-center justify-center mb-8 lg:flex-row lg:gap-8'>
               <ContactBtn 
                  text='Email'
                  icon={ <IoMailOutline /> }
                  setOpen={ setOpen }
               />
               <ContactBtn 
                  text='LinkedIn'
                  icon={ <AiOutlineLinkedin /> }
                  setOpen={ setOpen }
               />
            </div>
            <div className='flex flex-col items-center'>
               { open ? <ContactDetail setOpen={ setOpen } /> : '' }
            </div>
            <p className='mt-8 leading-7 sm:text-lg'>
               I am a frontend developer with special interest 
               in <span className='text-blue-800 underline'>React</span>. I try to keep up with security and 
               best practices, and I am always looking for new 
               things to learn.
            </p>
         </div>
      </section>
   )
}

export default Homepage