import React from 'react'
import { FaCertificate } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

function Cert({href, text}) { 
   return (
      <div>
         <a 
            href={href}
            target='_blank'
            rel='noreferrer'
            className='flex items-center justify-center gap-2 capitalize font-semibold tracking-wider bg-slate-800 text-slate-200 py-2 hover:bg-slate-600 w-72 md:w-96 lg:py-4'
         >
            <span className='text-red-500'><FaCertificate /></span>
            <span className='text-sm sm:text-base'>{ text }</span>
            <span
               className='text-xs'
            ><GoLinkExternal /></span>
         </a>
      </div>
   )
}

export default Cert