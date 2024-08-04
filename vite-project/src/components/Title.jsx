import React from 'react'

function Title({ text }) {
   return (
      <div>
         <div className='bg-gradient-to-r from-cyan-500 to bg-blue-500 h-1.5 w-12 lg:w-16'></div>
         <h1 className='uppercase font-bold tracking-wider text-2xl sm:text-3xl'>{ text }</h1>
      </div>
   )
}

export default Title