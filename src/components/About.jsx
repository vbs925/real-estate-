import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:200}}
    transition={{duration:3}}
    whileInView={{opacity:1, x:0}}
    viewport={{ once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-3xl sm:text-4xl font-bold mb-4'> About <span className='underline underline-offset-4 decoration-1 under font-light'>Our brand</span></h1>
        <p className='text-blue-500 max-w-100 text-center mb-8'> Shaping skylines, one happy client at a time</p>
        <div className='flex flex-col mg:flex-row items-center md:items-start md:gap-20'>
          <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg'/>
          <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
              <div>
                <p className='text-4xl font-medim text-gray-800'>5+</p>
                <p>Years of Excellence</p>
              </div>
              <div>
                <p className='text-4xl font-medim text-gray-800'>6+</p>
                <p>Projects Compeleted</p>
              </div>
              <div>
                <p className='text-4xl font-medim text-gray-800'>15+</p>
                <p>Mn. Sq. Ft. Delivered</p>
              </div>
              <div>
                <p className='text-4xl font-medim text-gray-800'>10+</p>
                <p>Onging Projects</p>
              </div>

            </div>
            <p className='my-10 max-w-lg'>
            At Estate, we connect people with homes that match their dreams. With expertise, trust, and a passion for real estate, we make every move simple, transparent, and rewarding.            </p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>'

          </div>

        </div>
      
    </motion.div>
  )
}

export default About
