import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {
    const [CurrentIndex, SetCurrentIndex] = useState(0);
    const [CardsToShow, SetCardsToShow] = useState(1);
useEffect(()=>{
    const UpdateCardsToShow = () => {
        if(window.innerWidth >= 1024){
            SetCardsToShow(projectsData.length);
        }else{
            SetCardsToShow(1)
        }

    };
    UpdateCardsToShow();

    window.addEventListener('resize',UpdateCardsToShow);
    return()=> window.removeEventListener('resize',UpdateCardsToShow);

},[])

    const NextProject = () => {

        SetCurrentIndex((prevIndex)=> prevIndex + 1 % projectsData.length)
    }

    const PrevProject = () => {
        SetCurrentIndex((prevIndex)=> (prevIndex === 0 ?  projectsData.length -1 : prevIndex - 1 ))
    }
  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    transition={{duration:3}}
    whileInView={{opacity:1, x:0}}
    viewport={{ once: true}}
    
    className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb- text-center'>Projects
            <span className='underline underline-offset-4 decoration-1 under font-light'>  Completed</span></h1>
        <p className='tet-center text-gray-500 mb-6 max-w-80 mx-auto'> Cradting spaces,Bulding legeacies- Explore Our Protfolio</p>

        {/* slider buttons */}

        <div className='flex justify-end items-center mb-8'>
            <button onClick={PrevProject}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Projects'>
                <img src={assets.left_arrow} alt="Previous"/>
            </button>
            <button onClick={NextProject}
            className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Projects'>
                <img src={assets.right_arrow} alt="Next"/>
            </button>
        </div>

        {/* project slider conatiner */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
              style={{transform: `translateX(-${(CurrentIndex*100)/CardsToShow}%)`}}
            
            >
                {projectsData.map((project,index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                         <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                              <h2 className='text-xl font-semibold text-gray-800'>
                                {project.title}
                              </h2>
                              <p className='text-gray-500 text-sm'>
                                {project.price} <span className='px-1'></span> {project.location}
                              </p>
                            </div>

                            </div>

                    </div>
                ))}
            </div>
        </div>



      
    </motion.div>
  )
}

export default Projects
