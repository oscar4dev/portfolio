import React from 'react'
import Technology from './Technology'
import { AiOutlineHtml5 } from "react-icons/ai"
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from "react-icons/fa";
import { SiRedux, SiStyledcomponents } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

function Technologies() {
   return (
      <section className='w-full bg-blue-200 py-8' id='technologies'>
         <div className='w-11/12 mx-auto lg:w-9/12'>
            <p className='mb-4 font-bold text-lg sm:text-xl'>
               These are a few of the frontend technologies
               that I utilize...
            </p>
            <div className='flex flex-col gap-3 items-center lg:flex-row lg:gap-8 lg:mb-8'>
               <Technology  
                  icon={ <AiOutlineHtml5 /> }
                  text='HTML'
               />
               <Technology 
                  icon={ <FaCss3 /> }
                  text='CSS'
               />
            </div>
            <div className='flex flex-col gap-3 items-center mt-3 lg:flex-row lg:gap-8 lg:mb-8'>
               <Technology 
                  text='JavaScript' 
                  icon={ <IoLogoJavascript /> }
               />
               <Technology 
                  text='React' 
                  icon={ <FaReact /> }
               />
            </div>
            <div className='flex flex-col gap-3 items-center mt-3 lg:flex-row lg:gap-8 lg:mb-8'>
               <Technology 
                  icon={ <SiRedux /> } 
                  text='Redux Toolkit'
               />
               <Technology 
                  icon={ <SiTailwindcss /> } 
                  text='TailwindCSS'
               />
            </div>
            <div className='flex flex-col gap-3 items-center mt-3'>
               <Technology 
                  text='Styled Components'
                  icon={ <SiStyledcomponents /> }
               />
               <span className=''>
                  <Technology
                     text='Firebase'
                     icon={ <IoLogoFirebase /> }
                  />
               </span>
               <span className='opacity-50'>
                  <Technology
                     icon={ <RiNextjsLine /> }
                     text='Next.js'
                  />
               </span>
            </div>
         </div>
      </section>
   )
}

export default Technologies