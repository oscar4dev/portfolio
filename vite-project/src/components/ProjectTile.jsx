import React from 'react'
import { GoLinkExternal } from "react-icons/go";

function ProjectTile({ img, projectName, routing, description, styling, stateMgt, otherTools, liveDemo, projectCode }) {
   return (
      <div className='border border-slate-800 h-[480px] w-72'>
         <div className='h-2/6'>
            <img 
               src={ img } 
               alt={ projectName } 
               className='w-full h-full object-cover' 
            />
         </div>

         <div className='p-2'>
            <p className='text-sm leading-normal'>
               👉  Project Name: <span className='font-bold uppercase'>
                  { projectName }
               </span>
            </p>
            <p className='text-sm leading-normal'>👉 Description: { description }</p>
            <p className='text-sm leading-normal'>👉 Styling: { styling }</p>
            { routing && <p className='text-sm leading-normal'>👉 Routing: { routing }</p> }
            <p className='text-sm leading-normal'>👉 State Management: { stateMgt }</p>
            <p className='text-sm leading-normal'>👉 Other tools: { otherTools }</p>
            <div className='flex gap-2 mt-5'>
               <div className='bg-blue-200 w-32 flex items-center justify-center hover:underline hover:bg-blue-300'>
                  <a 
                     href={ liveDemo }
                     target='_blank'
                     rel='noreferrer'
                     className='py-2 flex items-center justify-center gap-2'
                  >
                     <span className='text-sm capitalize font-bold'>live demo</span>
                     <span className='text-xs'><GoLinkExternal /></span>
                  </a>
               </div>

               <div className='bg-blue-200 w-32 flex items-center justify-center hover:underline hover:bg-blue-300'>
                  <a 
                     href={ projectCode }
                     target='_blank'
                     rel='noreferrer'
                     className='py-2 flex items-center justify-center gap-2'
                  >
                     <span className='text-sm capitalize font-bold'>project code</span>
                     <span className='text-xs'><GoLinkExternal /></span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectTile