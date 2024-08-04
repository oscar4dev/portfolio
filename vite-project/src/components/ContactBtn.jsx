import React from 'react'

function ContactBtn({ icon, text, setOpen }) {
   return (
      <button
         onClick={ () => setOpen(true) }
         className='flex items-center justify-center gap-4 py-2 bg-slate-800 text-slate-200 hover:bg-slate-600 w-60 md:w-96 lg:py-4'
      >
         <span className='text-xl '>{ icon }</span>
         <span className='font-semibold tracking-wide'>{ text }</span>
      </button>
   )
}

export default ContactBtn