import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, staggerContainer, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div 
            className='w-[80%] h-[80%] rounded-full flex justify-center items-center p-3'
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0) 100%)',
              boxShadow: '0 0 20px rgba(255,255,255,0.3), inset 0 0 10px rgba(255,255,255,0.2)'
            }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      }
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, type: "spring" }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        className="card-hover"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className='text-white text-[24px] font-bold text-glow'>{experience.title}</h3>
          <motion.p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {experience.company_name}
          </motion.p>
        </motion.div>

        <motion.ul 
          className='mt-5 list-disc ml-5 space-y-2'
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {experience.points.map((point, index) => (
            <motion.li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
              variants={fadeIn("left", "spring", 0, 0.5)}
              whileHover={{ x: 5, color: "#915EFF" }}
            >
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-glow`}>
          Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
