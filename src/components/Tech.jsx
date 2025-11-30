import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, staggerContainer, scaleIn, floatAnimation } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I work with</p>
        <h2 className={`${styles.sectionHeadText} text-glow`}>Tech Stack.</h2>
      </motion.div>
      <motion.div 
        className='mt-20 flex flex-row flex-wrap justify-center gap-10'
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.1, 0.1)}
      >
        {technologies.map((technology, index) => (
          <motion.div 
            className='w-28 h-28' 
            key={technology.name}
            variants={scaleIn(index * 0.1, 0.5)}
            whileHover={{ 
              scale: 1.2,
              y: -10,
              transition: { duration: 0.3 }
            }}
            animate={{
              y: [0, -15, 0],
              transition: {
                duration: 3 + index * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1
              }
            }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
