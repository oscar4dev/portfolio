import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import Title from './Title'
import Cert from './Cert';
import { FaReact } from 'react-icons/fa';


function About() {
   return (
      <section className='w-full border bg-blue-200 py-8' id='about'>
         <div className=' w-11/12 mx-auto lg:w-9/12'>
            <div>
               <Title text='who i am' />
            </div>
            <div className='flex items-center justify-center py-8'>
               <span className='text-6xl bg-blue-100 rounded-full p-4'>
                  <IoPersonOutline />
               </span>
            </div>
            <p className='leading-7 sm:text-lg'>
               Hello! 👋 I'm a dedicated web developer 
               currently enrolled at Scrimba and Udemy, where I've 
               invested over 12 months mastering the essentials of 
               web development, with a particular emphasis on 
               <span className='text-blue-800 underline ml-1'>React</span>.
            </p>

            <div className='my-8 flex flex-col gap-6 items-center justify-center'>
               <Cert 
                  href='https://v1.scrimba.com/certificate/uwqg4kur/gfrontend'
                  text='view my Scrimba Certificate'
               />
               <Cert 
                  href='https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/38038046#questions/22075089'
                  text='view my Udemy Certificate'
               />
            </div>

            <div className='mb-8'>
               <h2 className='flex items-center gap-2 mb-2 sm:text-2xl'>
                  <span className='border border-slate-800 text-sky-700'>
                     <FaReact />
                  </span>
                  <span className='text-xl font-bold tracking-wider'>React Specialist</span>
               </h2>
               <p className='leading-7 sm:text-lg'>
                  My special interest in React extends my 
                  capabilities in developing dynamic and efficient 
                  web applications.
               </p>
            </div>

            <div className='mb-8'>
               <h2 className='flex items-center gap-2 mb-2 sm:text-2xl'>
                  <span className='border border-slate-800'>😎</span>
                  <span className='text-xl font-bold tracking-wider'>User-Friendly Solutions</span>
               </h2>
               <p className='leading-7 sm:text-lg'>
                  I thrive on creating tools that prioritize 
                  user-friendliness, simplicity, and a 
                  delightful experience.
               </p>
            </div>

            <div>
               <h2 className='flex items-center gap-2 mb-2 sm:text-2xl'>
                  <span className='border border-slate-800'>🌎</span>
                  <span className='text-xl font-bold tracking-wider'>Global Collaboration</span>
               </h2>
               <p className='leading-7 sm:text-lg'>
                  Throughout my learning journey, I've 
                  collaborated with large specialized teams 
                  across diverse time zones, refining my 
                  working style to prioritize flexibility, 
                  clarity, and effective collaboration.
               </p>
            </div>
            
         </div>
      </section>
   )
}

export default About