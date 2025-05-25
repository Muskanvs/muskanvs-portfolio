"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div id="encryption" className="flex flex-col items-center justify-center min-h-screen w-full relative -z-20">
  {/* Heading */}
      <div className="absolute top-10 z-[5]">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-[40px] font-bold text-center text-white"
        >
          Education
        </motion.div>
      </div>

      {/* Education Timeline */}
      <div className="flex flex-col mt-25 space-y-10 z-10">
        {/* B.Tech Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border-l-4 border-blue-300 pl-6 ml-3 bg-black bg-opacity-30 backdrop-blur-md rounded-md shadow-md w-[340px] py-4"
        >
          <div className="absolute left-[-14px] top-2 w-5 h-5 bg-blue-300 rounded-full border-2 border-white"></div>
          <h3 className="text-lg font-bold text-white">
            B.Tech in Computer Science and Engineering
          </h3>
          <p className="text-gray-300 text-sm mt-1">2024 – Present</p>
          <p className="text-gray-400 text-sm">
            Jawaharlal Nehru Technological University
          </p>
        </motion.div>

        {/* Diploma Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative border-l-4 border-blue-300 pl-6 ml-3 bg-black bg-opacity-30 backdrop-blur-md rounded-md shadow-md w-[340px] py-4"
        >
          <div className="absolute left-[-14px] top-2 w-5 h-5 bg-blue-300 rounded-full border-2 border-white"></div>
          <h3 className="text-lg font-bold text-white">
            Diploma in Computer Engineering
          </h3>
          <p className="text-gray-300 text-sm mt-1">2021 – 2027</p>
          <p className="text-gray-400 text-sm">
            Govt Polytechnic for Minorities
          </p>
          <p className="text-gray-400 text-sm">GPA: 9.4</p>
        </motion.div>
      </div>

      {/* Bottom Message */}
      <div className="absolute bottom-5 z-10 px-4">
        <p className="cursive text-[20px] text-center text-gray-300">
          turning curiosity into code.
        </p>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
