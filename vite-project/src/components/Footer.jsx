import React from 'react'

function Footer() {

   const date = new Date().getFullYear()

   return (
      <footer className='p-8 w-full h-12 bg-gradient-to-r from-blue-500 to-sky-500 flex items-center justify-center '>
         <p className='text-sm text-center sm:text-base'>
            <span>Copyright &copy; { date } &#183; </span>
            <a 
               href="https://github.com/oscar4dev"
               target='_blank'
               rel='noreferrer'
               className='text-blue-200 hover:underline hover:text-blue-800'
            ><span>Oscar4dev</span>
            </a>
            <span> &#183; <br />All rights reserved.</span>
         </p>
      </footer>
   )
}

export default Footer