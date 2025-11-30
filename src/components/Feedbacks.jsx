import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant, staggerContainer, scaleIn, slideUp } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={scaleIn(index * 0.15, 0.6)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ 
      scale: 1.05,
      y: -10,
      rotate: [0, -2, 2, -2, 0],
      transition: { duration: 0.5 }
    }}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full card-hover glow-effect'
  >
    <motion.p 
      className='text-white font-black text-[48px] text-glow'
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", delay: index * 0.1 }}
    >"</motion.p>

    <motion.div 
      className='mt-1'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.2 }}
    >
      <motion.p 
        className='text-white tracking-wider text-[18px]'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3 }}
      >
        {testimonial}
      </motion.p>

      <motion.div 
        className='mt-7 flex justify-between items-center gap-1'
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation}  {company}
          </p>
        </div>

        <motion.img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover pulse-glow'
          whileHover={{ 
            scale: 1.3,
            rotate: 360,
            transition: { duration: 0.5 }
          }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] section-transition`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px] glass-effect`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Recognitions of Excellence and Professional Growth</p>
          <h2 className={`${styles.sectionHeadText} text-glow`}>Awards & Certifications.</h2>
        </motion.div>
      </div>
      <motion.div 
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.15, 0.1)}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
