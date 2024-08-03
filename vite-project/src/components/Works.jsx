import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {SectionWrapper} from '../hoc';
import {projects} from '../constants'
import {fadeIn,textVariant} from '../utils/motion';
import ann from './ann.png'

const ProjectCard = ({index,name,description,image}) => {
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} className="bg-tertiary p-5 rounded-2xl sm:w-[800px] w-full">
      
      {image && (
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        </div>
      )} 
          <div className="mt-5">
            <h2 className="text-black font-bold text-[24px]">Tagline</h2>
            
            <p className="text-secondary mt-3  ">
  description
</p>

          </div>
          <div className="mt-4 flex flex-wrap gap-2 ">
                <p className="text-red-100 text-[14px] ">
                  5mins ago
              </p>
          </div>
        
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    
    <motion.div className="flex items-center justify-center h-24">
  <img src={ann} alt="announcement" className="h-full" />
  <h2 className="border-b-2 border-blue-500 inline-block font-bold text-2xl">
    Announcements
  </h2>
</motion.div>



      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works,"works");