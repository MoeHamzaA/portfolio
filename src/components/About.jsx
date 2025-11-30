import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer, scaleIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={scaleIn(index * 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ 
        scale: 1.05,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <motion.img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          whileHover={{ 
            rotate: 360,
            scale: 1.2,
            transition: { duration: 0.6 }
          }}
        />

        <motion.h3 
          className='text-white text-[20px] font-bold text-center'
          whileHover={{ scale: 1.1 }}
        >
          {title}
        </motion.h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Enhanced Overview Section with Headshot */}
      <div className='mt-10 flex flex-col lg:flex-row items-center gap-10'>
        {/* Text Content */}
        <motion.div
          variants={fadeIn("left", "spring", 0.1, 1)}
          className='flex-1'
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[18px] leading-[32px]'
          >
            I am a passionate and skilled developer specializing in AI/ML backend development, cloud computing, and building cutting-edge AI solutions. 
            With a strong focus on creating efficient, scalable systems, I bring expertise as an AI Solutions Developer and Cloud Engineer to tackle complex challenges. 
            Whether you need robust backend development or cloud integration, let's work together to turn your vision into reality and deliver innovative, future-ready solutions!
          </motion.p>
        </motion.div>

        {/* Circular Headshot with Hover Effect */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          className='flex-shrink-0'
        >
          <div className='relative group'>
            {/* Gradient border with enhanced hover effect */}
            <div className='w-64 h-64 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-purple-500/50'>
              <div className='w-full h-full rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105'>
                <img
                  src='/hamza_headshot.jpg'
                  alt='Hamza'
                  className='w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:contrast-110'
                />
              </div>
            </div>
            
            {/* Enhanced floating elements with hover effects */}
            <div className='absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse transition-all duration-300 group-hover:scale-150 group-hover:bg-purple-400'></div>
            <div className='absolute -bottom-2 -left-2 w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-1000 transition-all duration-300 group-hover:scale-150 group-hover:bg-pink-400'></div>
            <div className='absolute top-1/2 -right-4 w-2 h-2 bg-red-500 rounded-full animate-pulse delay-500 transition-all duration-300 group-hover:scale-150 group-hover:bg-red-400'></div>
            
            {/* Additional hover elements */}
            <div className='absolute -top-4 -left-4 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-400'></div>
            <div className='absolute bottom-1/2 -left-6 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 group-hover:bg-green-400'></div>
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.div 
        className='mt-20 flex flex-wrap gap-10'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={staggerContainer(0.1, 0.1)}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
