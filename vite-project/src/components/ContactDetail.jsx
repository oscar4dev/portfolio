import React from 'react'
import { BsTelephoneInbound } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { GoLinkExternal } from "react-icons/go";
 
function ContactDetail({ setOpen }) {

   return (
      <div className='flex flex-col gap-2 bg-blue-200 w-72 p-4 font-bold tracking-wide mb-4 lg:w-96'>
         <div className='flex'>
            <button 
               onClick={ () => setOpen(false) }
               className='ml-auto hover:bg-blue-100 rounded-full'>
               ❌
            </button>
         </div>
         <p className=' flex items-center gap-2'>
            <span className='text-lg'>
               <IoMailOutline />
            </span>: ausker55@yahoo.com
         </p>
         <p className='flex gap-2 items-center'>
            <span><BsTelephoneInbound /></span>
            : +2348101898896
         </p>
         <p className='flex gap-2 items-center'>
            <span className='text-lg'><FaGithub /></span>
            : <a 
               href="https://github.com/oscar4dev"
               target='_blank'
               rel='noreferrer'
               className='flex items-center gap-2 hover:underline hover:text-blue-600'
            ><span>Oscar4dev</span>
            <span className='text-sm'><GoLinkExternal /></span></a>
         </p>
         <p className='flex gap-2 items-center'>
            <span className='text-lg'><CiLinkedin /></span>
            : 
         </p>
      </div>
   )
}

export default ContactDetail