import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 5000);
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      showNotification("Please enter your name", "error");
      return false;
    }
    if (!form.email.trim()) {
      showNotification("Please enter your email", "error");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showNotification("Please enter a valid email address", "error");
      return false;
    }
    if (!form.message.trim()) {
      showNotification("Please enter a message", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        'service_r5uw73k',  // Your EmailJS Service ID
        'template_ksdbbw6',  // Your EmailJS Template ID
        {
          from_name: form.name,
          to_name: "Hamza",
          from_email: form.email,
          to_email: "mhamzaajmal@hotmail.com",
          message: form.message,
        },
        'JByESSQ4wDrIvZfU5'  // Your EmailJS Public Key
      )
      .then(
        () => {
          setLoading(false);
          showNotification("Thank you! I will get back to you as soon as possible.", "success");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showNotification("Something went wrong. Please try again.", "error");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-[#915EFF] focus:shadow-lg focus:shadow-[#915EFF]/30 transition-all duration-300 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-[#915EFF] focus:shadow-lg focus:shadow-[#915EFF]/30 transition-all duration-300 font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 border-transparent focus:border-[#915EFF] focus:shadow-lg focus:shadow-[#915EFF]/30 transition-all duration-300 font-medium'
            />
          </label>

          <motion.button
            type='submit'
            disabled={loading}
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(145, 94, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Sending..." : "Send"}
          </motion.button>
        </motion.form>

        {/* Toast Notification */}
        <AnimatePresence>
          {notification.show && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 50, x: "-50%" }}
              className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg ${
                notification.type === "success" 
                  ? "bg-green-500" 
                  : "bg-red-500"
              } text-white font-medium`}
            >
              {notification.message}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
