import React, { useState } from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'
import { IoMailOutline } from 'react-icons/io5'
import ContactDetail from './ContactDetail'

function Contact() {

   const [open, setOpen] = useState(false)

   function toggle () {
      setOpen((cur) => {
         return !cur
      })
   }

   return (
      <section className='w-full bg-gradient-to-r from-blue-500 to-sky-500 pt-8' id='contact'>
         <div className=' w-11/12 mx-auto'>
            <div className='flex items-center justify-center'>
               { 
                  open 
                     ? <ContactDetail setOpen={ setOpen } /> 
                     : '' 
               }
            </div>
            <div className='flex items-center justify-center gap-2'>
               <button
                  onClick={ toggle }
                  title='Email'
                  className='hover:bg-blue-200 rounded-full p-1 text-xl'>
                  <IoMailOutline />
               </button>
               <button
                  onClick={ toggle }
                  title='GitHub'
                  className='hover:bg-blue-200 rounded-full p-1 text-xl'>
                  <AiOutlineGithub />
               </button>
               <button
                  onClick={ toggle }
                  title='LinkedIn'
                  className='hover:bg-blue-200 rounded-full p-1 text-xl'>
                  <AiOutlineLinkedin />
               </button>
            </div>
         </div>
      </section>
   )
}

export default Contact