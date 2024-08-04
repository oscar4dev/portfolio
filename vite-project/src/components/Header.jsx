import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

function Header() {

   const [open, setOpen] = useState(false)

   function toggle () {
      setOpen((cur) => {
         return !cur
      })
   }

   return (
      <header className='fixed w-full bg-gradient-to-r from-blue-500 to-sky-500'>
         <nav className='w-11/12 mx-auto flex items-center justify-between'>
            <ul>
               <li className='h-12 flex items-center'>
                  <a href="#home" className='uppercase font-bold tracking-wider text-lg lg:text-2xl'>oscar uche</a>
               </li>
            </ul>
            <ul className='hidden md:flex md:uppercase md:font-bold md:tracking-wide'>
               <li className='h-12 flex items-center justify-center '>
                  <a href="#about" className=' px-2 h-full flex items-center hover:bg-blue-300'>about</a>
               </li>
               <li className='h-12 flex items-center justify-center'>
                  <a href="#projects" className=' px-2 h-full flex items-center hover:bg-blue-300'>projects</a>
               </li>
               <li className='h-12 flex items-center justify-center'>
                  <a href="#technologies" className=' px-2 h-full flex items-center hover:bg-blue-300'>technologies</a>
               </li>
               <li className='h-12 flex items-center justify-center'>
                  <a href="#contact" className=' px-2 h-full flex items-center hover:bg-blue-300'>contact</a>
               </li>
            </ul>
            <ul className='md:hidden'>
               <li>
                  <button 
                     className='text-3xl'
                     onClick={ toggle }
                  >
                     { 
                        open 
                           ? <MdOutlineClose /> 
                           : <MdOutlineMenu /> 
                     }
                  </button>
               </li>
            </ul>
         </nav>

         { 
            open ? 
               <nav className='absolute bg-gradient-to-r from-sky-500 to-blue-500 w-60 right-4'>
                  <ul className='uppercase font-bold tracking-wider p-4 flex flex-col gap-4 w-full text-lg'>
                     <li className='h-10 w-full flex items-center'>
                        <a href="#home" className='h-full w-full flex items-center pl-2 hover:bg-blue-300' onClick={ () => setOpen(false) }>home</a>
                     </li>
                     <li className='h-10 w-full flex items-center'>
                        <a href="#about" className='h-full w-full flex items-center pl-2 hover:bg-blue-300' onClick={ () => setOpen(false) }>about</a>
                     </li>
                     <li className='h-10 w-full flex items-center'>
                        <a href="#projects" className='h-full w-full flex items-center pl-2 hover:bg-blue-300' onClick={ () => setOpen(false) }>projects</a>
                     </li>
                     <li className='h-10 w-full flex items-center'>
                        <a href="#technologies" className='h-full w-full flex items-center pl-2 hover:bg-blue-300' onClick={ () => setOpen(false) }>technologies</a>
                     </li>
                     <li className='h-10 w-full flex items-center'>
                        <a href="#contact" className='h-full w-full flex items-center pl-2 hover:bg-blue-300' onClick={ () => setOpen(false) }>contact</a>
                     </li>
                  </ul>
               </nav> 
            : ''
         }
      </header>
   )
}

export default Header