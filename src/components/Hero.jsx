import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { socialLinks } from "../constants";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const TypingText = ({ text, className, coloredText, coloredClassName }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [coloredDisplayText, setColoredDisplayText] = useState("");
  const [coloredIndex, setColoredIndex] = useState(0);
  const [showColoredText, setShowColoredText] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !showColoredText) {
      // Start typing colored text after main text is complete
      setTimeout(() => {
        setShowColoredText(true);
      }, 200);
    }
  }, [currentIndex, text, showColoredText]);

  useEffect(() => {
    if (showColoredText && coloredIndex < coloredText.length) {
      const timeout = setTimeout(() => {
        setColoredDisplayText(prev => prev + coloredText[coloredIndex]);
        setColoredIndex(prev => prev + 1);
      }, 100); // Speed of typing

      return () => clearTimeout(timeout);
    }
  }, [coloredIndex, coloredText, showColoredText]);

  return (
    <span className={className}>
      {displayText}
      {showColoredText && (
        <span className={coloredClassName}>{coloredDisplayText}</span>
      )}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <motion.div 
          className='relative z-10'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.h1 
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypingText 
              text="Hi, I'm " 
              className="text-white"
              coloredText="Hamza"
              coloredClassName="text-[#915EFF]"
            />
          </motion.h1>
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I specialize in backend development, AI-driven solutions <br className='sm:block hidden' />
            machine learning models, and cloud-based systems
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            className='mt-6 flex gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
                className='w-10 h-10 rounded-full bg-tertiary flex items-center justify-center hover:bg-[#915EFF] transition-colors duration-300 cursor-pointer z-20 relative'
                aria-label={social.name}
              >
                <div className='w-5 h-5 text-white flex items-center justify-center pointer-events-none'>
                  {social.iconType === "github" ? <GitHubIcon className="w-5 h-5" /> : <LinkedInIcon className="w-5 h-5" />}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
