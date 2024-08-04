import React from 'react'

function Technology({ icon, text }) {
   return (
      <div className='flex items-center justify-center gap-3 bg-sky-800 text-slate-200 py-1 text-lg tracking-wider font-semibold w-60 md:w-96 lg:py-2'>
         <span>{ icon }</span>
         <span>{ text }</span>
      </div>
   )
}

export default Technology