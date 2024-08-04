import React from 'react'
import ProjectTile from './ProjectTile'
import QuizzicalPhoto from '/public/Screenshot-quizzical.png'
import BuyMorePhoto from '/public/Screenshot-buymore.png'
import StrawberryPhoto from '/public/Screenshot-strawberry.png'

function Projects() {
   return (
      <section className='w-full py-8' id='projects'>
         <div className='border w-11/12 mx-auto lg:w-9/12'>
            <p className='mb-4 font-bold text-lg sm:text-xl'>
               These are a few of the projects I am currently 
               working on...
            </p>
            <div className='flex flex-col items-center gap-6 mb-6 md:flex-row md:items-center md:justify-center'>
               <div className=''>
                  <ProjectTile 
                     img={ QuizzicalPhoto }
                     projectName='Trivia Quizzical'
                     description='A general knowledge quiz application.'
                     styling='Styled Components'
                     stateMgt='useReducer + context API'
                     otherTools='React Icons + Firebase'
                     liveDemo='https://quizzical.strawberryeat.com/'
                     projectCode='https://github.com/oscar4dev/project-quizzical'
                  />
               </div>
               <div>
                  <ProjectTile 
                     img={ BuyMorePhoto }
                     projectName='BuyMore'
                     description='An online shop that allow customers to order for items and get them delivered to their home.'
                     routing='React Router'
                     styling='Styled Components'
                     stateMgt='React Router, Redux'
                     otherTools='React Icons + Firebase + React hot toast.'
                     liveDemo='https://buymore.strawberryeat.com/'
                     projectCode='https://github.com/oscar4dev/project-online-shop'
                  />
               </div>
            </div>
            <div className='flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-center'>
               <div>
                  <ProjectTile 
                     img={ StrawberryPhoto }
                     projectName='Strawberry'
                     description='An online shop that allow customers to order for items and get them delivered to their home.'
                     routing='React Router'
                     styling='Tailwindcss'
                     stateMgt='React Router, Redux'
                     otherTools='React Icons + React hot toast.'
                     liveDemo='https://resto.strawberryeat.com/menu'
                     projectCode='https://github.com/oscar4dev'
                  />
               </div>
               <div>
                  {/* <ProjectTile 
                     img={ BuyMorePhoto }
                     projectName=''
                     description=''
                     routing=''
                     styling=''
                     stateMgt=''
                     otherTools='React Icons + Firebase'
                     liveDemo=''
                     projectCode='https://github.com/oscar4dev'
                  /> */}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Projects