"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsCodeSlash, BsLaptop } from "react-icons/bs";

export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen w-full relative overflow-hidden z-0"
    >
      {/* Heading */}
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-bold text-center text-white mt-10 z-10"
      >
        Get In Touch
      </motion.div>

      {/* Contact Container */}
      <div className="flex flex-col md:flex-row w-[90%] md:w-[70%] justify-between items-center bg-transparent backdrop-blur-md mt-10 p-8 rounded-2xl shadow-lg text-white z-10">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold">Let's Talk</h2>
          <p className="text-gray-300 text-sm">
            Feel free to reach out if you're looking for a developer, have a
            question, or just want to connect.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-transparent bg-transparent rounded-full flex items-center justify-center">
              <FaEnvelope className="text-[#2A0E61]" />
            </div>
            <div>
              <p className="text-sm font-semibold">Email</p>
              <p className="text-sm text-gray-300">muskanvs786@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-transparent bg-transparent rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-[#2A0E61]" />
            </div>
            <div>
              <p className="text-sm font-semibold">Location</p>
              <p className="text-sm text-gray-300">
                Nandyal, Andhra Pradesh
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-4">
           <a
  href="https://www.linkedin.com/in/vadla-shaik-muskan-567837278"
  target="_blank"
  rel="noopener noreferrer"
>
  <BsLinkedin className="text-white hover:text-[#2A0E61] cursor-pointer text-xl" />
</a>
   <a
  href="https://github.com/Muskanvs"
  target="_blank"
  rel="noopener noreferrer"
><BsGithub className="text-white hover:text-[#2A0E61] cursor-pointer text-xl" /></a>
           <a
  href="https://leetcode.com/u/VadlaShaikmuskan"
  target="_blank"
  rel="noopener noreferrer"
>  <BsCodeSlash className="text-white hover:text-[#2A0E61] cursor-pointer text-xl" /></a>
          <a
        href="https://www.geeksforgeeks.org/user/muskan8e33/"
  target="_blank"
  rel="noopener noreferrer"
>   <BsLaptop className="text-white hover:text-[#2A0E61] cursor-pointer text-xl" /></a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="flex flex-col space-y-4 w-full md:w-1/2 mt-10 md:mt-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent bg-transparent border border-[#2A0E61] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A0E61]"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent bg-transparent border border-[#2A0E61] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A0E61]"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="bg-transparent bg-transparent border border-[#2A0E61] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A0E61]"
          ></textarea>
          <button
            type="submit"
           className="bg-gradient-to-r from-[#2A0E61] to-[#1F0A50] text-white py-2 rounded-full hover:opacity-90 transition font-semibold"
  >
            Send Message
          </button>
        </form>
      </div>

      {/* Background (optional) 
      <div className="absolute inset-0 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
        >
          <source src="/videos/contact-bg.webm" type="video/webm" />
        </video>
        
      </div>
      */}
    </div>
  );
};
