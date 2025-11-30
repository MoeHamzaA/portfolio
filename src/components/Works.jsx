import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer, slideUp, scaleIn } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  award,
}) => {
  return (
    <motion.div 
      variants={slideUp(index * 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full card-hover glow-effect'
      >
        <motion.div 
          className='relative w-full h-[230px] overflow-hidden rounded-2xl'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <motion.div 
            className='absolute inset-0 flex justify-end m-3 gap-2 card-img_hover'
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {live_demo_link && (
              <motion.div
                onClick={() => window.open(live_demo_link, "_blank")}
                className='bg-[#915EFF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pulse-glow'
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                title="Live Demo"
              >
                <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                </svg>
              </motion.div>
            )}
            <motion.div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pulse-glow'
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              title="Source Code"
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className='mt-5'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          <div className='flex items-center gap-2'>
            <h3 className='text-white font-bold text-[24px] text-glow'>{name}</h3>
            {award && (
              <span className='text-[12px] bg-[#915EFF]/20 text-[#915EFF] px-2 py-1 rounded-full font-semibold'>
                {award}
              </span>
            )}
          </div>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </motion.div>

        <motion.div 
          className='mt-4 flex flex-wrap gap-2'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.05, 0.1)}
        >
          {tags.map((tag, tagIndex) => (
            <motion.p
              key={`${name}-${tag.name}`}
              variants={scaleIn(tagIndex * 0.1, 0.3)}
              className={`text-[14px] ${tag.color}`}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  
  const featuredProjects = projects.filter(project => project.featured);
  const displayedProjects = showAll ? projects : featuredProjects;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-glow`}>Project Overview.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are the GitHub repositories and live demos of the projects I've worked on, highlighting my technical skills and ability to deliver real-world solutions. 
          Each project showcases my experience with different technologies, problem-solving capabilities, and the practical application of my knowledge in various domains.

        </motion.p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={showAll ? "all" : "featured"}
          className='mt-20 flex flex-wrap gap-7'
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={staggerContainer(0.15, 0.1)}
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`project-${project.name}-${index}`} index={index} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>

      {projects.length > featuredProjects.length && (
        <motion.div 
          className='mt-12 flex justify-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className='px-8 py-3 rounded-xl bg-tertiary text-white font-bold text-lg hover:bg-[#915EFF] transition-colors duration-300 relative overflow-hidden group'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className='relative z-10'>
              {showAll ? "Show Featured Projects" : "View All Projects"}
            </span>
            <motion.div
              className='absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#bf61ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              initial={false}
            />
          </motion.button>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
